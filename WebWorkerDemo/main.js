let worker;
let output = document.getElementById("output");
let button = document.querySelector("button");

document.addEventListener('DOMContentLoaded', init);

function init() {
    worker = new Worker("worker.js");
    worker.addEventListener('message', setMessage);
    worker.addEventListener('error', setError);

    // send a message to the worker
    worker.postMessage("lets get started!");

    output.addEventListener("click", function() {
        // send another message to the worker
        worker.postMessage("Other");
    });

    button.addEventListener("click", function() {
        //send a request to fetch json to the worker
        worker.postMessage("fetch");
    })
}

function setMessage(event) {
    let data = event.data;
    output.textContent += JSON.stringify(data) + ". Thanks Web Worker!" +'\n';
}

function setError(event) {
    console.log(event);
}