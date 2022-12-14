'use strict';

const documentReady = () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    const getPartner = () => {
        alert('Ahora somos partners')
        alert('mi yunta')
        alert('mi papi,mi churro,mi rey!!')
        location.href = 'https://www.youtube.com/watch?v=P2rUuv1EQhQ'
    };

    const brokenHeart = () => {
        noButton.style.top = Math.random() * innerHeight + 'px';
        noButton.style.left = Math.random() * innerWidth + 'px';
    };

    yesButton.addEventListener('click', getPartner);
    noButton.addEventListener('mouseover', brokenHeart);
};

    document.addEventListener('DOMContentLoaded', documentReady);