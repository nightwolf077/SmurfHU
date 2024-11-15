let currentScale = 1;

function openPopup(imageSrc) {
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popup-image');
  
  popupImage.src = imageSrc; // Set the image source
  popup.classList.add('active'); // Show popup with fade-in effect
  currentScale = 1; // Reset zoom scale
  popupImage.style.transform = `scale(${currentScale})`; // Reset image scale
}

function closePopup() {
  const popup = document.getElementById('popup');
  
  popup.classList.remove('active'); // Fade-out effect
}


function zoomIn() {
  const popupImage = document.getElementById('popup-image');
  const imageContainer = document.querySelector('.image-container');

  currentScale += 0.1;
  popupImage.style.transform = `scale(${currentScale})`;

  // Check if the image exceeds container bounds
  if (popupImage.clientWidth * currentScale > imageContainer.clientWidth) {
    popupImage.style.maxWidth = `${imageContainer.clientWidth}px`; // Limit width
  } else {
    popupImage.style.maxWidth = 'none'; // Allow normal scaling
  }
}

function zoomOut() {
  const popupImage = document.getElementById('popup-image');
  const imageContainer = document.querySelector('.image-container');

  currentScale = Math.max(0.1, currentScale - 0.1); // Prevent zoom out too far
  popupImage.style.transform = `scale(${currentScale})`;

  // Check if the image exceeds container bounds
  if (popupImage.clientWidth * currentScale > imageContainer.clientWidth) {
    popupImage.style.maxWidth = `${imageContainer.clientWidth}px`; // Limit width
  } else {
    popupImage.style.maxWidth = 'none'; // Allow normal scaling
  }
}

