import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import bodyParser from 'body-parser';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(bodyParser.json())
	.post('/api/dilara', (req, res, next) => {
		console.log('dilara');
		res.end('Create a new User!');
	})
	.get('/sener', (req, res, next) => {
		console.log('dilara');
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end('Sener!');
	})
	.get('/api/can', (req, res, next) => {
		console.log('can');
		res.end('Can');
	})
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
