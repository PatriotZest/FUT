const Discord = require('discord.js');
module.exports = {

    name: 'slowmode',
    description: "slows the chat",
     async run(client,message, args){
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('you dont have perms go back to middle school bro')
     if(!args[0]) return message.channel.send('you did not mention any channel smh')
     if(args[0] ===  'none'){
          await message.channel.setRateLimitPerUser(0);
          return message.channel.send(`Set Slowmode to 0 seconds!`)
     }
     if(isNaN(args[0])) return message.channel.send("mention a number ")
     const setTimeTo = Number(args[0]);

     if (setTimeTo === 5){
        await message.channel.setRateLimitPerUser(setTimeTo);
        return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`)
     };
     if (setTimeTo === 10){
        await message.channel.setRateLimitPerUser(setTimeTo);
        return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`)
     };
     if (setTimeTo === 15){
        await message.channel.setRateLimitPerUser(setTimeTo);
        return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`)
     };
     if (setTimeTo === 30){
        await message.channel.setRateLimitPerUser(setTimeTo);
        return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`)
     };
     if (setTimeTo === 60){
        await message.channel.setRateLimitPerUser(setTimeTo);
        return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`)
     };
     if (setTimeTo === 120){
        await message.channel.setRateLimitPerUser(setTimeTo);
        return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`)
     };
     if (setTimeTo === 300){
        await message.channel.setRateLimitPerUser(setTimeTo);
        return message.channel.send(`Set Slowmode to ${setTimeTo} seconds!`)
     };


     


     








     }
     }