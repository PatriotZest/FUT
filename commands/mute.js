const Discord = require('discord.js');

module.exports = {
       name: "muter",
       description : "mute people",

    async run (client, message, args) {
      if(message.member.hasPermission('KICK_MEMBERS')){
         let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

         if(!person) return message.reply("Could not find user")

         let mainrole = message.guild.roles.cache.find(role => role.name  === "Member");
         let muterole = message.guild.roles.cache.find(role => role.name  === "Muted");
         let time = args[1];

         if(!muterole){
              message.channel.send("It seems that this server does not have the mute role \n Please make a new one and kindly name it as 'Muted'");
         }else{
              if(!time){
                    return message.reply("Please enter a specific time to mute the person for -_-")
              }
              person.roles.remove(mainrole);
              person.roles.add(muterole);

              message.channel.send(`@${person.user.username} has been muted for the amount of time you specified 😀`)
              setTimeout(function () {
                  message.person.roles.add(mainrole);
                  message.person.roles.remove(muterole);
                  message.channel.send(`@${person.user.username} has been unmuted`);
              },ms(time))
         }
      }
      else{
            message.reply("You don't have the permissions to run this command")
      }
      
      }
      }