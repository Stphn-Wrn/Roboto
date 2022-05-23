module.exports = {
  name: 'accept-button',
  async runInteraction(client, interaction) {
    await member.roles.add('950379962886676551');
    await interaction.reply({ content: 'Vous avez accepté les règles. Vous pouvez désormais accéder au serveur.', ephemeral : true});
  },
};