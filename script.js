const container = document.getElementById('particle-container');

function createSpark() {
    const spark = document.createElement('div');
    spark.classList.add('spark');

    // Randomize size between 3px and 8px
    const size = Math.random() * 5 + 3;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;

    // Randomize starting position across the width of the screen
    spark.style.left = `${Math.random() * 100}vw`;

    // Randomize speed/duration of the drift (8 to 15 seconds)
    const duration = Math.random() * 7 + 8;
    spark.style.animationDuration = `${duration}s`;

    // Randomize horizontal sway direction (-50px to 50px) using CSS variables
    const sway = (Math.random() * 100 - 50) + 'px';
    spark.style.setProperty('--sway', sway);

    // Randomize slight variations in glow color (gold vs soft purple sparks)
    if (Math.random() > 0.6) {
        spark.style.background = 'radial-gradient(circle, #fff 0%, #a855f7 50%, transparent 100%)';
        spark.style.filter = 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.8))';
    }

    container.appendChild(spark);

    // Clean up the element from the DOM after its animation finishes
    setTimeout(() => {
        spark.remove();
    }, duration * 1000);
}

// Generate a new spark every 300 milliseconds
setInterval(createSpark, 300);
}
