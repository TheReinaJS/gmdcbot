const Discord = require(`discord.js`);
const ayarlar = require(`../ayarlar.json`)
const db = require(`quick.db`);

exports.run = (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin `MESAJLARI YÖNET` yetkisine sahip olamlısınız!")

const Bdgo = args.join(` `);
  
if(!Bdgo) message.channel.send(
  
new Discord.MessageEmbed()
  
.setTitle(`Doğru Kullanım`)
.setDescription(`Sa-as Sistemini Çalıştırmak İçin ; \n**-sa-as aç** Veya **-sa-as kapat** Yazınız!`)
.setColor(`RED`)        
)
  
if(Bdgo === "aç") {
  
db.set(`sa-as_${message.guild.id}`, `acik`);
message.channel.send(
  
new Discord.MessageEmbed()
.setTitle(`Başarılı`)
.setDescription(`Bundan Sonra **sa** Yazıldığında as Vereceğim`)
.setColor(`RANDOM`)
)
}

else if(Bdgo === "kapat") {
    db.set(`sa-as_${message.guild.id}`, `kapali`);
    message.channel.send(
        new Discord.MessageEmbed()
        .setTitle(`Başarılı`)
        .setDescription(`Bundan Sonra __sa__ Yazıldığında Cevap Vermeyeceğim`)
        .setColor(`RANDOM`)
    )
}

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [`,`]
  };
  
  exports.help = {
    name: `sa-as`
  };