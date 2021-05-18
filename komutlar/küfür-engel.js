const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (args[0] === "aç") {
    db.set(`${message.guild.id}.motion`, true);
 let GamerWolf = new Discord.MessageEmbed()
 .setColor('#7289DA')
 .setDescription('<:841392996469309472:844249729020854292> **Küfür Engel Sistemi Başarıyla Açıldı.**');
 message.channel.send(GamerWolf)
    return;
  }          
  if (args[0] === "kapat") {
    db.delete(`${message.guild.id}.motion`);     
 let GamerWolf2 = new Discord.MessageEmbed()
 .setColor('#7289DA')
 .setDescription('<:841392996469309472:844249729020854292> **Küfür Engel Sistemi Başarıyla Kapatıldı.**');
 message.channel.send(GamerWolf2)
    return;
  }
  message.channel.send(            
    "<:841392996469309472:844249729020854292> **Doğru Kullanımı ・ \`!reklam-engelle aç & kapat\`**"
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfürengel", "küfür-engel", "küfür"],     
  permLevel: 0
};

exports.help = {
  name: "küfür-engel",
  description: "",
  usage: ""
};

