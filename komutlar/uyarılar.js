const Discord = require('discord.js')
const db = require('quick.db');

exports.run = (client, message, args) =>{
    
  const kullanıcı = message.author; 
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!user) return message.channel.send("Kullanıcının uyarılarını göstermem için kullanıcıyı etiketlemedin! Örnek Kullanım: **z!uyarılar @kullanıcı**")
  
  let uyarı = db.fetch(`uyarı_${user.id}`)
  
  const embed = new Discord.MessageEmbed()
  
  .setTitle("Uyarı Sistemi")
  .addField("Kontrol edilen üye:", `<@${user.id}>`)
  .addField("Uyarı Sayısı:", `${uyarı}`)
  .addField("Komutu Kullanan:", `${kullanıcı}`)
  
  message.channel.send(embed)
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyarılar"
}