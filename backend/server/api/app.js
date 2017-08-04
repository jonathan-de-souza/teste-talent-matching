module.exports = (app) => {
	require('../api/routes/auth.server.route')(app);
    require('../api/routes/chat.route')(app);	

	return app;
};