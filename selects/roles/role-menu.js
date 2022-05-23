module.exports = {
  name: 'roles-menu',
  async runInteraction(client, interaction) {
    await interaction.member.roles.add(interaction.values);
    await interaction.reply({ content: 'Votre/vos rôle(s) à été ajouté.', ephemeral : true});
  },
};