const fs = require('fs');
const path = process.argv[2];

if (path) {
	fs.readFile(path, 'utf8', (err, data) => {
		var fixedString = data.replace(/\s{2,}/gi, ' ');

		fs.writeFile('converted_text.txt', fixedString, (err) => {
			if (err) console.log(err);
		});

	});
} else {
	console.log('No path supplied!');
};


