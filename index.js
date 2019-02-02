const sendMessage = (target, message) => {
    return new Promise((resolve, reject) => {
        const channel = new MessageChannel();

        channel.port1.onmessage = e => {
            if (e.data.error) {
                reject(e.data.error);
            } else {
                resolve(e.data);
            }
        };

        target.contentWindow.postMessage(
            message,
            '*',
            [channel.port2]
        );

    });
};

const init = () => {
    const targetIframe = document.querySelector('iframe');

    const sendMessageRoot = document.querySelector('.SendMessage');
    const input = sendMessageRoot.querySelector('.SendMessage_input');
    const button = sendMessageRoot.querySelector('.SendMessage_button');
    
    button.addEventListener('click', () => {
        const message = input.value;
        sendMessage(targetIframe, message)
            .then(response => console.log(response));
    });
};

init();
