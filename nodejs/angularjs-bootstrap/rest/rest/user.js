module.exports = function () {
	var functions = {};
	
	functions.login = function(req, res) {
		res.render('login', {title: 'Log in'});
	};

	functions.user = function(req, res) {
		console.log("in herererererererere");
		if (req.session.passport.user === undefined) {
			res.redirect('/login');
		} else {
			res.render('user', {title: 'Welcome!',
				user: req.user
			});
		}
	};

	return functions;
};
