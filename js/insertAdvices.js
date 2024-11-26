var currentIndex = 0;
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var advices = [];

// Function to load the selected category's JSON file
function loadAdvices(categoryFile) {
    fetch(`json/${categoryFile}`)
        .then(response => response.json())
        .then(data => {
            advices = data; // Store the loaded advice data
            currentIndex = 0; // Reset the index
            updateButtonStates(currentIndex); // Initialize with the first advice
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
        });
}

// Function to update the content based on the current index
function updateButtonStates(index) {
    if (advices.length === 0) return; // Ensure data is loaded
    document.getElementById("advice-number").textContent = advices[index].number;
    document.getElementById("advice-title").textContent = advices[index].title;
    document.getElementById("advice-description").textContent = advices[index].description;

    // Update button states
    if (index === advices.length - 1) {
        next.style.backgroundColor = 'silver';
        next.disabled = true;
        next.style.cursor = 'default';
    } else {
        next.style.backgroundColor = '#4CAF50';
        next.disabled = false;
        next.style.cursor = 'pointer';
    }
    
    if (index === 0) {
        prev.style.backgroundColor = 'silver';
        prev.disabled = true;
        prev.style.cursor = 'default';
    } else {
        prev.style.backgroundColor = '#4CAF50';
        prev.disabled = false;
        prev.style.cursor = 'pointer';
    }
}

// Add temporary disabling for buttons
function disableButtonsTemporarily() {
    next.disabled = true;
    prev.disabled = true;

    setTimeout(() => updateButtonStates(currentIndex), 1000);
}

// Navigate to the next advice
function nextAdvice() {
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % advices.length;
        updateButtonStates(currentIndex);
    }, 500);
}

// Navigate to the previous advice
function prevAdvice() {
    setTimeout(() => {
        currentIndex = (currentIndex - 1 + advices.length) % advices.length;
        updateButtonStates(currentIndex);
    }, 500);
}

// Add fade effects for transitions
$("#next, #prev").click(function () {
    disableButtonsTemporarily();
    $("#advice-number, #advice-title, #advice-description")
        .fadeOut(500, function () {
            $("#advice-number, #advice-title, #advice-description").fadeIn(500);
        });
});

// Call this function when the user selects a category
function selectCategory(category) {
    const categoryFileMap = {
        "eco": "eco-tips.json",
        "rel": "rel-tips.json",
        "serv": "serv-tips.json",
        "std": "std-tips.json",
        "std-to-std": "std-to-std.json"
    };
    loadAdvices(categoryFileMap[category]);
}
selectCategory('std');
