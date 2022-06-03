import ServiceIntegradorCourse from '../course/Integrador';
import ServiceIntegradorStudent from '../student/Integrador';

const SIC=new ServiceIntegradorCourse();
const SIE=new ServiceIntegradorStudent();
const resolvers = {
	Query: {
		GetCourse:async (_, { id }) =>{
			console.log("studentAvaliable");
			const studentAvaliable=await SIE.studentById(id);
			if(studentAvaliable.id==id){
				return await SIC.allCourse();
			}
			   
			else {
				 return [];
			}
			  
		},
		
	},
	Mutation: {
		
	}
};

export default resolvers;
