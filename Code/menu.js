document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.menu-item');
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popup-title');
  const popupImage = document.getElementById('popup-image');
  const popupDescription = document.getElementById('popup-description');
  const closeBtn = document.getElementById('close-btn');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const name = item.dataset.name;
      const imgSrc = item.dataset.img;
      const description = item.dataset.description;

      popupTitle.textContent = name;
      popupImage.src = imgSrc;
      popupImage.alt = name;
      popupDescription.textContent = description;

      popup.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.add('hidden');
    }
  });
});
