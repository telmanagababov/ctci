const loggerContainer = document.querySelector('#info');

let loggerInfo = '';

function log() {
    let message = Array.from(arguments).join(' ');
    loggerInfo += message + '\n';
    loggerContainer.innerText = loggerInfo;
    console.log.apply(console, arguments);
}

export default log;