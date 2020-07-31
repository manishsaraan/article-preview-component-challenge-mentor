document.getElementById('share').addEventListener('click', function (e) {
  e.stopPropagation();
  if (window.screen.width > 600) {
    var tooltip = document.getElementById('desktop-tooltip');
    tooltip.style.visibility = 'visible';
  } else {
    var tooltip = document.getElementById('share-mobile');
    var user = document.getElementById('user');
    tooltip.style.display = 'flex';
    user.style.display = 'none';
  }
});

document.getElementById('share-mb-min').addEventListener('click', function (e) {
  e.stopPropagation();
  var tooltip = document.getElementById('share-mobile');
  var user = document.getElementById('user');
  tooltip.style.display = 'none';
  user.style.display = 'flex';
});

document.body.addEventListener('click', function (e) {
  if (e.target !== document.getElementById('share')) {
    var tooltip = document.getElementById('desktop-tooltip');
    tooltip.style.visibility = 'hidden';
  }
});
