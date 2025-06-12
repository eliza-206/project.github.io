let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;
let isBreak = false;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById('status').textContent = isBreak ? "On break!" : "Studying...";
        
        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                isRunning = false;
                
                // Play a sound or show notification
                alert(isBreak ? "Break time is over! Time to study." : "Study session complete! Take a break.");
                
                // Switch between study and break
                isBreak = !isBreak;
                const studyTime = parseInt(document.getElementById('study-time').value) || 25;
                const breakTime = parseInt(document.getElementById('break-time').value) || 5;
                timeLeft = (isBreak ? breakTime : studyTime) * 60;
                
                updateDisplay();
                document.getElementById('status').textContent = isBreak ? "Break time!" : "Ready to study";
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('status').textContent = "Paused";
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    isBreak = false;
    const studyTime = parseInt(document.getElementById('study-time').value) || 25;
    timeLeft = studyTime * 60;
    updateDisplay();
    document.getElementById('status').textContent = "Ready to study!";
}

// Event listeners
document.getElementById('start-btn')?.addEventListener('click', startTimer);
document.getElementById('pause-btn')?.addEventListener('click', pauseTimer);
document.getElementById('reset-btn')?.addEventListener('click', resetTimer);

// Update timer when settings change
document.getElementById('study-time')?.addEventListener('change', function() {
    if (!isRunning && !isBreak) {
        timeLeft = (parseInt(this.value) || 25) * 60;
        updateDisplay();
    }
});

document.getElementById('break-time')?.addEventListener('change', function() {
    if (!isRunning && isBreak) {
        timeLeft = (parseInt(this.value) || 5) * 60;
        updateDisplay();
    }
});

// Initialize display
window.addEventListener('DOMContentLoaded', updateDisplay);
