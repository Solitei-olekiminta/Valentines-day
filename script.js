function displayMessage() {
    // Main message
    document.getElementById('message').innerHTML = 'Hey buddy! 💖 Happy Valentine\'s Day! 💝';
    document.getElementById('message').style.color = '#ff3366';

    // Additional message
    const additionalMessage = document.getElementById('additional-message');
    additionalMessage.innerHTML = "Just wanted to take a moment to say I appreciate you as a friend! Wishing you lots of laughs and good vibes today!";
    additionalMessage.classList.remove('hidden');
    setTimeout(() => {
        additionalMessage.style.opacity = 1;
    }, 1000);

    // Closing message
    const closingMessage = document.getElementById('closing-message');
    closingMessage.innerHTML = "I’m so grateful for our friendship—let’s make today even better! 🌟";
    closingMessage.classList.remove('hidden');
    setTimeout(() => {
        closingMessage.style.opacity = 1;
    }, 2000);

    // Signature with a friendly tone
    const signature = document.getElementById('signature');
    signature.innerHTML = "With friendship and lots of good vibes, Solitei 💛";  // Friendlier tone
    signature.classList.remove('hidden');
    setTimeout(() => {
        signature.style.opacity = 1;
    }, 3000);

    // Trigger the heart animation
    const heart = document.querySelector('.heart');
    heart.style.animation = 'heartAnimation 2s ease-out forwards';

    // Call confetti effect
    createConfetti();

    // Add a smooth effect to the button
    const button = document.querySelector('button');
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'all 0.3s ease-out';
    button.disabled = true; // Disable button after click
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const numberOfConfetti = 100;

    for (let i = 0; i < numberOfConfetti; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.width = Math.random() * 10 + 'px';
        confetti.style.height = Math.random() * 10 + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear infinite`;

        confettiContainer.appendChild(confetti);
    }
}

/* Add some confetti falling animation */
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        0% {
            transform: translateY(-100px) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
