var obj = {
    greet : 'hello'
}

console.log(obj.greet);

console.log(obj['greet']);

var prop = 'greet';

console.log(obj[prop]);

var arr = [];

arr.push(function(){
    console.log('first element');
});


arr.push(function(){
    console.log('second element');
});


arr.push(function(){
    console.log('third element');
});

arr.forEach(function(item){
    item();
})


