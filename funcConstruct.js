function Person(firstname, lastname){
    
    this.firstname = firstname;
    this.lastname = lastname;
}


Person.prototype.greet = function(){

    console.log(
        'hello ' + this.firstname + ' ' +
        this.lastname
    )
}



var john = new Person('john','doe');

john.greet();

var jane = new Person('jane','michel');

jane.greet();

console.log(john.__proto__);

console.log(john.__proto__ === jane.__proto__);

