import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `${url}${entryPoint}`;

class ClassIntegrador {
    constructor(){
        
    }
    async login (Auth ) {
        return await generalRequest(`${URL}/`, 'POST', Auth);
    }
		
}


export default ClassIntegrador;