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

  var cFalc = new findCtrl.Person("Captain", "Falcon", "202-555-0108", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 600, "August 18", 45, false, "pics/cFalc.jpg")

  var dedede = new findCtrl.Person("King", "Dedede", "345-567-9678", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 2000, "August 18", 45, false, "pics/dedede.jpg")

  var diddy = new findCtrl.Person("Diddy", "Kong", "432-154-1134", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 400, "August 18", 45, false, "pics/diddy.jpg")

  var dk = new findCtrl.Person("Donkey", "Kong", "756-777-8724", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 650, "August 18", 45, true, "pics/dk.jpg")

  var falco = new findCtrl.Person("Falco", "Lombardi", "546-0497-4760", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 700, "August 18", 45, false, "pics/falco.jpg")

  var wiiFit = new findCtrl.Person("wiiFit", "Trainer", "946-853-1743", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 550, "August 18", 45, false, "pics/wiiFit.jpg")

  var fox = new findCtrl.Person("Fox", "McCloud", "974-164-6443", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 800, "August 18", 45, false, "pics/fox.jpg")

  var gameAndWatch = new findCtrl.Person("Game", "AndWatch", "734-055-0580", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 450, "August 18", 45, false, "pics/gameAndWatch.jpg")

  var ganon = new findCtrl.Person("Ganon", "Dorf", "980-523-3221", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 3000, "August 18", 45, true, "pics/ganon.jpg")

  var ike = new findCtrl.Person("Ike", "nIke", "532-153-0764", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 900, "August 18", 45, false, "pics/ike.jpg")

  var jigs = new findCtrl.Person("Jiggly", "Puff", "735-085-2643", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 650, "August 18", 45, false, "pics/jigs.jpg")

  var kirby = new findCtrl.Person("Kirby", "Marshmallow", "752-752-9479", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 800, "August 18", 45, false, "pics/kirby.jpg")

  var link = new findCtrl.Person("Link", "Hookshot", "065-236-2754", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1250, "August 18", 45, false, "pics/link.jpg")

  var lucario = new findCtrl.Person("Lucario", "Blue", "513-663-0921", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 800, "August 18", 45, false, "pics/lucario.jpg")

  var lucas = new findCtrl.Person("Lucas", "Smith", "324-803-8593", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 600, "August 18", 45, false, "pics/lucas.jpg")

  var luigi = new findCtrl.Person("Luigi", "Pepperoni", "512-098-0909", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 750, "August 18", 45, true, "pics/luigi.jpg")

  var mario = new findCtrl.Person("Mario", "Plum", "412-984-1482", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/mario.jpg")

  var metaknight = new findCtrl.Person("Meta", "Knight", "131-902-7092", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 700, "August 18", 45, false, "pics/metaknight.jpg")

  var mewtwo = new findCtrl.Person("Mewtwo", "Tail", "105-230-7012", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1500, "August 18", 45, false, "pics/mewtwo.jpg")

  var peach = new findCtrl.Person("Princess", "Peach", "093-142-1049", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 7000, "August 18", 45, false, "pics/peach.jpg")

  var pika = new findCtrl.Person("Pikachu", "PikaPea", "012-710-4201", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1300, "August 18", 45, false, "pics/pika.jpg")

  var rob = new findCtrl.Person("Rob", "Robot", "402-102-9081", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 600, "August 18", 45, false, "pics/rob.jpg")

  var samus = new findCtrl.Person("Samus", "Aran", "442-122-0242", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 800, "August 18", 45, false, "pics/samus.jpg")

  var sonic = new findCtrl.Person("Sonic", "TheHedgehog", "980-103-1072", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 450, "August 18", 45, false, "pics/sonic.jpg")

  var wario = new findCtrl.Person("Wario", "Webber", "405-182-1880", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 500, "August 18", 45, true, "pics/wario.jpg")

  var yoshi = new findCtrl.Person("Yoshi", "Green", "120-329-1042", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 350, "August 18", 45, false, "pics/yoshi.jpg")

  findCtrl.personArray.push(zelda)



































}// End of Controller
