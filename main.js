
import { createStore } from 'redux';
import createStoreObserver from 'redux-store-observer';
import state from './lib/state';
import { isEqual, throttle } from 'lodash';

const gridSize = 15;
const markerRatio = 1.25;

let store = createStore(state);
let observable = createStoreObserver(store);

console.log(store.getState());

//store.dispatch({ type: 'MARKER_UPDATE', x: 500, y: 300 });

// figure out the size of the canvas to render
let canvasSize = Math.min(window.innerWidth, window.innerHeight);
let squareSize = canvasSize / gridSize;
let markerSize = Math.round((markerRatio * squareSize) / 2);

console.log(`Canvas size: ${canvasSize}`);
console.log(`Square size: ${squareSize}`);
console.log(`Marker size: ${markerSize}`);

// create the canvas elements
const gridCanvas = gameCanvas('gridCanvas', canvasSize);
const markerCanvas = gameCanvas('markerCanvas', canvasSize);
const pathCanvas = gameCanvas('pathCanvas', canvasSize);
const gridCtx = gridCanvas.getContext('2d');
const markerCtx = markerCanvas.getContext('2d');
const pathCtx = pathCanvas.getContext('2d');

markerCtx.globalAlpha = pathCtx.globalAlpha = 0.5;

// add them to the DOM
const gameArea = document.getElementById('gameArea');

gameArea.appendChild(gridCanvas);
gameArea.appendChild(markerCanvas);
gameArea.appendChild(pathCanvas);

// draw the game grid
drawGrid(gridCtx, gridSize);

// setup the canvas for interactions
markerCanvas.addEventListener('mousedown', startPath);
markerCanvas.addEventListener('mouseup', endPath);
markerCanvas.addEventListener('mousemove', throttle(canvasMove, 16));

function gameCanvas (name, size) {
	let tempCanvas = document.createElement('canvas');

	tempCanvas.id = name;
	tempCanvas.className = "gameCanvas";
	tempCanvas.width = tempCanvas.height = size;

	return tempCanvas;
}

function drawFrame () {
    const { board, marker } = store.getState();

    markerCtx.clearRect(0, 0, markerCtx.canvas.width, markerCtx.canvas.height);
    pathCtx.clearRect(0, 0, pathCtx.canvas.width, pathCtx.canvas.height);

    if (board.active) {
        drawMarker(markerCtx, marker);
        showCoords();
    }
}

function startPath () {
    console.log('Path started');
    store.dispatch({ type: 'MARKER_UPDATE', x: event.clientX, y: event.clientY, gridX: Math.floor(event.clientX / squareSize), gridY: Math.floor(event.clientY / squareSize) });
	store.dispatch({ type: 'PATH_START' });
    window.requestAnimationFrame(drawFrame);
}

function endPath () {
    console.log('Path ended');
    store.dispatch({ type: 'PATH_END' });	
    window.requestAnimationFrame(drawFrame);
}

function canvasMove (event) {
    const { board } = store.getState();

    store.dispatch({ type: 'MARKER_UPDATE', x: event.clientX, y: event.clientY, gridX: Math.floor(event.clientX / squareSize), gridY: Math.floor(event.clientY / squareSize) });
    window.requestAnimationFrame(drawFrame);
}

function showCoords () {
    const { board, marker } = store.getState();

    if (board.active) {
        console.log(marker.x, marker.y);
        console.log(marker.gridX, marker.gridY);
    }
}

function drawMarker (context, state) {
    if (!isEqual({}, state)) {
        context.beginPath();
        context.arc(state.x, state.y, markerSize, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
    }
}

function drawPaths (context, state) {
}

function drawGrid (context, gridSize) {
    const canvasSize = context.canvas.clientWidth;
    const diff = context.canvas.clientWidth / gridSize;

    for (let i=diff; i< canvasSize; i += diff ) {
        console.log(`i is ${i}`);
        // draw horizontal line
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.clientWidth, i);
        context.stroke();

        // draw vertical line
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.clientHeight);
        context.stroke();
    }
}

