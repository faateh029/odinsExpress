
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

    getUser(id){
        return this.storage[id]
    }

    deleteUser(id){
        delete this.storage[id];
    }

    updateUser(id , {firstName,lastName}){
      
        if(!this.storage[id]){
            throw new Error("user not found")
        }
        if(typeof firstName != 'string' ||typeof lastName!='string'){
            throw new Error('Name not correct')
        }
       this.storage[id] = { ...this.storage[id], firstName ,  lastName };
       return this.storage[id];

    }
}


export default new UserStorage();