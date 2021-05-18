const { MessageEmbed } = require("discord.js");
exports.run = (Bot, Mesaj, Argüman) => {
  const Sayı = Number(Argüman[0]);

  const Hata = new MessageEmbed()
    .setColor("#7289DA")

  const Başarılı = new MessageEmbed()
    .setColor("#7289DA")
  {
    if (!Mesaj.member.hasPermission("MANAGE_MESSAGES")) {
      Hata.setColor("#7289DA")
      Hata.setDescription("<:841392996469309472:844249729020854292> **Malesef Yeterli Yetkiniz Bulunmamakta.**");
      Mesaj.channel.send(Hata).then(msg => msg.delete(5000));
      
    } else {
      if (!Sayı) {
        Hata.setDescription("<:841392996469309472:844249729020854292> **Bir Sayı Belirtiniz.**");
        Mesaj.channel.send(Hata).then(msg => msg.delete(5000));
      } else {
        if (Sayı < 101) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(5000));
          Mesaj.channel.bulkDelete(Sayı);
        }
        if (Sayı > 100 && Sayı < 200) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(5000));
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 100);
          });
        }
        if (Sayı == 200) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(5000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 200 && Sayı < 300) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(5000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 200);
          });
        }
        if (Sayı == 300) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(5000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 300 && Sayı < 400) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(6000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 300);
          });
        }
        if (Sayı == 400) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(7000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 400 && Sayı < 500) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(7000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 400);
          });
        }
        if (Sayı == 500) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(8000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 500 && Sayı < 600) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(8000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 500);
          });
        }
        if (Sayı == 600) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(10000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 600 && Sayı < 700) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(10000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 600);
          });
        }
        if (Sayı == 700) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(12000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 700 && Sayı < 800) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(10000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 700);
          });
        }
        if (Sayı == 800) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(12000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 800 && Sayı < 900) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(11000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 800);
          });
        }
        if (Sayı == 900) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(12000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 900 && Sayı < 1000) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(12000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 900);
          });
        }

        if (Sayı == 1000) {
          Başarılı.setDescription(`<:mavi_okey:844254276179722242> Başarıyla **${Sayı}** Adet Mesaj Silindi.`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(13000));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 1000) {
          Hata.setDescription("<:841392996469309472:844249729020854292> **En fazla 1000 Adet Mesaj Silebilirsiniz.**");
          Mesaj.channel.send(Hata).then(msg => msg.delete(5000));
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Temizle", "sil", "temizle"],
  permLevel: 0
};

exports.help = {
  name: "Sil"
};