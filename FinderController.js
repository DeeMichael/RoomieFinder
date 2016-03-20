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

  var cFalc = new findCtrl.Person("Captain", "Falcon", "202-555-0108", "falconpunch@gmail.com", "I'm a captain but my friends call me cfalc. I like to drive fast cars and wear skin tight clothing.  I work out a lot and always wear a mask but it's totally cool.", 0, 600, "March 3", 45, false, "pics/cFalc.jpg")

  var dedede = new findCtrl.Person("King", "Dedede", "345-567-9678", "kingde@gmail.com", "I really like keeping the temperature pretty low in the winter. I wear a robe most of the time and I carry a large wooden malet. If you need something to get hit with a malet I'm your guy.", 0, 2000, "May 4", 45, false, "pics/dedede.jpg")

  var diddy = new findCtrl.Person("Diddy", "Kong", "432-154-1134", "diddyk@gmail.com", "I eat a lot of bananas. I'm on the 30 bananas a day diet. If you like fruit and other people that like fruit then I would be a great fit. I also like peanuts.", 0, 400, "June 3", 45, false, "pics/diddy.jpg")

  var dk = new findCtrl.Person("Donkey", "Kong", "756-777-8724", "dkong@gmail.com", "I like to lift a ton. I do crossfit everyday. I don't shave very often and I think because of that people have mistaken me for a bear before but I like to think of myself more as a gorilla.", 0, 650, "August 18", 45, true, "pics/dk.jpg")

  var falco = new findCtrl.Person("Falco", "Lombardi", "546-0497-4760", "bluefeather@gmail.com", "I have a really close friend and If there are two spots available I would highly reccomend him and I as a combo package. We do like everything together. We met while we were flying and ever since we've been a really great pair. Look him up. His name is Fox.", 0, 700, "October 20", 45, false, "pics/falco.jpg")

  var wiiFit = new findCtrl.Person("wiiFit", "Trainer", "946-853-1743", "yogapants@gmail.com", "I love yoga. I do yoga almost every day. I'm a yoga instructor and I do it full time. I work weekends often so I'm not always around to hangout. I'm a vegan and I don't drink alcohol but I do drink kombucha.", 0, 550, "September 3", 45, false, "pics/wiiFit.jpg")

  var fox = new findCtrl.Person("Fox", "McCloud", "974-164-6443", "foxlife@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 800, "January 1", 45, false, "pics/fox.jpg")

  var gameAndWatch = new findCtrl.Person("Game", "AndWatch", "734-055-0580", "2dimension@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 450, "July 23", 45, false, "pics/gameAndWatch.jpg")

  var ganon = new findCtrl.Person("Ganon", "Dorf", "980-523-3221", "purplefist@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 3000, "August 4", 45, true, "pics/ganon.jpg")

  var ike = new findCtrl.Person("Ike", "nIke", "532-153-0764", "bigsword@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 900, "September 17", 45, false, "pics/ike.jpg")

  var jigs = new findCtrl.Person("Jiggly", "Puff", "735-085-2643", "jiggles@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 650, "November 2", 45, false, "pics/jigs.jpg")

  var kirby = new findCtrl.Person("Kirby", "Marshmallow", "752-752-9479", "drillkick@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 800, "February 15", 45, false, "pics/kirby.jpg")

  var link = new findCtrl.Person("Link", "Hookshot", "065-236-2754", "triforce@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1250, "March 1", 45, false, "pics/link.jpg")

  var lucario = new findCtrl.Person("Lucario", "Blue", "513-663-0921", "auraballs@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 800, "April 21", 45, false, "pics/lucario.jpg")

  var lucas = new findCtrl.Person("Lucas", "Smith", "324-803-8593", "blondebaby@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 600, "May 10", 45, false, "pics/lucas.jpg")

  var luigi = new findCtrl.Person("Luigi", "Pepperoni", "512-098-0909", "middlechild@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 750, "June 7", 45, true, "pics/luigi.jpg")

  var mario = new findCtrl.Person("Mario", "Plum", "412-984-1482", "roterrooter@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "July 18", 45, true, "pics/mario.jpg")

  var metaknight = new findCtrl.Person("Meta", "Knight", "131-902-7092", "darkwings@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 700, "August 28", 45, false, "pics/metaknight.jpg")

  var mewtwo = new findCtrl.Person("Mewtwo", "Tail", "105-230-7012", "thepowerfulest@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1500, "September 10", 45, false, "pics/mewtwo.jpg")

  var peach = new findCtrl.Person("Princess", "Peach", "093-142-1049", "raddishfiend@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 7000, "October 6", 45, false, "pics/peach.jpg")

  var pika = new findCtrl.Person("Pikachu", "PikaPea", "012-710-4201", "thunderbolt@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1300, "November 18", 45, false, "pics/pika.jpg")

  var rob = new findCtrl.Person("Rob", "Robot", "402-102-9081", "lasereyes@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 600, "December 1", 45, false, "pics/rob.jpg")

  var samus = new findCtrl.Person("Samus", "Aran", "442-122-0242", "zerosamus@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 800, "December 20", 45, false, "pics/samus.jpg")

  var sonic = new findCtrl.Person("Sonic", "TheHedgehog", "980-103-1072", "speeddemon@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 450, "November 24", 45, false, "pics/sonic.jpg")

  var wario = new findCtrl.Person("Wario", "Webber", "405-182-1880", "motorman@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 500, "January 17", 45, true, "pics/wario.jpg")

  var yoshi = new findCtrl.Person("Yoshi", "Green", "120-329-1042", "eggerworks@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 350, "May 25", 45, false, "pics/yoshi.jpg")

//  Placing people into personArray
  findCtrl.personArray.push(zelda, bowser, cFalc, dedede, diddy, dk, falco, fox, gameAndWatch, ganon, ike, jigs, kirby, link, lucario, lucas, luigi, mario, metaknight, mewtwo, peach, pika, rob, samus, sonic, wario, wiiFit, yoshi)



































}// End of Controller
