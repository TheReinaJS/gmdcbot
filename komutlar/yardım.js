const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Daemon** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `d!token` **Botun tokenini görürsünüz.** \n> :floppy_disk: **Şuanda kullanılan prefix** `d!`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Daemon Yardım Menüsü** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» d!aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» d!sa-as :** Bot sa yazdığınızda cevap verir.
> **» d!reklam-engel :** Bot sunucunuzda reklam yapılmasını engeller.
> **» d!küfür-engel :** Bot sunucunuzda küfür edilmesini engeller.
> **» d!oylama  :** Bot bu komut ile sunucunuzda oylama başlatır.
> **» d!kullanıcı-bilgim :** Bot kullanıcı bilginizi gösterir.
> **» d!reklam-taraması :** Bot oynuyor kısmında reklam olan kişilileri belirler.
> **» d!kanal-kilit :** Bot komutu kullandığınız kanalı kilitler.
> **» d!kilit-aç :** Bot komutu kullandığınız kanalı kilitini açar.
> **» d!kaçcm :** Bot malafat uzunluğunuzu söyler.
> **» d!kralol :** Kral olmanıza yarar.
> **» d!sil :** Bot belirttiğiniz miktarda mesaj siler.
> **» d!av :** Bot avatarınızı veya etiketlediğiniz kişininkini gösterir.
> **» d!afk :** Bot afk olduğunuzu belirtir.
> **» d!öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» d!ever-here-engel :** Bot sunucunuzda ever-here atılmasını engeller.
> **» d!yavaş-mod :** Bot komutu kullandığınız kanalda yavaş mod uygular.
> **» d!fal :** Bot falınıza bakar.
> **» d!token :** Botun tokenini görürsünüz.
> **» d!prefix :** Bot belirlediğiniz prefix ile çalışır NOT:(Yardım Sekmesi Değişmez).
> **» d!davet :** Bot davet linklerini gösterir.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/57JYtHmJAN)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: d!yardım**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/57JYtHmJAN)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=778974442335240212&scope=bot&permissions=805314622)** **•** **[Uptime Botumuzun Web Sitesi](https://daemon-uptime.glitch.me/)**
`)
 
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