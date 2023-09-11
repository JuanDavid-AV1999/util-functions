export const DOMRenderElement = (element, timerOut = false) => {
    return new Promise((resolve, reject) => {
        if (timerOut !== false) {
            const timer = setTimeout(() => {
                clearInterval(timer);
                reject('The element was not loaded in the DOM');
            }, timerOut);
        }

        const observer = new MutationObserver(() => {
            const DOMElement = document.querySelector(element);
            if (DOMElement !== null) {
                observer.disconnect();
                resolve(DOMElement);
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    });
};
