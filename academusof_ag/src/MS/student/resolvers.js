import ServiceIntegrador from './Integrador';

const SI=new ServiceIntegrador();

const resolvers = {
	Query: {
		allStudent: (_) =>
			SI.allStudent(),
		studentById: (_, { id }) =>
			SI.studentById(id),
	},
	Mutation: {
		createStudent: (_, { Student }) =>
			SI.createStudent(Student),
		updateStudent: (_, { id, Student }) =>
			SI.updateStudent(id, Student ),
		deleteStudent: (_, { id }) =>
			SI.deleteStudent(id)
	}
};

export default resolvers;
