const { MessageActionRow, MessageButton} = require('discord.js');
const { runInteraction } = require('./help');

const buttons = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId('primary-button')
    .setLabel('Primary')
    .setStyle('PRIMARY'),

    new MessageButton()
    .setCustomId('secondary-button')
    .setLabel('Secondary')
    .setStyle('SECONDARY'),

    new MessageButton()
    .setCustomId('success-button')
    .setLabel('Success')
    .setStyle('SUCCESS'),
    
    new MessageButton()
    .setCustomId('danger-button')
    .setLabel('Danger')
    .setStyle('DANGER'),
    
  )

module.exports = {
    name: 'foo',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'foo',
    examples: ['foo'],
    description: 'foo',
    async run(client, message, args){ 
      const fetchGuild = await client.getGuild(message.guild);
      const socialChannel = client.channels.cache.get(fetchGuild.socialChannel)
      await socialChannel.send({content : 'foo', components: [buttons]})
    },
    async runInteraction(client, interaction){
      await interaction.reply({content : 'Cette commande est uniquement disponible avec le préfix : !', ephemeral: true})
    }
}