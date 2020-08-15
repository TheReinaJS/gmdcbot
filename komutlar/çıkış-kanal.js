const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("MANAGE_GUILD")) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('**Çıkış Kanalını Ayarlamak İçin `Sunucuyu Yönet` İznine Sahip Olmalısın!')

return message.channel.send(embed)
}
  
let kinal = db.fetch(`baybayK_${message.guild.id}`)
if(db.has(`baybayK_${message.guild.id}`)) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription(`**Çıkış Kanalı <#${kinal}> Olarak Ayarlı! Kapatmak İçin ; \n** \`${ayarlar.prefix}çıkış-kanal kapat\``)

return message.channel.send(embed)
}
  
let kanal = message.mentions.channels.first();
  
if(!kanal) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription(`**Çıkış Kanalını Etiketlemedin! \`Doğru Kullanım : ${ayarlar.prefix}çıkış-kanal #kanal\`**`)

return message.channel.send(embed)
}
  
db.set(`baybayK__${message.guild.id}`, kanal.id);

const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription(`**Çıkış Kanalı ${kanal} Olarak Ayarlandı!**`)   

message.channel.send(embed)                                                                                                                                      
}; 

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['bb-kanal','çıkışkanal','bbkanal'],
permLevel: 0
};
exports.help = {
name: 'çıkış-kanal',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'çıkış-kanal'
};