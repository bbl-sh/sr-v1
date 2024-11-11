// import fs from 'fs/promises';

// const endpoints = [
// 	{ name: 'admitcard', url: 'https://api.com/admitcard' },
// 	{ name: 'answer', url: 'https://api.com/answer' },
// 	{ name: 'latest-jobs', url: 'https://api.com/latest-jobs' },
// 	{ name: 'result', url: 'https://api.com/result' },
// 	{ name: 'syllabus', url: 'https://api.com/syllabus' }
// ];

// async function fetchandsavedata(name, url) {
// 	try {
// 		const response = await fetch(url);
// 		if (!response.ok) return new Error('returned with bad response');
// 		const data = await response.json();
// 		const filepath = `../data/api/${name}.txt`;
// 		const datastring = JSON.stringify(data, null, 2);

// 		await fs.writeFile(filepath, datastring, 'utf8');
// 		console.log(`file is saved to ${filepath}`);

// 		return data;
// 	} catch (error) {
// 		console.log('Error fetching the data', error);
// 		throw new error();
// 	}
// }

// export async function load() {
// 	const writedata = {};
// 	for (const endpoint in endpoints) {
// 		writedata['endpoint.name'] = fetchandsavedata(endpoint.name, endpoint.url);
// 	}
// 	return { writedata };
// }
