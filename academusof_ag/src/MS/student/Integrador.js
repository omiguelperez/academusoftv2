import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `${url}${entryPoint}`;

class ClassIntegrador {
    constructor(){
        
    }
    async allStudent (_){
        return await getRequest(URL, '');
    } 
		

    async studentById (id){
        return await generalRequest(`${URL}/${id}`, 'GET');
    }

    async createStudent (Course ) {
        return generalRequest(`${URL}/`, 'POST', Course);
    }
		
    async updateStudent ( id, Course){
               return generalRequest(`${URL}/${id}/`, 'PATCH', Course);
    }
			
    async deleteStudent (id ) {
                generalRequest(`${URL}/${id}/`, 'DELETE');
    }
			
		
}


export default ClassIntegrador;