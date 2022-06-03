import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `${url}${entryPoint}`;

class ClassIntegrador {
    constructor(){
        
    }
    async allCourse (_){
        return await getRequest(URL, '');
    } 
		

    async courseById (id){
        return await generalRequest(`${URL}/${id}`, 'GET');
    }

    async createCourse (Course ) {
        return generalRequest(`${URL}/`, 'POST', Course);
    }
		
     async	updateCourse ( id, Course){
               return generalRequest(`${URL}/${id}/`, 'PATCH', Course);
      }
			
       async	deleteCourse (id ) {
                generalRequest(`${URL}/${id}/`, 'DELETE');
      }
			
		
}


export default ClassIntegrador;