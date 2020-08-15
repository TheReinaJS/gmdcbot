const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
	const members = message.guild.members.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
	const memberss = message.guild.members.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
	
  const embed = new Discord.RichEmbed()
  
  .addField("Oynuyor Mesajı Reklam İçeren Kullanıcılar :", members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Kimsenin Oynuyor Mesajı Reklam İçermiyor.")
	.addField("Kullanıcı Adı Reklam İçeren Kullanıcılar :", memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin Kullanıcı Adı Reklam İçermiyor.")
	.setColor("GREEN")
	
  message.channel.send({embed})
  }

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['reklam-ara', 'reklamara', 'reklamtaraması'],
	permLevel: 2
}

exports.help = {
	name: 'reklam-taraması',
	description: 'Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar.',
	usage: 'reklam-taraması',
 
}
