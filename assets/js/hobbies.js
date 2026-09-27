document.querySelectorAll('.hobby-link').forEach(link => {
  link.addEventListener('click', function () {
    const hobbyImage = document.getElementById('hobby-image');
    const hobbyLabel = document.getElementById('hobby-label');

    hobbyImage.src = this.dataset.image;
    hobbyLabel.textContent = this.dataset.title;
    });
});