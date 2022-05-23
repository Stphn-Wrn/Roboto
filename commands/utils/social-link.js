const { MessageActionRow, MessageButton} = require('discord.js');
const { runInteraction } = require('./help');

const buttons = new MessageActionRow()
  .addComponents(
    // new MessageButton()
    // .setCustomId('primary-button')
    // .setLabel('Primary')
    // .setStyle('PRIMARY'),

    // new MessageButton()
    // .setCustomId('secondary-button')
    // .setLabel('Secondary')
    // .setStyle('SECONDARY'),

    // new MessageButton()
    // .setCustomId('success-button')
    // .setLabel('Success')
    // .setStyle('SUCCESS'),
    
    // new MessageButton()
    // .setCustomId('danger-button')
    // .setLabel('Danger')
    // .setStyle('DANGER'),
    
    new MessageButton()
    .setURL('https://twitch.tv/rhaykoza_')
    .setLabel('🟣 Twitch 🟣')
    .setStyle('LINK'),
 
    new MessageButton()
    .setURL('https://www.youtube.com/user/shymreborn')
    .setLabel('🔴 Youtube 🔴')
    .setStyle('LINK'),

    new MessageButton()
    .setURL('https://twitter.com/Rhaykoza')
    .setLabel('🔵 Twitter 🔵')
    .setStyle('LINK'),

    new MessageButton()
    .setURL('https://www.tiktok.com/@yasmine_does_art')
    .setLabel('🎵 Tiktok 🎵')
    .setStyle('LINK'),
    
    new MessageButton()
    .setURL('https://www.instagram.com/yasmine_does_art/')
    .setLabel('📷 Instagram 📷')
    .setStyle('LINK'),
  )

module.exports = {
    name: 'social-link',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'social-link',
    examples: ['social-link'],
    description: 'Affiche les réseaux sociaux.',
    async run(client, message, args){ 
      const fetchGuild = await client.getGuild(message.guild);
      const socialChannel = client.channels.cache.get(fetchGuild.socialChannel)
      await socialChannel.send({content : 'Pour me rejoindre sur les différents réseaux. 💕', components: [buttons]})
    },
    async runInteraction(client, interaction){
      await interaction.reply({content : 'Cette commande est uniquement disponible avec le préfix : !', ephemeral: true})
    }
}