    const varken = document.querySelector('.varken');
    const kip = document.querySelector('.kip');
    const timerDisplay = document.querySelector('.timer');
    const startButton = document.querySelector('.knop');

    let timeLeft = 10;
    let timerInterval;

    function startTimer() {
        if (timerInterval) {
            clearInterval(timerInterval); 
        }

        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft -= 1; 
                timerDisplay.textContent = timeLeft; 
            } else {
                clearInterval(timerInterval); 
                timerDisplay.textContent = 'Tijd is om druk start!';
            }
        }, 1000); 
    }

    function moveVarken() {
        let leftPos = 20; 
        const moveInterval = setInterval(() => {
            if (leftPos >= 80) {
                clearInterval(moveInterval);
            } else {
                leftPos += 0.5; 
                varken.style.left = leftPos + '%'; 
            }
        }, 50); 
    }

    function moveKip() {
        let rightPos = 20; 
        const moveInterval = setInterval(() => {
            if (rightPos >= 80) { 
                clearInterval(moveInterval); 
            } else {
                rightPos += 0.5; 
                kip.style.right = rightPos + '%'; 
            }
        }, 50); 
    }

    startButton.addEventListener('click', () => {
        moveVarken();
        moveKip(); 
        timeLeft = 10; 
        timerDisplay.textContent = timeLeft; 
        startTimer(); 
    });