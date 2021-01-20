const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (args[0] === "aç") {
    db.set(`${message.guild.id}.motion`, true);
    message.channel.send(
      "SharpenBot | **Küfür Engel Sistemi Başarılı Şekilde** `Aktif` **Edildi.** **Bot ban yetkisi Olanların Mesajını Silmeyecektir.**"
    );
    return;
  }          
  if (args[0] === "kapat") {
    db.delete(`${message.guild.id}.motion`);     
    message.channel.send(
      "Sharpen Bot | **Başarılı Şekilde** `Devre Dışı` **Edildi.**"
    );
    return;
  }
  message.channel.send(            //pinkcode
    "Sharpen |  **Lütfen** `aç` **yada** `kapat` **Yazın!**"
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfürengel", "küfür-engel", "küfür"],     //pinkcode
  permLevel: 0
};

exports.help = {
  name: "küfür-engel",
  description: "",
  usage: ""
};

//pinkcode  //sharpen  