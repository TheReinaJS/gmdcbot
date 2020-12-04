const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`Destiny'in yardım menüsüne hoşgeldin!`)
.setColor('BLACK')
.addField("Yrnex Creative・YouTube | Yardım Komutları! 🎉",`
**<a:yan:784456151844519997> \`-genel\` : Genel komutları açar.**
**<a:yan:784456151844519997> \`-ayarlar\` : Moderasyon komutlarını açar.**
**<a:yan:784456151844519997> \`-sunucu\` : Sunucu komutlarını açar.**
**<a:yan:784456151844519997> \`-eğlence\` : Eğlence komutlarını açar.**
**<a:yan:784456151844519997> \`-yardımkayıt\` : Kayıt komutlarını açar.**
**<a:yan:784456151844519997> \`-logo\` : Logo yapma komutlarını açar.**
**<a:yan:784456151844519997> \`-eklenti\` : Eklenti komutlarını açar.**`)
 .setImage('https://media.discordapp.net/attachments/767428424251211796/769168676841848862/standard_1.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","yardım","yardim"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
}; 