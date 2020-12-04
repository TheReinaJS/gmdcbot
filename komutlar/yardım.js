const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Daemon** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `+token` **Botun tokenini görürsünüz.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`")
.setThumbnail("https://cdn.discordapp.com/attachments/784405293139623967/784476446009589800/780535841630060554.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Daemon Yardım Menüsü** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» +aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» +sa-as :** Bot sa yazdığınızda cevap verir.
> **» +reklam-engel :** Bot sunucunuzda reklam yapılmasını engeller.
> **» +küfür-engel :** Bot sunucunuzda küfür edilmesini engeller.
> **» +oylama  :** Bot bu komut ile sunucunuzda oylama başlatır.
> **» +kullanıcı-bilgim :** Bot kullanıcı bilginizi gösterir.
> **» +reklam-taraması :** Bot oynuyor kısmında reklam olan kişilileri belirler.
> **» +kanal-kilit :** Bot komutu kullandığınız kanalı kilitler.
> **» +kilit-aç :** Bot komutu kullandığınız kanalı kilitini açar.
> **» +kaçcm :** Bot malafat uzunluğunuzu söyler.
> **» +kralol :** Kral olmanıza yarar.
> **» +sil :** Bot belirttiğiniz miktarda mesaj siler.
> **» +av :** Bot avatarınızı veya etiketlediğiniz kişininkini gösterir.
> **» +afk :** Bot afk olduğunuzu belirtir.
> **» +öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» +ever-here-engel :** Bot sunucunuzda ever-here atılmasını engeller.
> **» +yavaş-mod :** Bot komutu kullandığınız kanalda yavaş mod uygular.
> **» +fal :** Bot falınıza bakar.
> **» +token :** Botun tokenini görürsünüz.
> **» +prefix :** Bot belirlediğiniz prefix ile çalışır NOT:(Yardım Sekmesi Değişmez).
> **» +davet :** Bot davet linklerini gösterir.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :round_pushpin: **Botun Gecikme Süresini Öğrenmek İçin +ping**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**`)


 
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