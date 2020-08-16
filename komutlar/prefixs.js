const db = require('wio.db')

module.exports.run = async (client, message, args) => {

        if(!message.guild.members.cache.get(message.author.id).hasPermission("ADMINISTRATOR")) {
           return message.channel.send("Bu işlem için gerekli yetkiniz bulunmamaktadır.")
        }

    var args = args[0]

    if(!args) {
        return message.channel.send("Lütfen bir prefix belirtiniz.")
    }

    db.set("prefix_" + message.guild.id, args)

    message.channel.send("Başarı ile prefixiniz (ön-ekiniz) " + args + " olarak ayarlandı.")
        
    }

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

module.exports.help = {
  name: "prefix",
  description: "prefix",
  usage: "prefix"
};