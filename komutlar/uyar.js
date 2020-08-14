const Discord = require('discord.js')
const db = require('quick.db');

exports.run = (client, message, args) =>{
  
  if(!message.member.hasPermission('MANAGE_MESSAGE')) return message.channel.send(`Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olmalısın.`)
  
  var uyarılog = db.fetch(`uyarlog_${message.guild.id}`)
  
  const yetkili = message.author; 
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!user) return message.channel.send("Hatalı Kullanım! Örnek Kullanım : **z!uyar @kullanıcı sebep**")
  
  let reason = message.content.split(" ").slice(2).join(" ");
  if (!reason) return message.channel.send("Uyarmam için bir sebep belirtilmedi!")
  
  let uyarı = db.add(`uyarı_${user.id}`, 1)
  
  message.channel.send(`<@${user.id}> Adlı kullanıcı baraşıyla özelden uyarıldı! ayarlanan log kanalına iletildi!`)
  
  const embed = new Discord.MessageEmbed()

  .addField("Uyaran Yetkili:", `${yetkili}`)
  .addField("Sebep:", `${reason}`)
  .addField("Uyarı Adeti:", `${uyarı}`)
  .addField("NOT:", `Uyarılmamaya özen göster.`)
  message.client.channels.cache.get(uyarılog).send(embed) 
  user.send(embed) 
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyar"
}