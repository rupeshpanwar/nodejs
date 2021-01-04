function Greetr(){
     this.greeting = 'greeting3!',
     this.greet = function(){
         console.log(this.greeting);
     }

}

module.exports = new Greetr();