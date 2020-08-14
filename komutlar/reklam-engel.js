const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.reklam`, true)
    message.channel.send(`Reklam Engel Başarılı Bir Şekilde Akif Edildi.`)
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.reklam`)
message.channel.send(`Reklam Engel Başarılı Bir Şekilde Kapatıldı Edildi`)
return
}
  message.channel.send('Lütfen **aç** veya **kapat** yazın. Örnek Kullanım: **z!Reklam-engel aç/kapat**')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [], 
 permLevel: 0
};

exports.help = {
 name: 'reklam-engel',
 description: 'Reklam Engel',
 usage: 'reklam-engel'
};