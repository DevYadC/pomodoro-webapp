// timerWorker.js
let count = 0;
let intervalId = null;

const startTimer = () => {
    clearInterval(intervalId); // Clear existing interval if any
    intervalId = setInterval(() => {
        count--;
        postMessage(count);
        if (count <= 0) {
            clearInterval(intervalId);
        }
    }, 1000);
};

onmessage = function (e) {
    if (e.data.action === 'start') {
        count = e.data.count; // Set count to initial value
        startTimer();
    } else if (e.data.action === 'stop') {
        clearInterval(intervalId); // Stop the timer
    } else if (e.data.action === 'reset') {
        count = e.data.count; // Reset count to initial value
        clearInterval(intervalId); // Clear the interval
    }
};
