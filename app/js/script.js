/* 
 * Board
 * Builds playing grid in .board div.
 */

function buildBoard(view) {
	var board = $('.board'),
			portraitArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL', 'MM', 'NN', 'OO', 'PP', 'QQ', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ', 'AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG', 'HHH', 'III', 'JJJ', 'KKK', 'LLL', 'MMM', 'NNN', 'OOO', 'PPP', 'QQQ', 'RRR', 'SSS', 'TTT', 'UUU', 'VVV', 'WWW', 'XXX', 'YYY', 'ZZZ', 'AAAA', 'BBBB'],
			landscapeArr = ['H', 'P', 'X', 'FF', 'NN', 'VV', 'DDD', 'LLL', 'TTT', 'BBBB', 'G', 'O', 'W', 'EE', 'MM', 'UU', 'CCC', 'KKK', 'SSS', 'AAAA', 'F', 'N', 'V', 'DD', 'LL', 'TT', 'BBB', 'JJJ', 'RRR', 'ZZZ', 'E', 'M', 'U', 'CC', 'KK', 'SS', 'AAA', 'III', 'QQQ', 'YYY', 'D', 'L', 'T', 'BB', 'JJ', 'RR', 'ZZ', 'HHH', 'PPP', 'XXX', 'C', 'K', 'S', 'AA', 'II', 'QQ', 'YY', 'GGG', 'OOO', 'WWW', 'B', 'J', 'R', 'Z', 'HH', 'PP', 'XX', 'FFF', 'NNN', 'VVV', 'A', 'I', 'Q', 'Y', 'GG', 'OO', 'WW', 'EEE', 'MMM', 'UUU'],
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