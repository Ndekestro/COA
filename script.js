document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hover');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('hover');
    });
});
