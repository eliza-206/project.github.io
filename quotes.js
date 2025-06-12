const quotes = [
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The expert in anything was once a beginner. - Helen Hayes",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
];

function displayRandomQuote() {
    const quoteElement = document.getElementById('motivational-quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Change quote button event
document.getElementById('change-quote')?.addEventListener('click', displayRandomQuote);

// Display a random quote when page loads
window.addEventListener('DOMContentLoaded', displayRandomQuote);
