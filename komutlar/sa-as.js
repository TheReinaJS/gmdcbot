const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<:841392996469309472:844249729020854292> **Malesef Yeterli Yetkiniz Bulunmamakta.**')
  if (!args[0]) return message.channel.send('<:841392996469309472:844249729020854292> **Doğru Kullanımı ・ \`!sa-as aç & kapat\`**')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
 let GamerWolf = new Discord.MessageEmbed()
 .setColor('#7289DA')
 .setDescription('<:841392996469309472:844249729020854292> **Sa-As Sistemi Başarıyla Açıldı.**')
 message.channel.send(GamerWolf)
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
 let GamerWolf2 = new Discord.MessageEmbed()
 .setColor('#7289DA')
 .setDescription('<:841392996469309472:844249729020854292> **Sa-As Sistemi Başarıyla Kapatıldı.**')
 message.channel.send(GamerWolf2)    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: 'sa-as'
};