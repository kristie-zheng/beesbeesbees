var ForagerBee = function() {
};


/*
 Create a ForagerBee class, in pseudoclassical style, with:
    made from the Bee superclass
    set the prototype
    set the constructor
   [overwrite] age prop
      set to 10
   [overwrite] job property
      set to find pollen
   [overwrite/inherit] color property
      inherited from bee that is set to yellow
    [inherit] food property 
      inherited from grub (which superclass bee also inherited)
    [inherit] eat method 
      inherited from grub
      Obj.create on bee's prototype because it a;so inherited this from grub
    [add] canfly property
      set to true
    [add] a treasureChest property 
      set to []
    [add] forage method 
      adds to treasure chest. this is done on honeyMakerBee's prototype
*/
