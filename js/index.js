var SHARE_BUTTON = document.getElementById('share');
var DESKTOP_TOOLTIP = document.getElementById('desktop-tooltip');
var SHARE_MOBILE = document.getElementById('share-mobile');
var USER = document.getElementById('user');

SHARE_BUTTON.addEventListener('click', function (e) {
  e.stopPropagation();
  if (window.screen.width > 600) {
    DESKTOP_TOOLTIP.style.visibility = 'visible';
  } else {
    SHARE_MOBILE.style.display = 'flex';
    USER.style.display = 'none';
  }
});

document
  .getElementById('share-btn-mobile')
  .addEventListener('click', function (e) {
    e.stopPropagation();

    SHARE_MOBILE.style.display = 'none';
    USER.style.display = 'flex';
  });

document.body.addEventListener('click', function (e) {
  if (e.target !== SHARE_BUTTON) {
    DESKTOP_TOOLTIP.style.visibility = 'hidden';
  }
});
