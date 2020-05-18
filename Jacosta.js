const TelegramBot = require("node-telegram-bot-api");
const token = "1178440847:AAGynbfX424x6EUiHgzw5um1rXJvVD4zTJM";
const bot = new TelegramBot(token,{polling:true});

const fs = require("fs");

//Vars
let introduction_statement = "Hello, I'm Jacosta. \nI'm Dagmawi Babi's AI-Powered Personal Assistant.";
let help_statement = "This is really simple. \nHere are all the commands. \n/start : To start the bot.\nAnalyze Account : To get a detailed summer of your telegram account. \nGood Morning : To get a sunny good morning reply. \nGood Night : To get a moony good night reply. \n/help : To display this help text."

let curApp = "";
//Main Processing
bot.on("message",(msg)=>{
	//Initial Variables
	let date = msg.date;
	let id = msg.from.id.toString();
	let isBot = msg.from.is_bot.toString();
	let username = msg.from.username;
	let lastName = msg.from.last_name;
	let firstName = msg.from.first_name;
	let languageCode = msg.from.language_code;
	let userText = msg.text.toLowerCase();	
	//Responses
	//Globals
	if (userText == "start"){
		bot.sendMessage(id,introduction_statement);
	}
	if (userText == "commands"){
		bot.sendMessage(id,"Here are the commands",
			{"reply_markup":
				{"keyboard":
					[	
						["Apps"],
						["Analyze Account"],
						["Good Morning","Good Night"],
						["Start","Commands","Help"]
					]
				}
			}
		);
	}
	if (userText == "help"){
		bot.sendMessage(id,help_statement);
	}
	//Customs
	if (userText == "analyze account"){
		bot.sendMessage(id,"Lang: " + languageCode + "\nIs Bot: " + isBot + "\nID: " + id  + "\nDate: " + date + "\nFirstname: " + firstName + "\nLastname: " + lastName + "\nUsername: @" + username);
	}
	if (userText.includes("good night")){
		bot.sendPhoto(id,"https://i.pinimg.com/originals/68/7b/28/687b287b0f3bf8b0ab1086dc92ffeb0e.jpg",{caption:"Good night "+firstName});
	}
	if (userText.includes("good morning")){
		//bot.sendPhoto(id,"https://i.pinimg.com/474x/c8/47/4c/c8474c09ab0b97045f6f29033f34b038--bacon-breakfast-minimalist-wallpaper.jpg",{caption:"Good morning "+firstName});
		//bot.sendPhoto(id,"https://besthqwallpapers.com/Uploads/2-5-2020/130982/thumb2-good-morning-4k-minimal-gray-backgrounds-creative.jpg",{caption:"Good morning "+firstName});
		//bot.sendPhoto(id,"https://www.free-largeimages.com/wp-content/uploads/2016/05/goodmorning123.jpg",{caption:"Good morning "+firstName});
		bot.sendPhoto(id,"https://www.androidguys.com/wp-content/uploads/2015/12/Poly-Lakeside.jpg",{caption:"Good morning "+firstName});
	}
	//Apps
	//Calculator
	if(userText == "calculator"){
		curApp = "Calculator";
		bot.sendMessage(id,"Calculator\nSend first number")
	}
});






