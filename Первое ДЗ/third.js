console.time("file_open");
const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, 'utf8', (err, data) => {
    if(err) throw err;
    var fixedString = data.replace(/\s{2,}/gi, ' ');

    fs.writeFile('converted_' + path, fixedString, (err) => {
        if (err) throw err;
    });
});
console.timeEnd("file_open");
