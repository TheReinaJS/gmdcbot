const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`:x: Yetkin yeterli değil!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setColor('#7289DA').setDescription(`<:841392996469309472:844249729020854292> **Kullanıcı ID'si Hatalı Veya Kullanıcı Sunucuda Yasaklı Değil.**`))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setColor('#7289DA').setDescription(`<:mavi_okey:844254276179722242> **İşlem Başarılı.**`))
};

exports.conf = {
    aliases: ["un-ban"]
};

exports.help = { //sharpen
    name: 'unban'
};