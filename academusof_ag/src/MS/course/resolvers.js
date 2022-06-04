import ServiceIntegrador from './Integrador';

const SI=new ServiceIntegrador();
const resolvers = {
	Query: {
		allCourse: (_) =>
			SI.allCourse(),
		courseById: (_, { id }) =>
		    SI.courseById(id),
	},
	Mutation: {
		createCourse: (_, { Course }) =>
		    SI.createCourse(Course),
		updateCourse: (_, { id, Course }) =>
			SI.updateCourse(id, Course),
		deleteCourse: (_, { id }) =>
			SI.deleteCourse(id)
	}
};

export default resolvers;
