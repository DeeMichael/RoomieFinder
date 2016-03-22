angular.module('Finder', [])
  .controller('FinderController', FinderController)

function FinderController(_){
	var findCtrl = this
  $('[data-toggle="tooltip"]').tooltip()
// =======INITIALIZING VARIABLES================================================
//    Initializing variables at the start
// =============================================================================
	findCtrl.personArray = []         // This is an array that will hold all the people objects.  I'm initializing the array as an empty array here.
  findCtrl.maxPriceDOM = 100        // This is the Maximum Rent that a user will pay
  findCtrl.minAge = 16              //default place holder for min age on slider
  findCtrl.maxAge = 120             //default place holder for max age on slider
  findCtrl.smokes = "3"             //1 = Non-smoker, 2 = smoker, 3 = don't care
  findCtrl.modalContent = {}         //  Will contain modal content like name, about, etc. Almost everyhting a person object will contain.
  findCtrl.keyword = ""

// =======MODAL FILLER==========================================================
//    Function for filling the popup modal once you hit the More Info button
// =============================================================================
  findCtrl.modalFiller = function(person){
    var index = findCtrl.personArray.indexOf(person)
    var firstName = findCtrl.personArray[index].firstName
    var lastName = findCtrl.personArray[index].lastName
    findCtrl.modalContent.modalName = firstName + " " + lastName
    findCtrl.modalContent.image = findCtrl.personArray[index].image
    findCtrl.modalContent.phone = findCtrl.personArray[index].phone
    findCtrl.modalContent.email = findCtrl.personArray[index].email
    findCtrl.modalContent.about = findCtrl.personArray[index].about
    findCtrl.modalContent.age = findCtrl.personArray[index].age
    findCtrl.modalContent.smokes = findCtrl.personArray[index].smokes
    findCtrl.modalContent.priceMax = findCtrl.personArray[index].priceMax
    if (findCtrl.personArray[index].smokes) {
      var smokeString = "Yes"
    }
    else {
      var smokeString = "No"
    }
    findCtrl.modalContent.smokes = smokeString
  }

// =======PERSON OBJECT CONTRUCTOR FUNCTION=====================================
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
// =============================================================================
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

// =======FILTERS===============================================================
//    Filters used with ng-repeat.
// =============================================================================

//Filter Object. ------NOT SURE IF THIS IS USED. CHECK AND DELETE IF NECESARY
findCtrl.filterObject = {
  firstName : "",
  lastName : "",
  phone : "",
  email : "",
  about : "",
  priceMin : "",
  priceMax : "",
  availability : "",
}

// KEYWORD FILTER
  // findCtrl.keywordFilter = function(person){
  //   var boolVar = false
  //   if (findCtrl.keyword == "") {
  //     return true
  //   }
  //   else if (person.lastName.toLowerCase() == findCtrl.keyword.toLowerCase()) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }

  function stringPartMatch(){
    var lastNameP = person.lastName.toLowerCase()
    var firstNameP = person.firstName.toLowerCase()
    var aboutP = person.about.toLowerCase()
    var keyword = findCtrl.keyword.toLowerCase()
    var firstLastAbout = firstNameP + lastNameP + aboutP
    var matchResults = firstLastAbout.search(keyword)
    console.log(matchResults)
  }


// AGE FILTER
  findCtrl.ageInRange = function(person){
    return (person.age >= findCtrl.minAge && person.age <= findCtrl.maxAge)
  }

// SMOKES FILTER
  findCtrl.smokeFilter = function(person){
    if (findCtrl.smokes == "1" && person.smokes == false) {
      return true
    }
    else if (findCtrl.smokes == "2" && person.smokes == true) {
      return true
    }
    else if (findCtrl.smokes == "3") {
      return true
    }
    else {
      return false
    }
  }

// PRICE MAX FILTER
  findCtrl.priceMaxFilter = function(person){
    return (findCtrl.maxPriceDOM <= person.priceMax)
  }

// =======PEOPLE GOING INTO PERSON ARRAY========================================
//    Creating people to put into findCtrl.personArray
// =============================================================================
  var zelda = new findCtrl.Person("Zelda", "Feezy", "302-547-8842", "zeldaf@gmail.com", "I'm a princess from out of town and I'm only looking to live somewhere for a few months while I finish a coding bootcamp program here in the area.  I like to fight bad guys, wear dresses and hangout with my boyfriend.", 500, 1500, "July 4", 28, false, "pics/zelda.jpg")

  var bowser = new findCtrl.Person("Bowser", "Koopa", "302-824-6661", "kingbowser@gmail.com", "I'm a pretty big dude who likes to mess things up. I'm used to always getting my way.  I really like metal, kidnapping, and raging hard. I'm big into bbqing and can make a mean burger.", 0, 1000, "August 18", 45, true, "pics/bowser.jpg")

  var cFalc = new findCtrl.Person("Captain", "Falcon", "202-555-0108", "falconpunch@gmail.com", "I'm a captain but my friends call me cfalc. I like to drive fast cars and wear skin tight clothing.  I work out a lot and always wear a mask but it's totally cool.", 0, 600, "March 3", 36, false, "pics/cFalc.jpg")

  var dedede = new findCtrl.Person("King", "Dedede", "345-567-9678", "kingde@gmail.com", "I really like keeping the temperature pretty low in the winter. I wear a robe most of the time and I carry a large wooden malet. If you need something to get hit with a malet I'm your guy.", 0, 2000, "May 4", 42, false, "pics/dedede.jpg")

  var diddy = new findCtrl.Person("Diddy", "Kong", "432-154-1134", "diddyk@gmail.com", "I eat a lot of bananas. I'm on the 30 bananas a day diet. If you like fruit and other people that like fruit then I would be a great fit. I also like peanuts.", 0, 400, "June 3", 21, false, "pics/diddy.jpg")

  var dk = new findCtrl.Person("Donkey", "Kong", "756-777-8724", "dkong@gmail.com", "I like to lift a ton. I do crossfit everyday. I don't shave very often and I think because of that people have mistaken me for a bear before but I like to think of myself more as a gorilla.", 0, 650, "August 18", 37, true, "pics/dk.jpg")

  var falco = new findCtrl.Person("Falco", "Lombardi", "546-0497-4760", "bluefeather@gmail.com", "I have a really close friend and If there are two spots available I would highly reccomend him and I as a combo package. We do like everything together. We met while we were flying and ever since we've been a really great pair. Look him up. His name is Fox.", 0, 700, "October 20", 40, false, "pics/falco.jpg")

  var wiiFit = new findCtrl.Person("wiiFit", "Trainer", "946-853-1743", "yogapants@gmail.com", "I love yoga. I do yoga almost every day. I'm a yoga instructor and I do it full time. I work weekends often so I'm not always around to hangout. I'm a vegan and I don't drink alcohol but I do drink kombucha.", 0, 550, "September 3", 27, false, "pics/wiiFit.jpg")

  var fox = new findCtrl.Person("Fox", "McCloud", "974-164-6443", "foxlife@gmail.com", "I'm a pretty cool dude. I take being cool pretty seriously as well as saving the world. I save the world pretty regularly so I probably wouldn't be around much. I like to fly planes and shoot lazers in my spare time. I've got a concealed carry permit so you can feel safe when you're around me.", 0, 800, "January 1", 33, false, "pics/fox.jpg")

  var gameAndWatch = new findCtrl.Person("Game", "AndWatch", "734-055-0580", "2dimension@gmail.com", "I'm looking for chill roommates that have an opening that's pretty cheap. I'm a really great cook and can fry up all sorts of delicious eats. I also have a handicap that makes it difficult for me to do some things but its nothing to worry about. I'm only 2 dimensional which is really a blessing and a curse. I'm really great at slipping through narrow spaces but I have a really difficult time picking things up with two hands. Using two hands when you're only 2D just doesn't seem to make a lick of difference.", 0, 450, "July 23", 27, false, "pics/gameAndWatch.jpg")

  var ganon = new findCtrl.Person("Ganon", "Dorf", "980-523-3221", "purplefist@gmail.com", "I'm a quiet guy who likes to keep to himself mainly. I enjoy having a drink and sitting inside and reading a book. I like rainy days and my favorite colors are purple and black.", 0, 3000, "August 4", 51, true, "pics/ganon.jpg")

  var ike = new findCtrl.Person("Ike", "nIke", "532-153-0764", "bigsword@gmail.com", "Hi. I'm new to this and not quite sure what to put here. I'm looking for a place to live with some cool people. My hobbies include sword fighting, yelling loudly as I swing my giant sword and, sword fighting. I've got a really big sword that looks really cool and if there's a nice spot in the living room I'd be willing to let it hangout there on display.", 0, 900, "September 17", 30, false, "pics/ike.jpg")

  var jigs = new findCtrl.Person("Jiggly", "Puff", "735-085-2643", "jiggles@gmail.com", "I know what you're thinking but you've got to hear me out. I'm totally stereotyped and its all not entirely fair. Yes I'm easy going and yes I do enjoy an ocasional nap or two ..or five. I enjoy good music and I think I'd be a good fit with roommates that like music and don't mind having a roommate that sleeps most of the day.", 0, 650, "November 2", 24, false, "pics/jigs.jpg")

  var kirby = new findCtrl.Person("Kirby", "Marshmallow", "752-752-9479", "drillkick@gmail.com", "I don't like being called a marshmallow so if no one calls me a marshmallow then everythings cool. I'm really into trying new foods. I've got a big mouth and I'm a enthusiastic foodie. As a roommate I won't take up a lot of space. I only have a few things. I'm pretty extroverted and I love to party so I'm very open to help host any event.", 0, 800, "February 15", 26, false, "pics/kirby.jpg")

  var link = new findCtrl.Person("Link", "Hookshot", "065-236-2754", "triforce@gmail.com", "I'm looking for a place to stay temporarily for maybe just 6 months or possible a year. My hobbies include playing the sweet potato, throwing boomerangs, archery, fencing, fishing and cosplay.", 0, 1250, "March 1", 31, false, "pics/link.png")

  var lucario = new findCtrl.Person("Lucario", "Blue", "513-663-0921", "auraballs@gmail.com", "It's all about the aura. I'm looking for a place that has good vibes. I enjoy taichi, karate, meditation, and poke battles. My favorite color is blue.", 0, 800, "April 21", 28, false, "pics/lucario.jpg")

  var lucas = new findCtrl.Person("Lucas", "Smith", "324-803-8593", "blondebaby@gmail.com", "I look like a kid but I swear to god I'm old enough to rent. I'm looking for chill roomies that would be ok with letting a tiny blonde haired baby looking kid live in their house. I'm super chill and always down for whatever. I like to play baseball and hangout with my friend Ness.", 0, 600, "May 10", 16, false, "pics/lucas.jpg")

  var luigi = new findCtrl.Person("Luigi", "Pepperoni", "512-098-0909", "middlechild@gmail.com", "My favorite color is green. I'm usually never 1st. I'm always a number two kinda guy. I live in the shadow of my brother Mario. You may have heard of him. He's a big time plumber. Anyways I'm looking to move out and live with some new people and meet some new faces. Things I bring to the table are I make some mean italian food and I can help fix any plumbing problems. ..That's about it.", 26, 750, "June 7", 45, true, "pics/luigi.jpg")

  var mario = new findCtrl.Person("Mario", "Plum", "412-984-1482", "roterrooter@gmail.com", "You may have heard of me. I'm sort of a big deal. I'm looking for a place to live with baller roommates. If you're not cool I don't want to live with you. Don't bother messaging me if you're just going to say hey. I've got no time for basic bitties. I'm in a complicated relationship with my girlfriend.  You've probably heard of her. She's sorta a big deal too. She's a princess. But yeah, hit me up if you have a spot opening up soon.", 0, 1000, "July 18", 27, true, "pics/mario.jpg")

  var metaknight = new findCtrl.Person("Meta", "Knight", "131-902-7092", "darkwings@gmail.com", "I would like a nice quiet place to live. I'm pretty noctornal. At night I'd be coming and going for most of the time. I'm a short guy but I've got some wings that allow me to reach things in high places so if there's that one can of soup that's just too far in the back of the top cabinet and you can't reach it, don't worry, I'll get it for you.", 0, 700, "August 28", 29, false, "pics/metaknight.jpg")

  var mewtwo = new findCtrl.Person("Mewtwo", "Tail", "105-230-7012", "thepowerfulest@gmail.com", "Hi, I'm the most powerful pokemon. Things I like to do include float around the place, use telekinesis, and play trivia. I greatly enjoy dubstep, team sports, and being a badass. I have a bit of a temper but usually you'll never see it.", 0, 1500, "September 10", 42, false, "pics/mewtwo.jpg")

  var peach = new findCtrl.Person("Princess", "Peach", "093-142-1049", "raddishfiend@gmail.com", "Hi there! My name's Peach and I'm looking to move into a house with maybe two or three other roommates. I really enjoy cooking, playing golf, and gardening. I have my own set of clubs that I'm willing to lend out and I have tons of cooking appliances I can bring. I have an italian boyfriend that's a little high maintenance that would probably come over to visit every now and then but I hope that wouldn't be an issue.  If it would be I'm sure we could figure something out.", 0, 7000, "October 6", 24, false, "pics/peach.jpg")

  var pika = new findCtrl.Person("Pikachu", "PikaPea", "012-710-4201", "thunderbolt@gmail.com", "I'm a cute cuddly bright yellow large rodent. I think that's the best description I can come up with if you haven't seen my picture. I'm pretty short but I love to ball and go out to eat. I'm great to have around whenever's there's a power outage. I'm great with high powered electronics. I can just hook myself up to the breakers and get the power on for a bit in a pinch.", 0, 1300, "November 18", 20, false, "pics/pika.jpg")

  var rob = new findCtrl.Person("Rob", "Robot", "402-102-9081", "lasereyes@gmail.com", "Hello. My name is Rob. I like to listen to techno and electronic music. Daft Punk is one of my favorite artists. I like to watch movies too. Some of my favorite movies are Walle, Tron, and Terminator. I'm looking to live in a ranch style house. One with prefereably no stairs at all. I can get up stairs but I'm just a little slow going about it. A hobbie I'm really into is spinning tops.", 0, 600, "December 1", 75, false, "pics/rob.jpg")

  var samus = new findCtrl.Person("Samus", "Aran", "442-122-0242", "zerosamus@gmail.com", "I'm a really athletic lady looking to live with a few other roommates. I'm pretty high energy but calm at the same time. I'm usually down for anything. I enjoy almost all sports. I really like space and science documentaries and enjoy drinking craft beer. I'm also a runner and like to get out for a run at least every other day.", 0, 800, "December 20", 25, false, "pics/samus.jpg")

  var sonic = new findCtrl.Person("Sonic", "TheHedgehog", "980-103-1072", "speeddemon@gmail.com", "My name's sonic and I'm looking for some like minded roommates to live with. I'm a big track star and I run every day. I love watching track and field events and going on long runs with friends.", 0, 450, "November 24", 26, false, "pics/sonic.jpg")

  var wario = new findCtrl.Person("Wario", "Webber", "405-182-1880", "motorman@gmail.com", "Hey, I'm Wario. I'm looking for probably just one or two roommates max to live with. I've got a motorcycle and enjoy working on it and going for joy rides. If you have a garage or a driveway available that would be perfect. If not I'm willing to settle for good street parking.", 0, 500, "January 17", 43, true, "pics/wario.jpg")

  var yoshi = new findCtrl.Person("Yoshi", "Green", "120-329-1042", "eggerworks@gmail.com", "I'm Yoshi! I'm basically a dinosaur. I've got a really long toungue. I can move my feet really quickly in the air. I'm really into throughing eggs at things as well as sometimes putting people into giant eggs. If you like eggs then I'm the roommate for you!", 0, 350, "May 25", 38, false, "pics/yoshi.jpg")

//  Placing people into personArray
  findCtrl.personArray.push(zelda, bowser, cFalc, dedede, diddy, dk, falco, fox, gameAndWatch, ganon, ike, jigs, kirby, link, lucario, lucas, luigi, mario, metaknight, mewtwo, peach, pika, rob, samus, sonic, wario, wiiFit, yoshi)



  findCtrl.applyFilter = function(){
    console.log(findCtrl.smokes)
  }





























}// End of Controller
