const mdlinks = (file) => {
	fs.readFile(file, 'utf8', (err, data) => {
		if (err) throw err;
		// const regex = '\[.*\]\((?!http:)(?!.+\.md).+\)';
		const test = data.match(/\[(.*?)\]\((.*?)\)/g);

		console.log(test)
	})
}

//mdlinks();
module.exports = mdlinks;

// /\[(.*?)\]\((.*?)\)/g essa funcionou

