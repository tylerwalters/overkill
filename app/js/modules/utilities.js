
/* 
 * Utilities
 * Addtional functionality.
 */

/* 
 * Orientation
 * The window size is measured to determine whether the available space is landscape or portrait orientation. This is used to build the board optimally for the available space.
 */

// var orientation stores the current orientation of the window
var orientation = 'portrait';

// detectOrientation() finds the orientation of the available space in window
function detectOrientation() {
  // if $(window).width() is greater than $(window).height() the window is landscape otherwise it is portrait
  orientation = $(window).width() > $(window).height() ? 'landscape' : 'portrait';
}

// var origOrientation is used to compare orientation to the previous setting to see if the orientation had changed
var origOrientation = orientation;

// creates an event listenter to test orientation when the window is resized and rebuild board if the orientation has changed
window.addEventListener('resize', function(event){
  // rechecks orientation
  detectOrientation();
  // checks if orientation has changed by comparing it to the value stored in origOrientation
  if (orientation !== origOrientation) {
		// if orientation has changed origOrientation is reassigned
		origOrientation = orientation;
		// rebuilds the board to fit the new orientation
		buildBoard(orientation);
  }
});

/* 
 * Load Functions
 * These functions are run at the end of the script on page load in the correct order to make dependencies available.
 */

// detects the orientation on page load
detectOrientation();
// builds the board to fit the correct orientation
buildBoard(orientation);