const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Yeterli Yetkin Yok :x:')
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(':x: Kullanıcıyı etiketlemeyi unuttun kanka.')
  let sebep = args.slice(1).join(" ")
if(!sebep) return message.channel.send(`:x: Sebep belirtmeyi unuttun kanka.`)
 // let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   member.ban(member)                        //sharpen
   let embed = new Discord.MessageEmbed()
  .setAuthor(`${member.user.tag} Sunucudan yasaklandı.`,member.user.avatarURL())
   .setDescription(`**Sebep:** ${sebep}`)
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