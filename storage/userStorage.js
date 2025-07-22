class UserStorage {
    constructor(){
        this.storage ={} ; 
        this.id=0;
    } 
     
    addUser({firstName, lastName}){
        const id  = this.id; 
        this.storage[id] = {id,firstName,lastName};
        this.id++;
    }

    getUsers(){
        return Object.values(this.storage) 
    }

    getUsers(id){
        return this.storage[id]
    }

    deleteUser(id){
        delete this.storage[id];
    }
}


export default new UserStorage();