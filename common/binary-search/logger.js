const loggerContainer = document.querySelector('main');

let loggerInfo = '';

function log(message) {
    loggerInfo += message + '\n';
    loggerContainer.innerText = loggerInfo;
}

export default log;