
import Http from './base';

class User extends Http{
    constructor(){
        super()
        this.modelUrl = 'user'
    }

    login(){
        this.post(this.modelUrl + '/login')
    }
}

export default new User();
