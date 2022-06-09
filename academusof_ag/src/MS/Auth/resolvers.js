import ServiceIntegrador from './Integrador';

const SI=new ServiceIntegrador();

const resolvers = {
	Query: {

	},
	Mutation: {
		login:async (_, { Auth }) =>{
			return await SI.login(Auth)
		},
	}
};

export default resolvers;
