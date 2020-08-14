const Discord = require('discord.js'),
db = require('quick.db'),
ayarlar = require('../ayarlar.json'),
prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  
const sayı = args[1]
const kanal = message.mentions.channels.first()
if(!sayı || !kanal) return message.reply(`Sayaç Sistemini ayarlamak için, kanal ve sayı değeri girin. Örnek Kullanım : \`${prefix}sayaç #kanal 100\``)
if(isNaN(sayı)) return message.reply(`Sayaç Sistemini ayarlamak için bir rakam gir.`)
  
await db.set(`SayaçSayı_${message.guild.id}`,sayı)  
await db.set(`SayaçKanal_${message.guild.id}`,kanal.id)                                         
  
message.reply(`Sayaç Başarıyla Ayarlandı! Kapatmak için **${prefix}sayaç-sıfırla**`)
};
exports.conf = {
  enabled: false,                                                                                                                                  
  guildOnly: false,
  aliases: ['sayaç'],
  permLevel: 3
};
exports.help = {                                                                                                                                           
  name: 'sayaç-ayarla',
  description: 'Sayaç Sistemi',
  usage: 'sayaç <sayı> <#kanal>'
};