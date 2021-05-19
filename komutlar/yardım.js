const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setAuthor(`Wolf ・ Moderasyon Yardım Menüsü`, client.user.avatarURL())
.setColor('#7289DA')
.setDescription(`<:841393053151264829:844213718622404656>  **Wolf ・ Moderasyon Botumuzu Eklemek İçin \`!davet\` Yazabilirsiniz.**

<:841036156098969641:844213748222394389> \`!ban\` **・ Sunucudan Bir Üyeyi Yasaklar.**

<:841036156098969641:844213748222394389> \`!unban\` **・ İstediğiniz Kişinin Banını Kaldırır.**

<:841036156098969641:844213748222394389> \`!sil\` **・ Belirli Bir Kanaldaki Mesajları Siler.**

<:841036156098969641:844213748222394389> \`!yavaş-mod\` **・ Sohbete Yazma Sınır (Süre) Ekler.**

<:841036156098969641:844213748222394389> \`!istatistik\` **・ Bot Hakkında Bilgi Verir.**

<:841036156098969641:844213748222394389> \`!reklam-engelle\` **・ Reklam Engel Açıp Kapatırsın.**

<:841036156098969641:844213748222394389> \`!nuke\` **・ Kanala Nuke Atarsın.**

`)  
  .setImage(`https://cdn.discordapp.com/attachments/834351722373185546/844219044814913546/Adsz.png`)
.setThumbnail(client.user.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["mod"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: 'yardım menüsü',
    usage: 'yardım'
  };