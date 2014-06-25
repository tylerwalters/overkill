var orientation = 'portrait';

function detectOrientation() {
  orientation = $(document).width() > $(document).height() ? 'landscape' : 'portrait';
}

window.addEventListener('resize', function(event){
  detectOrientation();
  buildBoard();
});

detectOrientation();
buildBoard();