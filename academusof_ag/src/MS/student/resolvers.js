import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `${url}${entryPoint}`;

const resolvers = {
	Query: {
		allStudent: (_) =>
			getRequest(URL, ''),
		studentById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createStudent: (_, { Student }) =>
			generalRequest(`${URL}/`, 'POST', Student),
		updateStudent: (_, { id, Student }) =>
			generalRequest(`${URL}/${id}/`, 'PATCH', Student),
		deleteStudent: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'DELETE')
	}
};

export default resolvers;
