
const Discord = require('discord.js');
const jsroblox = require('js-robloxapi');

exports.run = (client, message, args) => {
  
let isim = args[0]
if (!isim) return message.reply('Lütfen Roblox Kullanıcı Adı Yazınız')
  
jsroblox.getInfo(isim, (data) => {
  
if (!data) return message.reply(`**${isim}** Adlı Kullanıcı Bulunamadı`)
  
let durum = {
"No": "Offline",
"undefined": "Bilinmiyor"
};
  
const embed = new Discord.RichEmbed()

.setColor("GREEN")
.setThumbnail(data.Avatar)
.setTitle(isim)
.addField('İd :', `**${data.Id}**`)
.addField('Durumu :', `**${durum[data.Online]}**`)
.addField('Arkadaşlar :', `Arkadaş Sayısı: **${data.TotalFriends}**Arkadaş Listesi: **${data.ListFriends}**`)
.addField('Grup Listesi :', `**${data.ListGroup}**`)
.addField('Rozetleri :', `**${data.ListBadges}**`)

return message.channel.send(embed)
})
};

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['rblx'],
   permLevel: 0
 };

 exports.help = {
   name: 'roblox',
   description: 'roblox',
   usage: 'roblox'
 };