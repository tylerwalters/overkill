var orientation = 'portrait';

function detectOrientation() {
  orientation = $(window).width() > $(window).height() ? 'landscape' : 'portrait';
}

window.addEventListener('resize', function(event){
  detectOrientation();
  buildBoard(orientation);
});

detectOrientation();
buildBoard(orientation);