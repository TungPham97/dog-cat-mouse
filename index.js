var Dog = require('./Dog');
var Cat = require('./cat');
var Mouse = require('./Mouse')
var dog = new Dog('Tom');
var tom = new Cat('jerry');
var mouse = new Mouse('Micky');
Cat.eat(mouse);
dog.eat(tom);
