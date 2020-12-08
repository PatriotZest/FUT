const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "Bans a member from a server",
    
    async run (client, message, args) {
    
        
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')
        
    let reason = args.slice(1).join(" ");
	const mentionedMember = message.mentions.members.first();
	
	if(!reason) reason = "No reason stated";
	if(!args[0]) return message.channel.send("You must state someone to ban");

	if(!mentionedMember) return message.reply("That user does not exist");	 
	if(!mentionedMember.bannable) return message.reply("That user is either a mod/admin or my role is below than his");

    const banEmbed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setThumbnail(mentionedMember.user.displayAvatarURL())
        .addField('User Banned', mentionedMember)
        .addField('Banned by', message.author)
        .addField('Reason', reason)
        .setFooter('Time banned', client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(banEmbed)

        await mentionedMember.send(banEmbed).catch(err => console.log(err));
        await mentionedMember.ban({
            days: 7,
            reason : reason
        }).catch(err => console.log(err)).then(() => message.channel.send(`Banned 🔨 **${mentionedMember.user.tag}**`))
	}
}