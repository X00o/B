class User{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    getFullname(){
        return `${this.firstname} ${this.lastname} is my Full Name .`;
    }

    editName(nameToChange){
        let myName = nameToChange.split(" ");
        this.firstname = myName[0];
        this.lastname = myName[1];
        return `${this.firstname} ${this.lastname} is my Full Name .`;
    }

}
const souvik = new User("Souvik", "Basak", 22);
// console.log(souvik.age);
console.log(souvik.getFullname());
souvik.editName("jonh anderson");
console.log(souvik.getFullname());