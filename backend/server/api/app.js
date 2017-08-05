module.exports = (app) => {	
    require('../api/routes/chat.route')(app);	

	return app;
};