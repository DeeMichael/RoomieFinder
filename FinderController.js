angular.module('Finder', [])
  .controller('FinderController', FinderController)

function FinderController(){
	var findCtrl = this

//  This is an array that will hold all the people objects.  I'm initializing the array as an empty array here.
	findCtrl.personArray = []

//  Person constructor function.
//  Arguments:
// first and last name - string,
// phone - string in format 888-888-8888,
// email - string,
// about - string,
// priceMin and priceMax - integer,
// availability - string,
// age - integer,
// image - file path to jpeg,
// smokes - boolean,
  findCtrl.Person = function(firstName,lastName,phone,email,about,priceMin,priceMax,availability,age,smokes,image){
    this.firstName = firstName
    this.lastName = lastName
    this.phone = phone
    this.email = email
    this.about = about
    this.priceMin = priceMin
    this.priceMax = priceMax
    this.availability = availability
    this.age = age
    this.smokes = smokes
    this.image = image

  }
//  Creating people to put into findCtrl.personArray
  var zelda = new findCtrl.Person("Zelda", "Feezy", "302-547-8842", "zeldaf@gmail.com", "I'm a princess from out of town and I'm only looking to live somewhere for a few months while I finish a coding bootcamp program here in the area.  I like to fight bad guys, wear dresses and hangout with my boyfriend.", 500, 1500, "July 4", 28, false, "pics/zelda.jpg")

  var bowser = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var cFalc = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var dedede = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var diddy = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var dk = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var falco = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var wiiFit = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var fox = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var gameAndWatch = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var ganon = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var ike = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var jigs = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var kirby = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var link = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var lucario = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var lucas = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var luigi = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var mario = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var metaknight = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var mewtwo = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var peach = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var pika = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var rob = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var samus = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var sonic = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var wario = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var yoshi = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  findCtrl.personArray.push(zelda)



































}// End of Controller
