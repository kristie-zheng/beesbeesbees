var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

/*
 Create a HoneyMakerBee class, in pseudoclassical style, with:
    made from the Bee superclass
    set the prototype
    set the constructor
   [overwrite] age prop
      set to 10
   [overwrite] job property
      set to make honey
   [overwrite/inherit] color property
      inherited from bee that is set to yellow
    [inherit] food property 
      inherited from grub (which superclass bee also inherited)
    [inherit] eat method 
      inherited from grub
      Obj.create on bee's prototype because it a;so inherited this from grub
    [add] a honeyPot property 
      set to 0
    [add] makeHoney method 
      adds 1 to that honeyBee\'s honeyPot. this is done on honeyMakerBee's prototype
    [add] giveHoney method 
      subtracts 1 from that honeyBee\'s honeyPot. this is done on honeyMakerBee's prototype
*/
