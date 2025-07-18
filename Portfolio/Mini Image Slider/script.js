const images = [
    "https://via.placeholder.com/400x250/ff0000",
    "https://via.placeholder.com/400x250/00ff00",
    "https://via.placeholder.com/400x250/0000ff"
  ];
  let index = 0;
  const img = document.getElementById('slider-img');
  
  document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    img.src = images[index];
  });
  
  document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
  });
  