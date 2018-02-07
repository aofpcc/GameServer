const server = {
	PROTOCOL: 'http',
	PORT: 3030,
	HOST: 'localhost'
};
const server_domain = `${server.PROTOCOL}://${server.HOST}${server.PORT == 80 ? '' : ':' + server.PORT}`;
const client = {
	PROTOCOL: 'http',
	PORT: 3000,
	HOST: 'localhost'
};
const client_domain = `${client.PROTOCOL}://${client.HOST}${client.PORT == 80 ? '' : ':' + client.PORT}`;
const socialAPI = {
	FACEBOOK: {
		CLIENT_ID: '',
		CLIENT_SECRET: '',
		CALLBACK_URL: '/authen/facebook/callback',
		PROFILE_FIELD: ['id', 'email', 'name', 'photos']
	},
	TWITTER: {
		CONSUMER_KEY: '',
		CONSUMER_SECRET: '',
		CALLBACK_URL: '/authen/twitter/callback'
	},
	GOOGLE: {
		CLIENT_ID: '',
		CLIENT_SECRET: '',
		CALLBACK_URL: '/authen/google/callback'
	}
};

module.exports = {
	SERVER: server,
	CLIENT: client,
	DOMAIN: {
		SERVER: server_domain,
		CLIENT: client_domain
	},
	SOCIAL_API: socialAPI
};
