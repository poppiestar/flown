
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
document.getElementById('gameArea').appendChild(gridCanvas);
document.getElementById('gameArea').appendChild(markerCanvas);
document.getElementById('gameArea').appendChild(pathCanvas);

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
    const { path, marker } = store.getState();

    markerCtx.clearRect(0, 0, markerCtx.canvas.width, markerCtx.canvas.height);
    pathCtx.clearRect(0, 0, pathCtx.canvas.width, pathCtx.canvas.height);

    if (!isEqual({}, path)) {
        console.log(path);
        drawMarker(markerCtx, marker);
        showCoords();
    }
}

function startPath (event) {
    console.log('Path started');
	store.dispatch({ type: 'PATH_START', colour: 'red', x: event.clientX, y: event.clientY });
    window.requestAnimationFrame(drawFrame);
}

function endPath () {
    console.log('Path ended');
    store.dispatch({ type: 'PATH_END' });	
    window.requestAnimationFrame(drawFrame);
}

function canvasMove (event) {
    const { path } = store.getState();

    store.dispatch({ type: 'MARKER_UPDATE', x: event.clientX, y: event.clientY });

    if (!isEqual({}, path)) {
        window.requestAnimationFrame(drawFrame);
    }
}

function showCoords () {
    const { path, marker } = store.getState();
    const gridX = Math.floor(marker.x / squareSize);
    const gridY = Math.floor(marker.y / squareSize);

    if (!isEqual({}, path)) {
        console.log(marker.x, marker.y);
        console.log(gridX, gridY);
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

