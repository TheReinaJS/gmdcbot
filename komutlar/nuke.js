const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const yetkihata = new Discord.MessageEmbed()
    .setColor('#7289DA')
    .setDescription('**<:mavi_yess:844254276184178688> Bu İşlem İçin Gerekli Yetkiniz Bulunmamaktadır.**')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(yetkihata)

let channel = message.mentions.channels.first() || message.channel;

const uyg = new Discord.MessageEmbed()
.setColor("#7289DA")
.setDescription("<:841392996469309472:844249729020854292> **Nuke İşlemi Uygulanıyor.**")
 message.channel.send(uyg);
  
  const nuke = new Discord.MessageEmbed()
    .setDescription(`**<:mavi_okey:844254276179722242> ・ Kanal Başarıyla Silindi.**`)
    .setColor('#7289DA')
    let position = channel.position;
    setTimeout(() => {
    channel.delete();
    channel.clone().then(msg => {
    msg.setPosition(position);
    msg.send(nuke);
});
}, 280)


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};