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
	// Set up board for portrait
	if (orientation === 'portrait') {
		rows = 10;
		columns = 8;

		console.log('portrait');

		for (i; i < 80; i++) {
			if (((i < 8 || i >= 16 && i < 24 || i >= 32 && i < 40 || i >= 48 && i < 56 || i >= 64 && i < 72) && i % 2 !== 0) || ((i >= 8 && i < 16 || i >= 24 && i < 32 || i >= 40 && i < 48 || i >= 56 && i < 64 || i >= 72 && i < 80) && i % 2 === 0)) {
				board.append('<div class="white space ' + landscapeArr[i] + '"></div>');
			} else {
				board.append('<div class="black space ' + landscapeArr[i] + '"></div>');
			}
		}

		space = $('.space');

		board.css({width: '100%'});
		space.css({width: Math.floor((board.width() - 10) / 8), height: Math.floor((board.width() - 10) / 8)});
		board.css({height: space.height() * rows + 10, width: space.width() * columns + 10});
	}
	// Set up board for landscape
	else if (orientation === 'landscape') {
		rows = 8;
		columns = 10;

		console.log('landscape');
		
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