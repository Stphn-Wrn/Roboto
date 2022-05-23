const Canvas = require('canvas')
const { MessageAttachment } = require('discord.js')

module.exports = {
  name: 'guildMemberRemove',
  once: false,
  async execute(client, member) {
    const fetchGuild = await client.getGuild(member.guild);
    let canvas = Canvas.createCanvas(1024, 500);

    ctx = canvas.getContext('2d');
    let background = await Canvas.loadImage('./src/img/rhayko.jpg');
    ctx.drawImage(background, 0, 0, 1024, 500);

    // Taille font - Style de la font
    ctx.font = "42px Impact";

    // Couleur de la font
    ctx.fillStyle = "#ffffff";
    // Alignement du text
    ctx.textAlign = "center";
    ctx.fillText(member.user.tag.toUpperCase() + ' est parti(e)', 512, 410);
    ctx.beginPath();
    ctx.arc(512, 166, 119, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    let avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        format: "png",
        size: 1024
    }));
    ctx.drawImage(avatar, 393, 47, 238, 238);
    
    let attachment = new MessageAttachment(canvas.toBuffer(), "welcome.png");

    const logChannel = client.channels.cache.get(fetchGuild.logChannel)
    logChannel.send({ files: [attachment] });
  },

  
};