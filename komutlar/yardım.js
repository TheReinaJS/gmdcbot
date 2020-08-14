const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {

 const Embed = new Discord.MessageEmbed()
.setTimestamp()
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setTitle('Yardım Menüsüne Hoşgeldin ^^')
.setDescription('<@712691670860169326> botunu rollerde en üste almayı unutmayın.\n\n🚨 ``z!diğer``\nGerekli Olabilecek komutlar.\n\n🏰 ``z!koruma``\nSunucu yönetimi için koruma yardımcısı.\n\n🎭 ``z!moderasyon``\nSunucunuzu yönetmek için gerekli bir komut\n\n🧩 ``z!yetkili``\nSadece yetkiler için gerekli olabilecek şeyler.\n\n🎓 ``z!sunucu-kurulum``\nSunucu Kurulum Hakkında Bilgi Menüsü\n\n⛽️ ``z!eğlence``\nSunucuda eğlence komutlarını gösterir ve eğlenmenize olanak sağlar.')  
.addField(`➥ Menüler`, `👌🏼 [Destek Sunucusu](https://discord.gg/R6r2aUf) | 👉🏼 [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=712691670860169326&permissions=8&scope=bot) `)
.setFooter(`${message.author.tag}` , client.user.avatarURL)
message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
