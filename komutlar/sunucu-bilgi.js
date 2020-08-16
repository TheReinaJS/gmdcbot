const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args, user) => {

  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let sicon = message.guild.iconURL;
  
   let serverembed = new Discord.RichEmbed()
   
   .setAuthor('Server Info')
   
   .setDescription(`**${message.guild.name}**`, true)
   .setThumbnail(message.guild.iconURL)
   .setColor("GREEN")
   
   .addField("Server ID", message.guild.id, true)
   .addField("Server Owner", message.guild.owner.user.tag, true)
   .addField("Channels", message.guild.channels.size, true)
   .addField("Total Members", message.guild.memberCount, true)
   .addField("Members", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Roles", message.guild.roles.size, true)
   .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
   
   message.channel.send(serverembed);

}

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['server-info','sunucubilgi','sunucu-bilgi'], 
  permLevel: 0 
};

exports.help = {
  name: 'serverinfo', 
  description: 'serverinfo.',
  usage: 'serverinfo' 
};