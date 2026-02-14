// Global variables
let noClickCount = 0;
let noButtonScale = 1;
const funnyMessages = [
    "Are you sure? 🥺",
    "Think again 😼",
    "You can't escape love 😎",
    "Nice try 😂",
    "Please? 🥹"
];

// DOM elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const funnyMessage = document.getElementById('funnyMessage');
const mainContent = document.getElementById('mainContent');
const successMessage = document.getElementById('successMessage');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const confettiCanvas = document.getElementById('confettiCanvas');
const ctx = confettiCanvas.getContext('2d');

// Set canvas size
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

// Resize canvas on window resize
window.addEventListener('resize', () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
});

// Music control
let isMusicPlaying = false;
musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🔇';
        isMusicPlaying = false;
    } else {
        bgMusic.play();
        musicToggle.textContent = '🔊';
        isMusicPlaying = true;
    }
});

// Auto-play music on page load (with user interaction)
document.addEventListener('click', () => {
    if (!isMusicPlaying) {
        bgMusic.play();
        musicToggle.textContent = '🔊';
        isMusicPlaying = true;
    }
}, { once: true });

// Create floating hearts
function createFloatingHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Generate floating hearts periodically
setInterval(createFloatingHeart, 300);

// NO button hover and click behavior
function moveNoButton() {
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    
    // Random position within viewport
    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // Shrink button
    noButtonScale -= 0.1;
    if (noButtonScale < 0.3) noButtonScale = 0.3;
    noBtn.style.transform = `scale(${noButtonScale})`;
    
    // Show funny message
    noClickCount++;
    if (noClickCount <= funnyMessages.length) {
        funnyMessage.textContent = funnyMessages[noClickCount - 1];
    }
    
    // Change button text after 5 attempts
    if (noClickCount >= 5) {
        noBtn.textContent = "Still no? Really? 😭";
    }
}

// NO button events
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Touch support for mobile
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// YES button click - Celebration!
yesBtn.addEventListener('click', () => {
    // Hide main content
    mainContent.style.display = 'none';
    
    // Show success message
    successMessage.style.display = 'block';
    
    // Start confetti
    startConfetti();
    
    // Increase floating hearts
    const heartInterval = setInterval(createFloatingHeart, 100);
    setTimeout(() => clearInterval(heartInterval), 5000);
});

// Confetti animation
let confettiParticles = [];

class ConfettiParticle {
    constructor() {
        this.x = Math.random() * confettiCanvas.width;
        this.y = -10;
        this.size = Math.random() * 8 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.color = this.randomColor();
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }
    
    randomColor() {
        const colors = ['#ff6b9d', '#c44569', '#f8b500', '#ff1744', '#ff5252', '#ffc0cb'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        
        if (this.y > confettiCanvas.height) {
            return false;
        }
        return true;
    }
    
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function startConfetti() {
    // Create initial burst
    for (let i = 0; i < 150; i++) {
        confettiParticles.push(new ConfettiParticle());
    }
    
    // Continue adding confetti
    const confettiInterval = setInterval(() => {
        for (let i = 0; i < 5; i++) {
            confettiParticles.push(new ConfettiParticle());
        }
    }, 50);
    
    // Stop after 5 seconds
    setTimeout(() => clearInterval(confettiInterval), 5000);
    
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    confettiParticles = confettiParticles.filter(particle => {
        particle.draw();
        return particle.update();
    });
    
    if (confettiParticles.length > 0) {
        requestAnimationFrame(animateConfetti);
    }
}

// Grow YES button slightly when NO button is clicked (optional fun feature)
noBtn.addEventListener('click', () => {
    const currentYesScale = parseFloat(getComputedStyle(yesBtn).transform.match(/matrix\(([^)]+)\)/)?.[1]?.split(', ')[0] || 1);
    yesBtn.style.transform = `scale(${Math.min(currentYesScale + 0.05, 1.3)})`;
});
