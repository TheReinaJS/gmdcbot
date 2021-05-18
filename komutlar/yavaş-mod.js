const wolfs = require('discord.js');

exports.run = async(client, message, args) => {
              const wolf = require('../ayarlar.json')
            let prefix = wolf.prefix


              if(message.channel.type == "dm")  return;
if (message.channel.type !== "text") return;
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanabilmen İçin **Mesajları Yönet** Yetkisine Sahip Olman Gerek!.");  

const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new wolfs.MessageEmbed()
                .setDescription(`**<:841036035688497152:844213748134838313> Doğru kullanım ・ \`${prefix}yavaş-mod [0/100]\`**`)
                .setColor('#7289DA')
            message.channel.send({embed})
            return
          }
if (limit > 100) {
    return message.channel.send(new wolfs.MessageEmbed().setDescription("Süre limiti maksimum **100** saniye olabilir.").setColor('RED'));
}  
    message.channel.send(new wolfs.MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor('GREEN')).then(m => m.delete({ timeout: 5000, reason: 'Siliniyor.' }));
  
var request = require('request');
request({
    url: `https://discord.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 0,

};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/10]',
};