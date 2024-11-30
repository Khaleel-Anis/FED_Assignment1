document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track ul');
        const leftButton = carousel.querySelector('.carousel-button.left');
        const rightButton = carousel.querySelector('.carousel-button.right');
        const items = Array.from(track.children);
        const itemWidth = items[0].getBoundingClientRect().width;
        let currentIndex = 0;

        const updateTrackPosition = () => {
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        };

        leftButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateTrackPosition();
            }
        });

        rightButton.addEventListener('click', () => {
            if (currentIndex < items.length - 4) {
                currentIndex++;
                updateTrackPosition();
            }
        });
    });
});
