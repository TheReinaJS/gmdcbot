const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
let kinal = db.fetch(`hgK_${message.guild.id}`)
if(db.has(`hgK_${message.guild.id}`)) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription(`**Giriş Kanalı <#${kinal}> Kanalına Ayarlı! Kapatmak İçin** \`${ayarlar.prefix}giriş-kanal-kapat kapat\``)

return message.channel.send(embed)
}
  
let kanal = message.mentions.channels.first();  
if(!kanal) {
  
const embed = new Discord.RichEmbed()

.setColor('RED')
.setDescription(`**Giriş Kanalını Etiketlemedin! \`Doğru Kullanım : ${ayarlar.prefix}giriş-kanal #kanal\`**`)

return message.channel.send(embed)
}
  
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