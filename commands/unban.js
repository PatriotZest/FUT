const Discord = require('discord.js');

module.exports = {
    name: "unban",
    description: "Unbans a member from a server",
    
    async run (client, message, args) {
    
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry bro but you just don't have enough permissions to use the power of the BANHAMMER!🔨")
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')
                                                                                                                                
    let reason = args.slice(1).join(" ");
	let userID = args[0];
	
	if(!reason) reason = "No reason stated";
	if(!args[0]) return message.channel.send("You must state someone to ban");

	if(isNaN(args[0])) return message.reply("The ID mentioned is not a number you fool");
    
    message.guild.fetchBans().then(async bans =>{
        if(bans.size === 0) return message.channel.send("There is not a single person banned in this server");
        let bUser = bans.find(b => b.user.id == userID)
        if(!bUser) return message.channel.send("That user is not banned you idiotic");
        await message.guild.members.unban(bUser.user, reason).catch(err =>{
            console.log(err);
            return message.channel.send("Heres a nitro code :)");
        }).then(() => {
           message.channel.send(`Unbanned **${args[0]}**`)  
        })
    })
	}
}