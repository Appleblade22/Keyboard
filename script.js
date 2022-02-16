const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const timestamps = [];
timestamps.unshift(getTime());
console.log("Hekllo");
//get random number between min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Get random keys
function getRandomKey() {
    return keys[getRandomInt(0, keys.length - 1)];
}
//Target a key
function targetKey() {
    const key = document.getElementById(getRandomKey());
    key.classList.add("selected");

    let start = Date.now();
}
function getTime() {
    return Math.floor(Date.now() / 1000);
}
document.addEventListener("keyup", e => {

    const keyPressed = e.key.toUpperCase();
    const keyElement = document.getElementById(keyPressed);
    if (keyElement !== null) {
        const hilighted = document.querySelector(".selected");

        keyElement.classList.add("hit");
        keyElement.addEventListener("animationend", () => {
            keyElement.classList.remove("hit");
        });
        if (keyPressed === hilighted.innerHTML) {
            timestamps.unshift(getTime());
            const elaspedTime = timestamps[0] - timestamps[1];
            console.log(`Character per minute ${60/elaspedTime}`);
            hilighted.classList.remove("selected");
            targetKey();
        }
    }
});
targetKey();