document.addEventListener('DOMContentLoaded', () => {
    const popupImage = document.getElementById('popup-image');
    if (popupImage) {
      Panzoom(popupImage); // Initialize Panzoom
      console.log('Panzoom initialized on:', popupImage);
    } else {
      console.error('Popup image element not found!');
    }
  });
  