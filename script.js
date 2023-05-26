// Initialize audio objects with audio file paths
const audioHit = new Audio('../assets/15.mp3'); // Sound effect audio
const song = new Audio('../assets/15.mp3'); // Background music audio

/**

Function to play an audio object
@param {object} audioObject - The audio object to play
*/
function playAudio(audioObject) {
audioObject.play();
}
/**

Function to loop an audio object
@param {object} audioObject - The audio object to loop
*/
function loopAudio(audioObject) {
audioObject.loop = true;
playAudio(audioObject);
}
/**

Function to stop an audio object
@param {object} audioObject - The audio object to stop
*/
function stopAudio(audioObject) {
audioObject.pause();
}
/**

Function to play the background music
*/
function play() {
playAudio(song);
}
