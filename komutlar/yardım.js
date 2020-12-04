const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`Destiny'in yardım menüsüne hoşgeldin!`)
.setColor('BLACK')
.addField("M̵̾̀øøn Team | Yardım Komutları! 🎉",`
**<a:wn_yan:768132877367115806> \`-genel\` : Genel komutları açar.**
**<a:wn_yan:768132877367115806> \`-ayarlar\` : Moderasyon komutlarını açar.**
**<a:wn_yan:768132877367115806> \`-sunucu\` : Sunucu komutlarını açar.**
**<a:wn_yan:768132877367115806> \`-eğlence\` : Eğlence komutlarını açar.**
**<a:wn_yan:768132877367115806> \`-yardımkayıt\` : Kayıt komutlarını açar.**
**<a:wn_yan:768132877367115806> \`-logo\` : Logo yapma komutlarını açar.**
**<a:wn_yan:768132877367115806> \`-eklenti\` : Eklenti komutlarını açar.**`)
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