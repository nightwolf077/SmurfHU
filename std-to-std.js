const advices = [
    { number: 1, title: "امجد الدقور", description: "حافظ على أداء الصلوات في أوقاتها، خاصة في أوقات الدراسة. يمكنك تحديد أوقات للمذاكرة بحيث لا تتعارض مع الصلاة، أو أذكار الصلاة تذكرك بأهمية الاستمرارية في العبادة" },
    { number: 2, title: "عمار عبده", description: "خصص وقتًا يوميًا لقراءة القرآن ولو لآيات قليلة. القرآن هو مصدر الهداية والطمأنينة، ويمكن أن يعينك على التركيز والصبر خلال أيام الدراسة" },
]

let currentIndex = 0;
let prev = document.getElementById("prev");
let next = document.getElementById("next");

function updateButtonStates(index) {
    document.getElementById("advice-number").textContent = advices[index].number;
    document.getElementById("advice-title").textContent = advices[index].title;
    document.getElementById("advice-description").textContent = advices[index].description;

    // Update button background colors based on current index
    if (currentIndex === advices.length - 1) {
        next.style.backgroundColor = 'silver';
        next.disabled = true;  // Disable next button
        next.style.cursor = 'default';
    } else {
        next.style.backgroundColor = '#4CAF50';
        next.disabled = false; // Enable next button
        prev.style.cursor = 'pointer';
    }
    
    if (currentIndex === 0) {
        prev.style.backgroundColor = 'silver';
        prev.disabled = true;  // Disable prev button
        prev.style.cursor = 'default';
    } else {
        prev.style.backgroundColor = '#4CAF50';
        prev.disabled = false; // Enable prev button
    }
}

function disableButtonsTemporarily() {
    // Disable buttons immediately
    next.disabled = true;
    prev.disabled = true;

    // Set buttons back to normal state after 1000ms (1 second)
    setTimeout(function() {
        updateButtonStates();  // Re-enable buttons based on the current index
    }, 1000);
}

function nextAdvice() {
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % advices.length;
        updateButtonStates(currentIndex);
    }, 500); // 500ms delay
}

function prevAdvice() {
    setTimeout(() => {
        currentIndex = (currentIndex - 1 + advices.length) % advices.length;
        updateButtonStates(currentIndex);
    }, 500); // 500ms delay
}

// Initialize with the first advice
updateButtonStates(currentIndex);
$("#next, #prev").click(function () {
    // Disable buttons temporarily while content fades
    disableButtonsTemporarily();

    // Fade out content
    $("#advice-number, #advice-title, #advice-description")
        .fadeOut(500, function() {
            // After fade-out completes, fade content back in
            $("#advice-number, #advice-title, #advice-description").fadeIn(500);
        });
});

/**/
  