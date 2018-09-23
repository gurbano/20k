/* import { MyLibrary } from './MyLibrary';

console.log('See this in your browser console: Typescript Webpack Starter Launched');

const myLibrary = new MyLibrary();
const result = myLibrary.executeDependency();

console.log(`A random number ${result}`);
 */

import App from './app';
import AudioSystem from './app/audio/AudioSystem';


var canvas: Partial<HTMLCanvasElement> = document.getElementById('canvas');
const MainApp = new App(canvas);

const startGame = async function startGame() {
    await MainApp.playLoadingScreen();
    await MainApp.preload();
    // await MainApp.playIntro();
    await MainApp.draw();
}

startGame();