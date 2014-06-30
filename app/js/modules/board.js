
/* 
 * Board
 * Builds playing grid in .board div.
 */

// builds the board on the page to fit the screen
function buildBoard(view) {
			// var board is assigned to the div with the .board class
	var board = $('.board'),
			// var portraitArr has the classes assigned to each space on the obard in the correct order for portrait orientation
			portraitArr = ['a-1', 'b-1', 'c-1', 'd-1', 'e-1', 'f-1', 'g-1', 'h-1', 'i-1', 'j-1', 'a-2', 'b-2', 'c-2', 'd-2', 'e-2', 'f-2', 'g-2', 'h-2', 'i-2', 'j-2', 'a-3', 'b-3', 'c-3', 'd-3', 'e-3', 'f-3', 'g-3', 'h-3', 'i-3', 'j-3', 'a-4', 'b-4', 'c-4', 'd-4', 'e-4', 'f-4', 'g-4', 'h-4', 'i-4', 'j-4', 'a-5', 'b-5', 'c-5', 'd-5', 'e-5', 'f-5', 'g-5', 'h-5', 'i-5', 'j-5', 'a-6', 'b-6', 'c-6', 'd-6', 'e-6', 'f-6', 'g-6', 'h-6', 'i-6', 'j-6', 'a-7', 'b-7', 'c-7', 'd-7', 'e-7', 'f-7', 'g-7', 'h-7', 'i-7', 'j-7', 'a-8', 'b-8', 'c-8', 'd-8', 'e-8', 'f-8', 'g-8', 'h-8', 'i-8', 'j-8'],
			// var landscapeArr has the classes assigned to each space on the obard in the correct order for landscape orientation
			landscapeArr = ['a-8', 'b-8', 'c-8', 'd-8', 'e-8', 'f-8', 'g-8', 'h-8', 'i-8', 'j-8', 'a-7', 'b-7', 'c-7', 'd-7', 'e-7', 'f-7', 'g-7', 'h-7', 'i-7', 'j-7', 'a-6', 'b-6', 'c-6', 'd-6', 'e-6', 'f-6', 'g-6', 'h-6', 'i-6', 'j-6', 'a-5', 'b-5', 'c-5', 'd-5', 'e-5', 'f-5', 'g-5', 'h-5', 'i-5', 'a-4', 'b-4', 'c-4', 'd-4', 'e-4', 'f-4', 'g-4', 'h-4', 'i-4', 'j-4', 'a-3', 'b-3', 'c-3', 'd-3', 'e-3', 'f-3', 'g-3', 'h-3', 'i-3', 'j-3', 'a-2', 'b-2', 'c-2', 'd-2', 'e-2', 'f-2', 'g-2', 'h-2', 'i-2', 'j-2', 'a-1', 'b-1', 'c-1', 'd-1', 'e-1', 'f-1', 'g-1', 'h-1', 'i-1', 'j-1'],
			// var i is used to iterate over each space on the board to create the divs and assign the classes
			i = 0,
			// var space will hold the divs with the class space; var rows will be assigned the numbers of rows on the board; var columns will be assigned the number of columns on the board;
			space, rows, columns;

	// clears the board div before the spaces are built to prevent any issues when the spaces are assigned during a board rebuild
	board.empty();

	// Set up board for portrait
	if (view === 'portrait') {
		// var rows is set to 10 for portrait orientation
		rows = 10;
		// var columns is set to 8 for portrait orientation
		columns = 8;

		// iterates over the board to create each space
		for (i; i < 80; i++) {
			// checks if the space is on an odd row and column or even row and column
			if (((i < 8 || i >= 16 && i < 24 || i >= 32 && i < 40 || i >= 48 && i < 56 || i >= 64 && i < 72) && i % 2 !== 0) || ((i >= 8 && i < 16 || i >= 24 && i < 32 || i >= 40 && i < 48 || i >= 56 && i < 64 || i >= 72 && i < 80) && i % 2 === 0)) {
				// create a space with appropriate generic space class, space name class, and white class to color the square correctly
				board.append('<div class="white space ' + portraitArr[i] + '"></div>');
			} 
			// else if a space is on an odd row and even column or even row and odd column
			else {
				// create a space with appropriate generic space class, space name class, and black class to color the square correctly
				board.append('<div class="black space ' + portraitArr[i] + '"></div>');
			}
		}

		// var space is assigned to the .space divs after they are created
		space = $('.space');

		// sets board width to 100% of the available area
		board.css({width: '100%'});
		// sets space width to board width divided by the number of columns; sets space height to the same as the width to make the spaces squares
		space.css({width: Math.floor((board.width() - 10) / 8), height: Math.floor((board.width() - 10) / 8)});
		// sets the board height to the space height times the number of rows; resets the board width to space width times the number of columns to correct for any extra space on the board outside of the spaces;
		board.css({height: space.height() * rows + 10, width: space.width() * columns + 10});
	}
	// Set up board for landscape
	else if (view === 'landscape') {
		// var rows is set to 8 for landscape orientation
		rows = 8;
		// var columns is set to 8 for landscape orientation
		columns = 10;
		
		// iterates over the board to create each space
		for (i; i < 80; i++) {
			// checks if the space is on an odd row and column or even row and column
			if (((i < 10 || i >= 20 && i < 30 || i >= 40 && i < 50 || i >= 60 && i < 70) && i % 2 !== 0) || ((i >= 10 && i < 20 || i >= 30 && i < 40 || i >= 50 && i < 60 || i >= 70 && i < 80) && i % 2 === 0)) {
				// create a space with appropriate generic space class, space name class, and white class to color the square correctly
				board.append('<div class="white space ' + landscapeArr[i] + '"></div>');
			} 
			// else if a space is on an odd row and even column or even row and odd column
			else {
				// create a space with appropriate generic space class, space name class, and black class to color the square correctly
				board.append('<div class="black space ' + landscapeArr[i] + '"></div>');
			}
		}

		// var space is assigned to the .space divs after they are created
		space = $('.space');

		// sets board height to 100% of the available area
		board.css({height: '100%'});
		// sets space width to board height divided by the number of rows; sets space height to the same as the width to make the spaces squares
		space.css({width: Math.floor((board.height() - 10) / 8), height: Math.floor((board.height() - 10) / 8)});
		// sets the board height to the space height times the number of rows to correct for any extra space on the board outside of the spaces; resets the board width to space width times the number of columns;
		board.css({height: space.height() * rows + 10, width: space.width() * columns + 10});
	}

}