// Select elements
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const imageContainer = document.querySelector('.image-container');


window.openPopup = openPopup;
// Initialize Panzoom for zoom and pan functionality
// Initialize Panzoom for zoom and pan functionality (initially empty)
let panzoom;

// Function to initialize Panzoom
function initializePanzoom() {
  panzoom = Panzoom(imageContainer, {
    maxScale: 5,  // Set max zoom level
    minScale: 1,  // Set min zoom level
    contain: 'outside',  // Allow the image to move out of bounds
    startScale: 1,  // Start with normal size
    startX: 0,  // Start from position 0
    startY: 0,  // Start from position 0
  });
}

// Function to open the popup
function openPopup(imageSrc) {
  popupImage.src = imageSrc; // Set the image source dynamically
  popup.classList.add('active'); // Show the popup

  // Destroy the current panzoom instance
  if (panzoom) {
    panzoom.destroy();  // Destroy the panzoom instance to reset state
  }

  // Reinitialize panzoom
  initializePanzoom(); // Reinitialize the Panzoom instance

  console.log('Popup opened and Panzoom reinitialized.');
}

// Function to close the popup
function closePopup() {
  popup.classList.remove('active'); // Hide the popup
  
  // Destroy the panzoom instance when closing the popup
  if (panzoom) {
    panzoom.destroy(); // Clean up Panzoom instance
    panzoom.startX= 0;  
    panzoom.startY= 0;  
    popupImage.style.transform = "scale(1) translate(0px)";
    
  }

  console.log('Popup closed and Panzoom destroyed.');
}

// Zoom In and Zoom Out Functions
function zoomIn() {
  if (panzoom) {
    panzoom.zoomIn();  // Zoom in with Panzoom
  }
}

function zoomOut() {
  if (panzoom) {
    panzoom.zoomOut();  // Zoom out with Panzoom
  }
}

// Add the event listener for mouse wheel zooming
imageContainer.addEventListener('wheel', (event) => {
  event.preventDefault(); // Prevent default scroll behavior

  // Zoom in or out based on wheel direction
  if (event.deltaY < 0) {
    panzoom.zoomIn();
  } else {
    panzoom.zoomOut();
  }

  console.log('Mouse Wheel Zoom');
});

// Ensure that Panzoom is initialized on page load (if needed)
document.addEventListener('DOMContentLoaded', () => {
  initializePanzoom();  // Initialize panzoom on DOM content load
});
