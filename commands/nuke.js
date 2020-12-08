const Discord = require('discord.js');

module.exports = {
    name: "nuke",
    description: "Removes all the messages from a particular channel",
    
    async run (client, message, args) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("There is no `Manage_Messages` blood in you.")
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have the right permissions.')


    let reason = args.join(" ");
    const nukeChannel = message.channel;

    if(!reason) reason = "No reason specified"
    if(!nukeChannel.deletable) return message.reply("This channel is nuke-proof");

    await nukeChannel.clone().catch(err => console.log(err))
    await nukeChannel.delete(reason).catch(err => console.log(err))
 

    }
}