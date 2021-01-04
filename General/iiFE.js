//without param
var firstName = 'John';

(function(){
     var firstName = 'Jane';
     console.log(firstName);
}());


console.log(firstName);


//with param
var firstName = 'John';

(function(lastName){
     var firstName = 'Jane';
     console.log(firstName);
     console.log(lastName);
}('Doe'));


console.log(firstName);