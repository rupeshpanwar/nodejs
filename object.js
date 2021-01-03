var person = {
    firstname : 'John',
    lastname : 'doe',
    greet : function(){
        console.log('hello, ' +
                   this.firstname + ' ' +
                   this.lastname);
    }
}

person.greet();

console.log(
    person['firstname']
);
