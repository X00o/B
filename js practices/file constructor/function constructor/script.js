


// function car(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year =year;

//     this.display = function(){
//         document.write(this.make + this.model + this.year);
//     };
// }

// const car1 = new car('Hyndai', 'i20', 2014);
// const car2 = new car('Honda', 'City', 2005);
// const car3 = new car('Hyndai', 'Nano', 2012);

// car1.display(); 
// car2.display();
// car3.display();





class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year =year;
    }
        display(){
            document.write(this.make + this.model + this.year);
        };
    
};
const car1 = new Car('Hyndai', 'i20', 2014);
const car2 = new Car('Honda', 'City', 2005);
const car3 = new Car('Hyndai', 'Nano', 2012);

for (let prop in car1){
    document.write(prop + ':' + car1[prop] + "<br/>");
}
