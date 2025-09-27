
const ratingStars = document.querySelectorAll('.rating i');

ratingStars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const val = star.getAttribute('data-value');
    highlightStars(val);
  });

  star.addEventListener('mouseout', () => {
    const ratingDiv = star.parentElement;
    const currentRating = ratingDiv.getAttribute('data-rating');
    highlightStars(currentRating);
  });

  star.addEventListener('click', () => {
    const ratingDiv = star.parentElement;
    ratingDiv.setAttribute('data-rating', star.getAttribute('data-value'));
    highlightStars(star.getAttribute('data-value'));
    alert('You rated ' + star.getAttribute('data-value') + ' stars!');
  });
});

function highlightStars(rating) {
  ratingStars.forEach(star => {
    if (star.getAttribute('data-value') <= rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}