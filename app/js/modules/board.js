/* 
 * Board
 * Builds playing grid in .board div.
 */

var board = $('.board'),
		portraitArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL', 'MM', 'NN', 'OO', 'PP', 'QQ', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ', 'AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG', 'HHH', 'III', 'JJJ', 'KKK', 'LLL', 'MMM', 'NNN', 'OOO', 'PPP', 'QQQ', 'RRR', 'SSS', 'TTT', 'UUU', 'VVV', 'WWW', 'XXX', 'YYY', 'ZZZ', 'AAAA', 'BBBB'],
		landscapeArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL', 'MM', 'NN', 'OO', 'PP', 'QQ', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ', 'AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG', 'HHH', 'III', 'JJJ', 'KKK', 'LLL', 'MMM', 'NNN', 'OOO', 'PPP', 'QQQ', 'RRR', 'SSS', 'TTT', 'UUU', 'VVV', 'WWW', 'XXX', 'YYY', 'ZZZ', 'AAAA', 'BBBB'],
		i = 0,
		j = 0,
		space, rows, columns;

function buildBoard() {
	if (orientation === 'portrait') {
		rows = 10;
		columns = 8;

		board.css('height', '100%');



		board.css('width', space.height() * columns + 10);

		for (i; i < 80; i++) {
			if ((i % 2 !== 0)) {
				board.append('<div class="white space ' + portraitArr[i] + '"></div>');
			} else {
				board.append('<div class="black space ' + portraitArr[i] + '"></div>');
			}
		}
	}
	else if (orientation === 'landscape') {
		rows = 8;
		columns = 10;

		board.css('width', '100%');

		space = $('.space');

		space.css('width', (board.width() - 10) / 10);
		space.css('height', (board.width() - 10) / 10);

		board.css('height', space.height() * rows + 10);
		
		for (i; i < 80; i++) {
			if ((i % 2 !== 0)) {
				board.append('<div class="white space ' + landscapeArr[i] + '"></div>');
			} else {
				board.append('<div class="black space ' + landscapeArr[i] + '"></div>');
			}
		}
	}

}