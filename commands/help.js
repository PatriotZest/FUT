const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`$kick`', 'Kicks a member from your server via mention or ID')
        .addField('`$ban`', 'Bans a member from your server via mention or ID')
        .addField('`$unban`', 'unbans a member from your server via ID only')
        .addField('`$purge`', 'Deletes messages')
        .addField('`$nuke`', 'Completely deletes all messages of a particular channel')
        .addField('`$warn`', 'Warns a member of your server')
        .addField('`$deletewarns`', 'Clears the warning of a member')
        .addField('`$slowmode`', 'Sets the slowmode in a channel')
        .addField('`$setprefix`', 'Allows the user to set the prefix')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`$avatar`', 'Shows the avatar of a person')
        .addField('`$nitro`', 'Gives you a nitro code, refreshes every day')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utility')
        .addField('`$vote`', 'Err vote for Futkrem? idk')
        .addField('`$meme`', 'Shows you a meme :)')
        .addField('`$userinfo`', 'Shows the info of a person')
        .setTimestamp()

        const features = new Discord.MessageEmbed()
        .setTitle('Features')
        .addField('`antispam`', 'Mutes a person if he/she spams a lot , makes a new role if there is no mute role')
        .addField('`antisadvertising`', 'Does not allow foregin invites to be there XD')
        const pages = [
                moderation,
                fun,
                utility,
                features
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}