const Discord = require('discord.js');

module.exports = {
    name: "nickname",
    description: "changes the nickname of a person",
    
    async run (client, message, args) {
    
        if(!message.member.hasPermission("ADMINSTRATOR")) return message.channel.send('You don\'t have the right to name others you Sun Tzao!')
        if(!message.guild.me.hasPermission("ADMINSTRATOR")) return message.channel.send('I don\'t have the right permissions.')
        const mentionedMember = message.mentions.members.first();
        const nickname = args.slice(1).join(" ");
	
        if(!args[0]) return message.channel.send("You must state someone to name");

        if(!mentionedMember) return message.reply("That user does not exist");
        if(!nickname) return message.reply("The member does not exist in this universe");
 
        await mentionedMember.setNickname(nickname).catch(err => console.log(err) && message.channel.send("Error"));
        if(nickname || mentionedMember) return message.channel.send(`Changed nickname to **${nickname}**`); 

}
}