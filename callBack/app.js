function greet(callback){
    console.log('this is main function');
    var data = {
        name : 'john doe'
    }
    callback(data);
}


greet(function(data){
    console.log('call back function invoked')
    console.log(data);
})


greet(function(){
    console.log('different call back function invoked')
    console.log(data.name);
})