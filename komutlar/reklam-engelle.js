const db = require('quick.db')
const Discord = require('discord.js')
 let ayarlar = ['aç','kapat']
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('<:841392996469309472:844249729020854292> **Doğru Kullanımı ・ \`!reklam-engelle aç & kapat\`**')
  if(!ayarlar.includes(args[0])) return message.channel.send(`Geçerli parametreleri kullanmalısın.\nParametreler: ${ayarlar.join(' - ')}`)
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<:841392996469309472:844249729020854292> **Malesef Yeterli Yetkiniz Bulunmamakta.**')
 
  if (args[0] == 'aç') {
    if(db.has(`reklam_${message.guild.id}`)) return message.channel.send(`Sistem zaten açık.`)
    db.set(`reklam_${message.guild.id}`, 'acik')
 let GamerWolf = new Discord.MessageEmbed()
 .setColor('#7289DA')
 .setDescription('<:841392996469309472:844249729020854292> **Reklam Engel Sistemi Başarıyla Açıldı.**')
 message.channel.send(GamerWolf)
  }
  if (args[0] == 'kapat') {
        if(!db.has(`reklam_${message.guild.id}`)) return message.channel.send(`Sistem zaten kapalı.`)
    db.delete(`reklam_${message.guild.id}`)
 let GamerWolf2 = new Discord.MessageEmbed()
 .setColor('#7289DA')
 .setDescription('<:841392996469309472:844249729020854292> **Reklam Engel Sistemi Başarıyla Kapatıldı.**')
 message.channel.send(GamerWolf2)
  }
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam'],
  permLevel: 0
};
 
exports.help = {
  name: 'reklam-engelle',
  description: '[Admin Komutu]',
  usage: 'reklam-engelle'
};