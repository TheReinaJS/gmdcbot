const Discord = require('discord.js')
const db = require('quick.db');

exports.run = (client, message, args) =>{
  
  if(!message.member.hasPermissions('MANAGE_MESSAGE')) return message.channel.send(`Bu komutu kullanabilmek için **Mesajları Yönet** yetkisine sahip olmalısın.`)
  
  var uyarılog = db.fetch(`uyarlog_${message.guild.id}`)
  
  const yetkili = message.author;
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!user) return message.channel.send("Kullanıcının uyarılarını silmem için kullanıcıyı etiketlemelisin. Örnek Kullanım: **z!uyarı-sil @kullanıcı sebep**")
  
  let reason = message.content.split(" ").slice(2).join(" ");
  if (!reason) return message.channel.send("Kullanıcının uyarılarını silmem için bir sebep belirtmedin!")
  
  let uyarı = db.subtract(`uyarı_${user.id}`, 1)
  
  message.channel.send(`<@${user.id}> Adlı üyenin uyarısı başarıyla silindi! ayarlanan log kanalına iletildi.`)
  
  const embed = new Discord.MessageEmbed()
  
  .setTitle("İşlem: Uyarı Silme")
  .addField("Uyarısı Silinen Üye:", `<@${user.id}>`)
  .addField("Yetkili:", `${yetkili}`)
  .addField("Sebep:", `${reason}`)
  .addField("Uyarı Adeti:", `${uyarı}`)
  message.client.channels.get(uyarılog).send(embed) 
  user.send(embed) 
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "uyarı-sil"
}