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
          value: '950379979898757191',
          emoji: '🔫',
        },
        {
          label: '- CS:GO',
          value: '950379972147679293',
          emoji: '💣',
        },
        {
          label: '- Horror Games',
          value: '950379976719499264',
          emoji: '🔞',
        },
        {
          label: '- Lost Ark',
          value: '950379974840430662',
          emoji: '🏹',
        },
        {
          label: '- Among Us',
          value: '950379978376237086',
          emoji: '🔪',
        },
        {
          label: '- Fall Guys',
          value: '950379971682119770',
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