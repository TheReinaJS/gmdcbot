const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setThumbnail("https://cdn.discordapp.com/attachments/784405293139623967/784476446009589800/780535841630060554.gif")
.setDescription(`
▬▬▬▬▬▬[ :closed_lock_with_key: **Yrnex Creative・YouTube Yardım Menüsü** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» +aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» +sa-as :** Bot sa yazdığınızda cevap verir.
> **» +reklam-engel :** Bot sunucunuzda reklam yapılmasını engeller.
> **» +küfür-engel :** Bot sunucunuzda küfür edilmesini engeller.
> **» +oylama  :** Bot bu komut ile sunucunuzda oylama başlatır.
> **» +kullanıcı-bilgim :** Bot kullanıcı bilginizi gösterir.
> **» +reklam-taraması :** Bot oynuyor kısmında reklam olan kişilileri belirler.
> **» +kanal-kilit :** Bot komutu kullandığınız kanalı kilitler.
> **» +kilit-aç :** Bot komutu kullandığınız kanalı kilitini açar.
> **» +sor :** Bota Soru Sorarsınız.
> **» +yetkilerim:** Yetkilerinizi Görürsünüz.
> **» +sil :** Bot belirttiğiniz miktarda mesaj siler.
> **» +av :** Bot avatarınızı veya etiketlediğiniz kişininkini gösterir.
> **» +afk :** Bot afk olduğunuzu belirtir.
> **» +ping :** Botun Gecikme Süresini Görürsünüz.
> **» +şut-çek :** Şut Çekersiniz İşte a.q.
> **» +botbilgi :** Botun Bilgilerini Öğrenirsiniz.
> **» +ever-here-engel :** Bot sunucunuzda ever-here atılmasını engeller.
> **» +slowmode :** Bot komutu kullandığınız kanalda yavaş mod uygular.`)
.setImage('https://media.discordapp.net/attachments/767428424251211796/769168676841848862/standard_1.gif')


 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};