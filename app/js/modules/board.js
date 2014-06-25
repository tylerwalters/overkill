/* 
 * Board
 * Builds playing grid in .board div.
 */

var board = $('.board');

for (var i = 1; i <= 10; i++) {
	board.append('<div class="row row-' + i + '"></div>');
	for (var j = 1; j <= 8; j++) {
		if ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)) {
			$('.row-' + i).append('<div class="white space ' + i + '-' + j + '"></div>');
		} else {
			$('.row-' + i).append('<div class="black space ' + i + '-' + j + '"></div>');
		}
	}
}

board.css('width', $('.row').height() * 8);