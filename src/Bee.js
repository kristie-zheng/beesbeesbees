var Bee = function() {
  Grub.call(this); //this is set to Bee
  //this.constructor is the grub constructor;
  // tihs.prototype is undefined
  //this.__proto__ is grjub
  //this.constructor = this.prototype.constructor;
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype= Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

/*
Bee is a subclass of the grub superclass
  use Grub.call so that a new instance of grub is created and this is bound the instance of bee 
Have a constructor property to point back to the constructor

Bee subclass needs to have its own prototype where its specific methods are stored
  use the Object.create function to create a prototype that delegates to the superclass' prototype
[overwrite] age prop
  set to 5
[overwrite] color prop
  set to yellow
[inherit] food prop
  no need to do anything; failed lookup should delegate to grub superclass
[inherit] eat method
  set the prototype of Bee.prototype to delegate to grub's methods using Object.create
[add] job method
  add this to Bee prototype's method container
*/


