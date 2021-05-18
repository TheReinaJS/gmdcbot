const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('<:841392996469309472:844249729020854292> **Malesef Yeterli Yetkiniz Bulunmamakta.**')
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('<:841392996469309472:844249729020854292> **Lütfen Bir Kullanıcı Etiketleyiniz.**')
  let sebep = args.slice(1).join(" ")
if(!sebep) return message.channel.send(`<:841392996469309472:844249729020854292> **Lütfen Bir Sebep Belirtiniz.**`)
 // let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   member.ban(member)                        //sharpen
   let embed = new Discord.MessageEmbed()
   .setColor('#7289DA')
  .setTitle(`${member.user.tag} Sunucudan Yasaklandı.`,member.user.avatarURL())
   .setDescription(`**<:841392996469309472:844249729020854292> Sebep ・ ** ${sebep}`)
   message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0  //sharpen
}

exports.help = {
  name: 'ban',
    description: '',
    usage: ''
}