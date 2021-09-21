'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

  robot.hear(/Hi Hubot!/, function(res) {
    return res.send("Hi there!");
  });
  robot.respond(/Hubot, I'm inviting friends over. What should I cook?/, function(res) {
    return res.send("Hmm, I think I can help. But first what's your name?");
  });

  robot.respond(/My name is (.*)/i, function(msg) {
    let name;
    name = msg.match[1];
    if (name == "Hubot"){
      return msg.send("You're not Hubot--I'm Hubot! Tell me your real name.");
    } else {
      return msg.reply("Nice to meet you, " + name + "! So tell me " + name + ",  how many friends did you invite?");
    }
  });
  let guests;
  robot.respond(/I invited (.*)/i, function(msg){
  guests = parseInt(msg.match[1]);
  if(guests >= 1 && guests <= 3){
    return msg.reply ("Super cute! This shouldn't be too bad. So what type of food do want? Please choose from these options: American, Mexican, French,Jamaican, or Suprise me")
  }
  else if (guests >=4 && guests <8){
    return msg.reply ("A lil dinner party I see. Awesome!! So what type of food do want? Please choose from these options: American, Mexican, French, Jamaican or Suprise me")
  }
  else{
    return msg.reply ('Wowza.You might want to cater. I dont think I can help.')

  }
});

let food;
let supme;

robot.respond(/I want (.*)/i, function(msg) {
let chickenimg = 'http://gph.is/1Pa3Qyj';

let tacoimg =  'http://gph.is/YBfd7Y';

let steakimg = 'http://gph.is/1n6yz1e';

let oxtailimg = 'http://gph.is/2DEgxmc';


let suprise = [chickenimg,tacoimg,steakimg,oxtailimg]

  food = msg.match[1];
  switch (food) {
    case "American": 
      return msg.reply("Great choice! My suggestion is Chicken!! " + chickenimg);
      break;
    case "Mexican":
      return msg.reply ("I was hoping you'd pick this. My suggestion is Tacos!! " + tacoimg);
      break;
    case "French":
      return msg.reply("C'est genial! My suggestion is Steak!!" + steakimg);
      break;
    case "Jamaican":
      return msg.reply("Wonderful! My suggestion is Oxtail!" + oxtailimg);
      break;
    case "Suprise me":
      supme = Math.floor(Math.random() * suprise.length);
      return msg.reply("So adventurous! My suggestion is: " + suprise[supme]);
      break
    default:
      return msg.reply ("Amazing option, but not my area of expertise. Wish I could help.")
  }
  });

robot.respond(/How much should I make?/, function(msg) {
  if(food === 'American' || supme === 0){
    let chickenwings = 3;
    for( let i = 0; i < guests; i++){
      chickenwings+= 2;
    }
    return msg.reply ("You should make " + chickenwings +" chicken wings.")
  }
  else if (food === 'Mexican'|| supme === 1){
    let tacos = 2
    for( let i = 0; i < guests; i++) {
      tacos +=2;
    }
    return msg.reply ("You should make " + tacos +" tacos.");
  }
  else if (food === 'French' || supme === 2){
    let steak = 1;
    for( let i = 0; i< guests; i++) {
      steak += 1;
    }
    return msg.reply ("You should make " + steak +" steaks.")
  }
  else if (food === 'Jamaican' || supme === 3){
    let oxtail = 1;
    for(let i = 0; i < guests; i++){
      oxtail += 1;
    }
    return msg.reply ("You should make " + oxtail + " plates of oxtail stew.")
  }
  else{
    return msg.reply("PARTY!YAYYYY!")
  }
  
});
  
  
 }
