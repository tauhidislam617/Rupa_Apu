// Function to generate stars
function createStars() {
    const container = document.querySelector('.star-container');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(star);
    }
}

// Event listener for input
document.getElementById('searchInput').addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    if (inputValue === 'sunflower') {
        document.getElementById('searchBox').style.display = 'none';
        document.getElementById('message').style.display = 'block';

        setTimeout(() => {
            document.getElementById('message').style.display = 'none';
            document.getElementById('searchBox').style.display = 'block';
            this.value = ''; // Clear input field
        }, 3000);
    }
});

// Initialize stars on load
createStars();
