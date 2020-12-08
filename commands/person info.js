const Discord = require('discord.js');
module.exports = {

    name: 'info',
    description: "tells info",
      async run (client,message, args){
     let mentionedMember = message.mentions.members.first(); 
     let mentionedUser = message.mentions.users.first(); 
     const userEmbed = new Discord.MessageEmbed()

     .setTitle(`User Information for ${mentionedUser.username}`)
     .addField('Username:', `${mentionedUser.username}`)
     .addField("User ID:", `${mentionedUser.id}`)
     .addField("Account created:", `${mentionedUser.createdAt}`)
     .addField("Joined the server at:", `${mentionedMember.joinedAt}`)
     .addField("User Status:", `${mentionedUser.presence.status}`)

     message.channel.send(userEmbed).catch(err => console.log(err));









     }
     }