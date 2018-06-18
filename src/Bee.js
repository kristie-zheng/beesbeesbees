var Bee = function() {

};


/*
Bee is a subclass of the grub superclass
  use Grub.call so that a new instance of grub is created and this is bound the instance of bee 
Bee subclass needs to have its own prototype where its specific methods are stored
[overwrite] age prop
  set to 5
[overwrite] color prop
  set to yellow
[inherit] food prop
  no need to do anything; failed lookup should delegate to grub superclass
[inherit] eat method
  no need to do anything; failed lookup should delegate to grub's methods
[add] job method
  add this to Bee prototype's method container
*/


