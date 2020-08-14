const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için **Sunucuyu Yönet** yetkisine sahip olmalısın!')
  if (!args[0]) return message.channel.send('lütfen **aç** veya **kapat** yazın. Örnek Kullanım: **z!sa-as aç**')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')  
      message.channel.send(`Sa-As Sistemi başarıyla açıldı!`)
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
    
      message.channel.send(`Sa-As Sistemi başarıyla kapatıldı!`)
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: 'z!sa-as'
};