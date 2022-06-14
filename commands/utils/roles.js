const { MessageActionRow, MessageSelectMenu } = require('discord.js');

const selectMenu = new MessageActionRow()
  .addComponents(
    new MessageSelectMenu()
      .setCustomId('roles-menu')
      .setPlaceholder('Choisir un rôle dans la liste')
      .setMinValues(1)
      .setMaxValues(6)
      .addOptions([
        {
          label: '- CSS',
          value: '',
          emoji: '🔫',
        },
        {
          label: '- CS:GO',
          value: '',
          emoji: '💣',
        },
        {
          label: '- Horror Games',
          value: '',
          emoji: '🔞',
        },
        {
          label: '- Lost Ark',
          value: '',
          emoji: '🏹',
        },
        {
          label: '- Among Us',
          value: '',
          emoji: '🔪',
        },
        {
          label: '- Fall Guys',
          value: '',
          emoji: '👑',
        },
      ])
  )

module.exports = {
  name: 'roles',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'roles',
  examples: ['roles'],
  description: 'Affiche les rôles à choisir.',
  async run(client, message, args) {
    await message.channel.send({ content: 'Choisir un ou plusieurs rôle(s)', components: [selectMenu] })
  },
  async runInteraction(client, interaction) {
    await interaction.reply({ content: 'Choisir un ou plusieurs rôle(s)', components: [selectMenu] })
  }
}