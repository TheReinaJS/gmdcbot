const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const kinsta = new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.guild.name, message.guild.avatarURL)
.setThumbnail(message.guild.iconURL)  
.setDescription(`
**Sunucudaki \`Toplam Üye\` Sayısı:** \`${message.guild.memberCount}\`
**Sunucudaki \`Online\` Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'online').size}\`
**Sunucudaki \`idle\` Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'idle').size}\`
**Sunucudaki \`Dnd\` Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'dnd').size}\`
**Sunucudaki \`Offline\` Sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'offline').size}\`
`)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)   
  message.channel.send(kinsta);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say"
};
