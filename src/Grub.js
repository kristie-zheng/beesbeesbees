var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
  Grub.prototype.eat = function() {
    console.log('Ate ' + this.food);
  }

};

/*grub is a superclass and does not derive from any superclass
properties: age, color, food
methods: eat
*/