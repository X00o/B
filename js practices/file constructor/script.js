let car1 = new Object();
car1.make = "Hyundai";
car1.model = "i20";
car1.year = 2014;
car1.display =function(){
    document.write(this.make + this.model + this.year + "<br>" );
};
let car2 = new Object();
car2.make = "Honda";
car2.model = "City";
car2.year = 2005;
car2.display =function(){
    document.write(this.make + this.model + this.year + "<br>");
};
let car3 = new Object();
car3.make = "Tata";
car3.model = "Nano";
car3.year = 2012;
car3.display =function(){
    document.write(this.make + this.model + this.year + "<br>");
};

car1.display(); 
car2.display();
car3.display();












class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year =year;
    
        this.display = function(){
            document.write(this.make + this.model + this.year);
        };
    }
};
const car1 = new Car('Hyndai', 'i20', 2014);
const car2 = new Car('Honda', 'City', 2005);
const car3 = new Car('Hyndai', 'Nano', 2012);

car1.display(); 
car2.display();
car3.display();




















