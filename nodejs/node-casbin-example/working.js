const express = require('express');
const { newEnforcer } = require('casbin');
const app = express();
const port = 3000;

Authz(app);

app.get('/api/public', (req, res) => {
	res.send(`Public data: ${Date.now()}`);
});

app.get('/api/private', (req, res) => {
	res.send(`Private data: ${Date.now()}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

async function Authz(app) {
	app.use(async (req, res, next) => {
		const enforcer = await newEnforcer('./config/model.conf', './config/policy.csv');
		const user = req.query.user ? req.query.user : '';
		console.log('currentUser: ', user);
		if (enforcer.enforce(user, req.originalUrl, req.method)) {
			return next();
		}
		res.status(403).send('Forbidden');
	});
}
