const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("MANAGE_GUILD")) {
  
const embed = new Discord.RichEmbed()

.setColor('RED')
.setDescription('**Giriş Kanalını Ayarlamak İçin `Sunucuyu Yönet` İznine Sahip Olmalısın!')

return message.channel.send(embed)
}  
  
if (args[0] === 'kapat') {
  
db.delete(`${message.guild.id}.hgK`)
db.delete(`${message.guild.id}.kanal`)
  
const embed = new Discord.MessageEmbed() 
  
.setDescription(`Giriş Kanalı Başarıyla Sıfırlandı!`)
.setColor("GREEN")
  
return message.channel.send(embed)
}    
  
if(db.has(`hgK_${message.guild.id}`)) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription(`**Giriş Kanalını Etiketlemedin! \n\nAçmak İçin : \`${ayarlar.prefix}giriş-kanal #kanal\`**`)

return message.channel.send(embed)
};
  
let kanal = message.mentions.channels.first();  
db.set(`hgK_${message.guild.id}`, kanal.id);

const embed = new Discord.RichEmbed()

.setColor('GREEN')
.setDescription(`**Giriş Kanalı ${kanal} Olarak Ayarlandı!**`)   

message.channel.send(embed)  
}; 

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['hoşgeldinkanal','hg-kanal','hgkanal','girişkanal','hoşgeldin-kanal'],
permLevel: 0
};

exports.help = {
name: 'giriş-kanal',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};