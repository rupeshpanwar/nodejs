function Greetr(){
    this.greeting = 'greeting4!',
    this.greet = function(){
        console.log(this.greeting);
    }

}

module.exports = Greetr;