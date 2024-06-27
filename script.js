const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

card1.addEventListener('mouseover', () => {
  card1.style.backgroundColor = 'lightblue';
  card1.style.transform = 'scale(1.1)'; // Zoom in on hover
});

card1.addEventListener('mouseout', () => {
  card1.style.backgroundColor = '#07182E'; // Original color
  card1.style.transform = 'scale(1)'; // Reset zoom on mouse out
});

// Similar code for card2
card2.addEventListener('mouseover', () => {
  card2.style.backgroundColor = 'lightblue';
  card2.style.transform = 'scale(1.1)'; 
});

card2.addEventListener('mouseout', () => {
  card2.style.backgroundColor = '#07182E'; // Original color
  card2.style.transform = 'scale(1)'; 
});
