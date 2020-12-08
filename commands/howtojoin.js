const Discord = require('discord.js');

module.exports = {
    name: "howtojoin",
    description: "Tells you how to join",

    async run (client, message, args){
          message.author.send("To Join Nurox Clan as a player of Fortnite"); 
	message.author.send("You can join as a content creator a Creative warrior or as a Comptetive player.");
	message.author.send("To join as a content creator you need to have atleast 100 subs on YT and give weekly uploads.");
	message.author.send("To join as a creative warrior you need to know atleast 5 retakes and you can also send ur montage in rc submission if you dont have a montage you can dm one of the fn leads and they can try u out.");
	message.author.send("To join as a Competive player you need to have good placements and again you need to send your montage in rc submission");

}
}