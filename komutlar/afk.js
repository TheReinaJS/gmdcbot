const db = require("quick.db");
const Discord = require("discord.js");
 
exports.run = function(client, message, args) {
 
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('#FF0000')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`AFK olmak için bir sebep belirtin.`)
  if(!REASON) return message.channel.send(embed)
 
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('#006400')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`AFK Moduna başarıyla girildi.`)
  message.channel.send(afk)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  kategori: 'genel',
  description: 'Kullanıcııyı afk moduna sokar.',
  usage: 'afk <sebep>'
};