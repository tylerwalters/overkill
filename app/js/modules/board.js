/* 
 * Board
 * Builds playing grid in .board div.
 */

function buildBoard(view) {
	var board = $('.board'),
			portraitArr = ['a-1', 'b-1', 'c-1', 'd-1', 'e-1', 'f-1', 'g-1', 'h-1', 'i-1', 'j-1', 'a-2', 'b-2', 'c-2', 'd-2', 'e-2', 'f-2', 'g-2', 'h-2', 'i-2', 'j-2', 'a-3', 'b-3', 'c-3', 'd-3', 'e-3', 'f-3', 'g-3', 'h-3', 'i-3', 'j-3', 'a-4', 'b-4', 'c-4', 'd-4', 'e-4', 'f-4', 'g-4', 'h-4', 'i-4', 'j-4', 'a-5', 'b-5', 'c-5', 'd-5', 'e-5', 'f-5', 'g-5', 'h-5', 'i-5', 'j-5', 'a-6', 'b-6', 'c-6', 'd-6', 'e-6', 'f-6', 'g-6', 'h-6', 'i-6', 'j-6', 'a-7', 'b-7', 'c-7', 'd-7', 'e-7', 'f-7', 'g-7', 'h-7', 'i-7', 'j-7', 'a-8', 'b-8', 'c-8', 'd-8', 'e-8', 'f-8', 'g-8', 'h-8', 'i-8', 'j-8'],
			landscapeArr = ['a-8', 'b-8', 'c-8', 'd-8', 'e-8', 'f-8', 'g-8', 'h-8', 'i-8', 'j-8', 'a-7', 'b-7', 'c-7', 'd-7', 'e-7', 'f-7', 'g-7', 'h-7', 'i-7', 'j-7', 'a-6', 'b-6', 'c-6', 'd-6', 'e-6', 'f-6', 'g-6', 'h-6', 'i-6', 'j-6', 'a-5', 'b-5', 'c-5', 'd-5', 'e-5', 'f-5', 'g-5', 'h-5', 'i-5', 'a-4', 'b-4', 'c-4', 'd-4', 'e-4', 'f-4', 'g-4', 'h-4', 'i-4', 'j-4', 'a-3', 'b-3', 'c-3', 'd-3', 'e-3', 'f-3', 'g-3', 'h-3', 'i-3', 'j-3', 'a-2', 'b-2', 'c-2', 'd-2', 'e-2', 'f-2', 'g-2', 'h-2', 'i-2', 'j-2', 'a-1', 'b-1', 'c-1', 'd-1', 'e-1', 'f-1', 'g-1', 'h-1', 'i-1', 'j-1'],
			i = 0,
			j = 0,
			space, rows, columns;

	board.empty();

	// Set up board for portrait
	if (view === 'portrait') {
		rows = 10;
		columns = 8;

		for (i; i < 80; i++) {
			if (((i < 8 || i >= 16 && i < 24 || i >= 32 && i < 40 || i >= 48 && i < 56 || i >= 64 && i < 72) && i % 2 !== 0) || ((i >= 8 && i < 16 || i >= 24 && i < 32 || i >= 40 && i < 48 || i >= 56 && i < 64 || i >= 72 && i < 80) && i % 2 === 0)) {
				board.append('<div class="white space ' + portraitArr[i] + '"></div>');
			} else {
				board.append('<div class="black space ' + portraitArr[i] + '"></div>');
			}
		}

		space = $('.space');

		board.css({width: '100%'});
		space.css({width: Math.floor((board.width() - 10) / 8), height: Math.floor((board.width() - 10) / 8)});
		board.css({height: space.height() * rows + 10, width: space.width() * columns + 10});
	}
	// Set up board for landscape
	else if (view === 'landscape') {
		rows = 8;
		columns = 10;
		
		for (i; i < 80; i++) {
			if (((i < 10 || i >= 20 && i < 30 || i >= 40 && i < 50 || i >= 60 && i < 70) && i % 2 !== 0) || ((i >= 10 && i < 20 || i >= 30 && i < 40 || i >= 50 && i < 60 || i >= 70 && i < 80) && i % 2 === 0)) {
				board.append('<div class="white space ' + landscapeArr[i] + '"></div>');
			} else {
				board.append('<div class="black space ' + landscapeArr[i] + '"></div>');
			}
		}

		space = $('.space');

		board.css({height: '100%'});
		space.css({width: Math.floor((board.height() - 10) / 8), height: Math.floor((board.height() - 10) / 8)});
		board.css({height: space.height() * rows + 10, width: space.width() * columns + 10});
	}

}