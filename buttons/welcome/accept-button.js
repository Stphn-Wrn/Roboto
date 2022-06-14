module.exports = {
  name: 'accept-button',
  async runInteraction(client, interaction) {
    await interaction.member.roles.add('');
    await interaction.reply({ content: 'Vous avez accepté les règles. Vous pouvez désormais accéder au serveur.', ephemeral : true});
  },
};