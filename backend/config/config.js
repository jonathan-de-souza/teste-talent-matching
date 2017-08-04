var mongoHost = process.env.MONGO_PORT_27017_TCP_ADDR || 'admin:admin@ds127963.mlab.com';
var mongPort = process.env.MONGO_PORT_27017_TCP_PORT || '27963';

var serverAddress = 'mongodb://' + mongoHost + ':' + mongPort;
var connectionString = serverAddress + "/teste-tm-db";

module.exports = {	
	mongodb: {
		uri: connectionString,
		options: { }		
	}
};


//mongodb://<dbuser>:<dbpassword>@ds127963.mlab.com:27963/teste-tm-db