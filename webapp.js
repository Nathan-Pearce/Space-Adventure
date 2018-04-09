// JavaScript Document

var playername = "";

window.onload = function() {
	// load the cookies
	if( getCookie("scene") == "") {
		// print the first scene
		updateScene("start");
	} 
else{updateScene(getCookie("scene"));
}
};

function new_message(msg){
	document.getElementById("storyline").innerHTML += "<p>" + msg + "</p>";
}

function updateScene(s) {
// clear the text
document.getElementById("storyline").innerHTML = "";
// hide the choices div
document.getElementById("choices").style.visibility = "hidden";
  switch(s) {
    case"start":
	playername = prompt("What is your last name?");
			// change btn1
			document.getElementById("btn1").innerHTML ="Yes";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s1')");
			// change btn2
			document.getElementById("btn2").innerHTML ="No";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s3')");
		new_message("The year is 2753.");
		setTimeout(function(){
			new_message("You: Is anyone out there? Hello?...");
			setTimeout(function(){
				new_message("Base: Who is this?");
				setTimeout(function(){
					new_message("You: My name is Captain " + playername + ".");
					setTimeout(function(){
						new_message("Base: Captain " + playername + "! We thought you died when the Falcon exploded!");
						setTimeout(function(){
							new_message("You: I was the only survivor. I am on an unknown planet with limited resources and my ship is in ruins.");
							setTimeout(function(){
								new_message("Base: Ok, we will try to get to you. Do you still have your locator we gave you?");
								setTimeout(function(){
								document.getElementById("choices").style.visibility = "visible";
								}, 1500);
							}, 1500);
						}, 1500);
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s1":
			//change btn1
			document.getElementById("btn1").innerHTML ="Ermina 3";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s2')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Sirona";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
		new_message("Base: Ok, try to keep it on Captain " + playername + ".");
		setTimeout(function(){
			new_message("You: Got it.");
			setTimeout(function(){
				new_message("Base: Wow, it appears you are on the planet...");
				setTimeout(function(){
				document.getElementById("choices").style.visibility = "visible";
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s2":
			//change btn1
			document.getElementById("btn1").innerHTML ="Food";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s4')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Shelter";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
		new_message("You: How many light years is that from Earth?");
		setTimeout(function(){
			new_message("Base: About seven light years away. This means it will take us apporximately two days to get to your location.");
			setTimeout(function(){
				new_message("You: Ok, I think I had enough supplies to survive, but I do need some Isotope Base 23 because my supply of it is running out.");
				setTimeout(function(){
					new_message("Base: What would happen if you didn't have it Captain " + playername + "?");
					setTimeout(function(){
						new_message("You: Isotope Base 23 is the thing that keeps me alive.");
						setTimeout(function(){
							new_message("Base: On your planet, it is referred to as food.");
							setTimeout(function(){
								new_message("You: Should I go find some more food or should I start making a shelter?");
								setTimeout(function(){
								document.getElementById("choices").style.visibility = "visible";
								}, 1500);
							}, 1500);
						}, 1500);
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s3":
			//change btn1
			document.getElementById("btn1").innerHTML ="Food";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s4')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Shelter";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
		new_message("Base: How many moons are there on that planet? How long is each day?");
		setTimeout(function(){
			new_message("You: There are about seven moons and it takes about 37 hours to get through one day. The planet has no living beings except for some scattered plants.");
			setTimeout(function(){
				new_message("Base: How's your food supply Captain " + playername + "?");
				setTimeout(function(){
					new_message("You: I am surviving only only on a few berries and mangoes right now, but I am starting to lose my supply of it.");
					setTimeout(function(){
						new_message("You: I'll get more food or I'll go creater a shelter.");
						setTimeout(function(){
						document.getElementById("choices").style.visibility = "visible";
						}, 1500);
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s4":
			//change btn1
			document.getElementById("btn1").innerHTML ="Sleep";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s6')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Find wood";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
		new_message("Base: Apparently, that planet has an abundace of nagoes, burp causing berries, and fart causing oranges.");
		setTimeout(function(){
			new_message("You: Ok.");
			setTimeout(function(){
				new_message("Base: We should be able to get there in about five Earth days. Sound good Captain " + playername + "?");
				setTimeout(function(){
					new_message("You: Got it, I'm going to go to sleep, or go to find some wood.");
					setTimeout(function(){
					document.getElementById("choices").style.visibility = "visible";
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s5":
			//change btn1
			document.getElementById("btn1").innerHTML ="Rest";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s7')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Sleep";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s6')");
		new_message("You: I've got some wood and I'm going to prepare it for the night. At night, the weather goes down to about -4 degrees Fahrenheit.");
		setTimeout(function(){
			new_message("Base: That planet has a lot of Isotope Base 189 which is an extremely good insulator.");
			setTimeout(function(){
				new_message("You: Got it");
				setTimeout(function(){
					new_message("Base: Now you should rest or you could stay awake and look for some more stuff during the night.");
					setTimeout(function(){
					document.getElementById("choices").style.visibility = "visible";
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s6":
			//change btn1
			document.getElementById("btn1").innerHTML ="Fish";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s8')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Hunt";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s9')");
		new_message("You: Ok, now it is the morning currently unaware of the time.");
		setTimeout(function(){
			new_message("Base: I guess you got to start doing something.");
			setTimeout(function(){
				new_message("You: Alright, I guess so... I'm going to go hunt for some meat now that I know that I have a steady flow of fruits.");
				setTimeout(function(){
					new_message("Base: You can also fish, what do you want to do Captain " + playername + "?");
					setTimeout(function(){
					document.getElementById("choices").style.visibility = "visible";
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s7":
			//change btn1
			document.getElementById("btn1").innerHTML ="Fish";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s8')");			
			//change btn2
			document.getElementById("btn2").innerHTML ="Hunt";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s9')");
		new_message("You: Good thing I started up a fire so that I wouldn't be cold...");
		setTimeout(function(){
			new_message("Base: Alright, if you are awake Captain " + playername + ", you should at least go hunting with darkness at your advantage.");
			setTimeout(function(){
				new_message("You: Ok, should I go fish or hunt on land?");
				setTimeout(function(){
				document.getElementById("choices").style.visibility = "visible";
				}, 1500);
			}, 1500);
		}, 1500);
			 break;
	case"s8":
			//change btn1
			document.getElementById("btn1").innerHTML ="No reply";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML ="zzzzzzz....";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s10')");
		new_message("You: Alright, I'm going to go fishing.");
		setTimeout(function(){
			new_message("You: I'm casting out the pole and hoping that I can catch something.");
			setTimeout(function(){
				new_message("Base: I'm picking up on something that is pulling on your pole!");
				setTimeout(function(){
					new_message("You: My gosh! Already! Ok, I'm reeling it in now. It seems like its some kind of a big one.... wait now it looks like a mountian and whooooooooooa... pzzzzzzz");
					setTimeout(function(){
						new_message("Base: Come in Captain " + playername + "! Are you there? I repeat, ARE YOU THERE?");
						setTimeout(function(){
						document.getElementById("choices").style.visibility = "visible";
						}, 1500);
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s9":
			//change btn1
			document.getElementById("btn1").innerHTML ="He dead bro";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Continue?";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s12')");
		new_message("You: Ok, I made a decent spear out of the poles and sharp ends I found in the lefovers of the ship and are heading for what looks like the woods...");
		setTimeout(function(){
			new_message("Base: Captain " + playername + ", you are now in an uncharted area that has unknown dangers.");
			setTimeout(function(){
				new_message("You: Alright, I'll take the risk cause I need food. Going into the woods. Oh! I found a small chicken looking thing running away from me.");
				setTimeout(function(){
					new_message("You: I'm going to chase it... HOLY SMOKES THERE IS A HUGE BEAST WITH GLOWING EYES RUNNING AT ME!");
					setTimeout(function(){
					document.getElementById("choices").style.visibility = "visible";
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s10":
			//change btn1
			document.getElementById("btn1").innerHTML ="Start exploring";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s14')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Immediatly trys to escape";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s13')");	
		new_message("You: zzzzzzz.... yea I'm back... seems like this lake took me to an underwater world.");
		setTimeout(function(){
			new_message("Base: What are the statistics? What is the population and what species?");
			setTimeout(function(){
				new_message("You: This is a place with about a 1000 in population number... with what seems like dogs that have astronaut helmets.");
				setTimeout(function(){
					new_message("Base: Alright Captain " + playername + ", try to get out of there as soon as you can cause we don't know if they are hostile.");
					setTimeout(function(){
						new_message("You: I don't think I have a choice... I'm what it seems deep enough to not even see the surface.");
						setTimeout(function(){
							new_message("Base: This is a huge mess, we first have to get you back and now you gotta get out of there.");
							setTimeout(function(){
							document.getElementById("choices").style.visibility = "visible";
							}, 1500);
						}, 1500);
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s11":
			//change btn1
			document.getElementById("btn1").innerHTML ="Play Again?";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('start')");	
			//change btn2
			document.getElementById("btn2").innerHTML ="Play Again?";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('start')");
		new_message("U dead bro...Thanks for playing!");
		setTimeout(function(){
		new_message("If you want to play again, the Reset Button is on the bottom of the page.");
		}, 1500);
		    break;
   case"s12":
   	        //change btn1
			document.getElementById("btn1").innerHTML ="Play dead";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
      	    //change btn2
		    document.getElementById("btn2").innerHTML ="Run";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s17')");
  	new_message("Base: Get your butt out of there Captain " + playername + "!");
		setTimeout(function(){
			new_message("You: I AM GETTING MY BUTT OUT OF THE FOREST BUT IT SEEMS LIKE THE BEAR ISN'T SLOWING DOWN AT ANY RATE!");
			setTimeout(function(){
				new_message("Base: Alright, do you know the species of this animal?");
				setTimeout(function(){
					new_message("You: From what I see, it is a species of Smoke Eyes known for their bright eyes in the night and a huge appetite for humans.");
					setTimeout(function(){
					document.getElementById("choices").style.visibility = "visible";
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
		    break;
	case"s13":
	        //change btn1
		    document.getElementById("btn1").innerHTML ="Sabotage";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s15')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Change of mind";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s16')");
		new_message("Base: That's a bad idea though if you want to try it.... I can't stop you.");
		setTimeout(function(){
			new_message("You: I got to do this or I will stay in this place forever...");
			setTimeout(function(){
				new_message("Base: Alright, it seems like you should be getting to the back of this city in order to exit the bubble that is protecting this dogpolis.");
				setTimeout(function(){
					new_message("You: Ok, where am I getting my suit?");
					setTimeout(function(){
						new_message("Base: You should be able to get a suit by sabotaging it from one of the dogs.");
						setTimeout(function(){
							new_message("You: Alright, I'm heading over to a schnauzer....");
							setTimeout(function(){
							document.getElementById("choices").style.visibility = "visible";
							}, 1500);
						}, 1500);
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s14":
		    //change btn1
			document.getElementById("btn1").innerHTML = "Foreign intruder";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s15')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Celebrates arrival";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s16')");
		new_message("You: It seems like it's some kind of high-tech city with extremely smart telepathic dogs...");
		setTimeout(function(){
			new_message("Base: This is an uncharted species! This is something we have never seen before... These are animals that are smarter than the human kind.");
			setTimeout(function(){
				new_message("You: I'm going into their convienience store.");
				setTimeout(function(){
					new_message("Base: What do you see Captain " + playername + "?");
					setTimeout(function(){
						new_message("You: I see beef-jerky, a bone-a-licious juice, and I see some stuff called underwater lighter.");
						setTimeout(function(){
							new_message("Base: Alright, use your galaxtational credit card and buy yourself some food and bone-a-licious juice.");
							setTimeout(function(){
								new_message("You: Alright.... wait why are all the dogs surrounding me?");
								setTimeout(function(){
								document.getElementById("choices").style.visibility = "visible";
								}, 1500);
							}, 1500);
						}, 1500);
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s15":
			//change btn1
			document.getElementById("btn1").innerHTML = "Start swimming";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s18')");	
			//change btn2
			document.getElementById("btn2").innerHTML ="Get's caught";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s11')");
		new_message("You: Alright, I'm hitting and running away from the dogs because they became extremely hostile towards me... and quite frankly want to execute me.");
		setTimeout(function(){
			new_message("You: I'm putting on my suit, on my way to the end of the bubble.");
			setTimeout(function(){
				new_message("You: Oh jeez, I'm sprinting to a huge gaping hole and here goes nothing.... AHHHHHHHHH.... ZZZZZZZZZZZ.");
				setTimeout(function(){
				document.getElementById("choices").style.visibility = "visible";
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s16":
			//change btn1
			document.getElementById("btn1").innerHTML = "Stay forever";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Still get out";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s15')");
		new_message("You: Gabe the dog god is welcoming me.");
		setTimeout(function(){
			new_message("Base: Alright, say that you are from the Falcon and that you come in peace.");
			setTimeout(function(){
				new_message("You: They say that they are from an alternate universe and that they are the smartest species in this counter part universe that they arrived in.");
				setTimeout(function(){
					new_message("You: They say that they will provide us hospitality if we do not agree to attack them.");
					setTimeout(function(){
						new_message("Base: Ok Captain " + playername + ", do you want to stay there or do you want to still try and get out?");
						setTimeout(function(){
						document.getElementById("choices").style.visibility = "visible";
						}, 1500);
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s17":
			//change btn1
			document.getElementById("btn1").innerHTML = "Dive in water";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s10')");
			//change btn2
			document.getElementById("btn2").innerHTML = "Climb up tree";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s20')");
		new_message("You: Shoot, the creature isn't slowing down, what should I do?");
		setTimeout(function(){
			new_message("Base: Try to find a tree to climb, or water to swim in.");
			setTimeout(function(){
				new_message("You: I see both, which one should I go to?");
				setTimeout(function(){
				document.getElementById("choices").style.visibility = "visible";
				}, 1500);
			}, 1500);
		}, 1500);
			break;
	case"s18":
		  //change btn1
		  document.getElementById("btn1").innerHTML ="Meet at surface of water";
		  document.getElementById("btn1").setAttribute("onclick", "updateScene('s19')");
		  //change btn2
		  document.getElementById("btn2").innerHTML = "Go on a hill";
		  document.getElementById("btn2").setAttribute("onclick", "updateScene('s19')");
	  new_message("You: The dogs are following me to the surface even though I am swimming as fast as I can!");
		setTimeout(function(){
			new_message("Base: We are arriving and we have your pinpoint position.");
			setTimeout(function(){
				new_message("You: About time that you are coming because I am about to die.");
				setTimeout(function(){
					new_message("Base: Problem is though that we can't get too close to the ground because the planet has too much of a montainous landscape.");
					setTimeout(function(){
					document.getElementById("choices").style.visibility = "visible";
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
		  break;
  case"s19":
  		    //change btn1
		    document.getElementById("btn1").innerHTML = "Dogs catch him";
		    document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML = "Mission Completed";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s21')");
  	new_message("You: THE DOGS ARE STILL FOLLOWING ME!!! Where are you going to meet me?");
		setTimeout(function(){
			new_message("Base: We will meet you near the second hill facing the third sun over the water.");
			setTimeout(function(){
				new_message("You: They're still gaining on me, you guys may need to meet me on the way to the hill.");
				setTimeout(function(){
					new_message("Base: It's a risk, but a risk we're willing to take.");
					setTimeout(function(){
						new_message("You: I don't know if I can make it!");
						setTimeout(function(){
							new_message("Base: We see you Captain " + playername + ", just run a little bit faster!");
							setTimeout(function(){
								new_message("You: DROP THE LADDER NOW!!!");
								setTimeout(function(){
									new_message("Base: Yes sir!");
									setTimeout(function(){
										new_message("You: The dogs are about six feet away. I'm climbing the ladder now! PULL ME UP!!!");
										setTimeout(function(){
										document.getElementById("choices").style.visibility = "visible";
										}, 1500);
									}, 1500);
								}, 1500);
							}, 1500);
						}, 1500);
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
		    break;
	case"s20":
	       //change btn1
		   document.getElementById("btn1").innerHTML = "Get's brutally eaten";
		   document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
		   //change btn2
		   document.getElementById("btn2").innerHTML = "Base comes";
		   document.getElementById("btn2").setAttribute("onclick", "updateScene('s22')");
	  new_message("You: Alright, I climbed up a tree and the creature seems like it can't reach me from up here...");
		setTimeout(function(){
			new_message("Base: Actually, we are coming near your planet, just give us a few minutes and we will be there to take you home sir.");
			setTimeout(function(){
				new_message("You: THE CREATURE IS DESTROYING THE TREE, HURRY UP!!!");
				setTimeout(function(){
					new_message("Base: I'm going as fast as I can!");
					setTimeout(function(){
					document.getElementById("choices").style.visibility = "visible";
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
		   break;
	case"s21":
	        //change btn1
			document.getElementById("btn1").innerHTML ="Play Again?";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('start')");	
			//change btn2
			document.getElementById("btn2").innerHTML ="Play Again?";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('start')");
		new_message("Creators: Congratulations, you have landed back on Earth in the year 2753 alive.");
		setTimeout(function(){
			new_message("Creators: You have shown your bravery in the wilderness, your survival skills, and enduring the unknown for two days.");
			setTimeout(function(){
				new_message("Creators: Thank you for playing Space Adventure!");
				setTimeout(function(){
				document.getElementById("choices").style.visibility = "visible";
				}, 1500);
			}, 1500);
		}, 1500);
		    break;
	case"s22":
			//change btn1
		    document.getElementById("btn1").innerHTML ="Mission Completed";
		    document.getElementById("btn1").setAttribute("onclick", "updateScene('s21')");
		    //change btn2
		    document.getElementById("btn2").innerHTML ="Let go of ladder for some random reason";
		    document.getElementById("btn2").setAttribute("onclick", "updateScene('s11')");
		new_message("Base: Alright, we are sweeping in. Grab the ladder that we sent down.");
		setTimeout(function(){
			new_message("You: Oh geez, the creature ripped the tree and I'm jumping... I GOT IT!");
			setTimeout(function(){
				new_message("Base: Alright Captain " + playername + ", I'm taking you home now.");
				setTimeout(function(){
				document.getElementById("choices").style.visibility = "visible";
				}, 1500);
			}, 1500);
		}, 1500);
		    break;
	}
	save_cookies("scene", s);
}
 
 // save cookie scene
 function save_cookies(key, value) {
	 var exdays = 300;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires;
 }
 
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}