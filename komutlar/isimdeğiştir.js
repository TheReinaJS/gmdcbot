const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => { 
if(!message.member.roles.cache.has(ayarlar.kayıt_yetkilisi)) return
let Kinsta = message.mentions.users.first() 
let code = args.slice(1).join(' ');
if(!Kinsta || !code) return message.reply(`Lütfen Kullanıcı Etiketle ve Yeni İsmini Gir`).then(a=> a.delete(5000))
const kinsta = new Discord.MessageEmbed()
.setTitle('İSİM BAŞARIYLA DEĞİŞTİ')
.addField(`İsmi Değişen;`,kinsta)
.addField(`İsim Değiştiren;`,message.author)
.addField(`Yeni İsim;`,code)
.setTimestamp()
message.channel.send(Kinsta )
message.guild.members.cache.get(Kinsta .id).setNickname(code)
};
exports.conf = {
  enabled: false,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'isimdeğiştir',
  description: 'Frenzy Code', 
  usage: 'Frenzy Code'
};
