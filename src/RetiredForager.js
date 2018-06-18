var RetiredForagerBee = function() {
};


/*
 Create a RetiredForagerBee class, in pseudoclassical style, with:
    made from the ForagerBee superclass
    set the prototype
    set the constructor
   [overwrite] age prop
      set to 40
   [overwrite] job property
      set to gamble
   [overwrite] color property
      inherited from bee that is set to grey
    [inherit] food property 
      inherited from grub (which superclass bee also inherited)
    [inherit] eat method 
      inherited from grub
      Obj.create on bee's prototype because it a;so inherited this from grub
    [add] canfly property
      set to false
    [add] a treasureChest property 
      set to []
    [overwrite] forage method 
      returns "I am too old, let me play cards instead"
    [new] gamble method
      adds treasure to treasure chest
*/
