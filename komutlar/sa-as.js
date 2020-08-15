const Discord = require(`discord.js`);
const ayarlar = require(`../ayarlar.json`)
const db = require(`quick.db`);

exports.run = (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin `MESAJLARI YÖNET` Yetkisine Sahip Omalısınız!")

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
.setDescription(`Bundan Sonra **sa** Yazıldığında **as** Diye Cevap Vereceğim.`)
.setColor(`GREEN`)
)
}

else if(Bdgo === "kapat") {
  
db.set(`sa-as_${message.guild.id}`, `kapali`);
message.channel.send(
new Discord.MessageEmbed()
.setTitle(`Başarılı`)
.setDescription(`Bundan Sonra **sa** Yazıldığında **as** Diye Cevap Vermeyeceğim.`)
.setColor(`GREEN`)
)
}

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [`saas`]
  };
  
  exports.help = {
    name: `sa-as`
  };