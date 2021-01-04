var Person = {
    firstname : '',
    lastname : '',
    greet : function(){
        return this.firstname + ' ' + this.lastname;
    }
}


var person1 = Object.create(Person);
person1.firstname = 'John'
person1.lastname = 'Doe'
console.log(person1);

var person2 = Object.create(Person);
person2.firstname = 'Jane'
person2.lastname = 'cherry'
console.log(person2);