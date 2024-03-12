import fs from 'node:fs';

const numberOfEntries = 1000;

const skeleton = {
	'id': 'uuid',
	'title': 'string',
	'aired': 'number',
	'elements': new Array(10).fill({ 'id': 'uuid', 'name': 'string' })
}


function objReplacer(data) {
	switch(data.constructor.name) {
		case 'String':
			if (data == 'uuid') return crypto.randomUUID();
			if (data == 'number') return Math.random();
			return [...new Array(Math.floor(Math.random() * 20 + 5)).keys()].map(i => {
				const alphabet = 'abcdefghijklmnopqrstuvwxyz';
				const lc = alphabet.toLowerCase();
				const uc = alphabet.toUpperCase();
				const others = ' 0123456789'
				const all = (lc + uc + others).split('');
				return all[Math.floor(Math.random() * all.length)];
			}).join('')
		case 'Array':
			return data.map(objReplacer);
		case 'Object':
			for (const [k, v] of Object.entries(data)) {
				data[k] = objReplacer(v);
			}
			return data;
		default:
			return data;
	}
}

const data = [...new Array(numberOfEntries).keys()].map(i => objReplacer(structuredClone(skeleton)));

console.log(data);