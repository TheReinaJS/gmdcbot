  let Discord = require('discord.js');

exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || args.slice(1).join(' ');  
let member = message.mentions.users.first()
let isim = args.slice(1).join(" ")
let yas = args.slice(2).join(" ") 
if (!member) return message.channel.send('**Bir üye etiketlemelisin**')
if (!isim) return message.channel.send('Bir isim yazmalısın ')
if (!yas) return message.channel.send("Bir Yaş Girmelisin"); 
member.setNickName(`${isim} | ${yas}`)
let embed = new Discord.RichEmbed()
.setTimestamp()
.addField(
      `**• Kullanıcının takma adı değiştirildi.**`,
      `\n \n**Değiştirilen Kullanıcı :** ${member.user} \n **Düzenlenmiş Kullanıcı Adı :** \` ${isim}`
    )
.setFooter(`${message.author.tag}` , `${message.author.avatarURL}`)
.setColor('#6600FF')
message.react('<a:tik1:724735045448892466>')
message.channel.send(embed)
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['isim'],
permLevel: 0
}
exports.help = {
name: 'isim',
description: "İsim değiştirmeye ne dersin yakışıklı",
usage: 'isim <yeni isim>'
}