const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) => {
  
if(args[0] === 'aç') {
  
db.set(`${message.guild.id}.reklam`, true)
  
const kinda = new Discord.MessageEmbed() 
  
.setDescription(`Reklam Engel Başarılı Bir Şekilde Akif Edildi.`)
.setColor("GREEN")

return message.channel.send(kinda)  
}
  
if (args[0] === 'kapat') {
  
db.delete(`${message.guild.id}.reklam`)
  
const kinda = new Discord.MessageEmbed() 
  
.setDescription(`Reklam Engel Başarılı Bir Şekilde Deaktif Edildi`)
.setColor("GREEN")

return message.channel.send(kinda)  
}
{
  
const kinda = new Discord.MessageEmbed() 
  
.setDescription('Lütfen **aç** Veya **kapat** Yazın. Örnek Kullanım : **reklam-engel aç/kapat**')
.setColor("RED")

return message.channel.send(kinda)  
}
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['reklamengel'], 
 permLevel: 0
};

exports.help = {
 name: 'reklam-engel',
 description: 'Kinda Code & Only V12',
 usage: 'reklam-engel'
};