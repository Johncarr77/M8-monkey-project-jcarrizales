const closedFaces = document.querySelectorAll('.emoji.closed');
const openFaces = document.querySelectorAll('.emoji.open');

function toggleEmoji(emoji) {
  if (emoji.classList.contains('closed')) {
    closedFaces.forEach((face) => {
      face.classList.remove('active');
    });
    openFaces.forEach((face) => {
      face.classList.add('active');
    });
  } else if (emoji.classList.contains('open')) {
    openFaces.forEach((face) => {
      face.classList.remove('active');
    });
    closedFaces.forEach((face) => {
      face.classList.add('active');
    });
  }
}
