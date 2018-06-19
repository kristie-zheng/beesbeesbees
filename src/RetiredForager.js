var RetiredForagerBee = function() {
  ForagerBee.call(this); 
    this.age = 40;
    this.job = 'gamble';
    this.color = 'grey';
    this.canFly = false;
    this.treasureChest = [];

};




RetiredForagerBee.prototype = Object.create(Bee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};
RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead";
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
