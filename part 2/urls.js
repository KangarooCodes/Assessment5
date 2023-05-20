const fs = require('fs');
const process = require('process');
const readline = require('readline');
const request = require('request');

urlList = []
urlRejected = []

/**
 * 
 *  Reads line by line of file given in command line and creates a new file with each
 *  corresponding hostname as the title, and the HTML as the file content.
 * 
 *  If there was no HTML returned: "Couldn't download _" is logged
 * 
 */


// Calls line by line and print hostname if URL starts with HTTP or HTTPS
async function processLineByLine(path) {

	const fileStream = fs.createReadStream(path);
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});
	console.log('Thinking....')
	// The below loop adds url lines to arrays
	for await (const line of rl) {
		await new Promise((resolve) => {
			request(line, (err,res,body) => {

				// checks for a link to make sure it works
				if (body !== undefined){
					hName = (new URL(line.trim())).hostname

					//Create File With Hostname and Add Body
					urlList.push(hName)					
					fs.writeFile(`${hName}`, body, (err) => {
						if (err) {
							console.log(err)
						}
					})
				} else {
					urlRejected.push(line)
				}
				resolve()
			})
		})
	}
	for (let i = 0; i < urlList.length; i++) {
		console.log(`Wrote to ${urlList[i]}`)
	}
	for (let i = 0; i < urlRejected.length; i++) {
		console.log(`Couldn't download ${urlRejected[i]}`)
	}
};

processLineByLine(process.argv[2]);