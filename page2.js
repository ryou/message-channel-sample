const setText = text => {
    const outputEl = document.querySelector('.output');

    outputEl.innerHTML = text;
};

window.addEventListener('message', event => {
    setText(event.data);

    event.ports[0].postMessage({
        code: 200,
        data: 'success',
    });
});
