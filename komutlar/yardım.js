const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setAuthor(`GamerWolf Yardım Menüsü`, client.user.avatarURL())
.setColor('#7289DA')
.setDescription(`<:a_:821738957997211659>  Lord Creative botumuzu eklemek için \`davet\` yazabilirsiniz.



`)  
.addField(`__Bilgilendirme__`,`<:a_:821738957997211659>  \`davet\` | Lord Creative'yi Sunucunuza Davet Edersiniz\n<:a_:821738957997211659>  \`!botbilgi\` | Botun İstatistiklerini Gösterir \n <:a_:821738957997211659>  \`ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
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