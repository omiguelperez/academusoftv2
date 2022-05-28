import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `${url}${entryPoint}`;

const resolvers = {
	Query: {
		allCourse: (_) =>
			getRequest(URL, ''),
		courseById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createCourse: (_, { Course }) =>
			generalRequest(`${URL}/`, 'POST', Course),
		updateCourse: (_, { id, Course }) =>
			generalRequest(`${URL}/${id}/`, 'PATCH', Course),
		deleteCourse: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'DELETE')
	}
};

export default resolvers;
