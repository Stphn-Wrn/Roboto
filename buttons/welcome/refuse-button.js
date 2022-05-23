module.exports = {
  name: 'refuse-button',
  async runInteraction(client, interaction) {
    try {
      await interaction.member.send('Tu n\'as pas accepté les règles, tu as été kick.')
    } catch (e) {
      await interaction.reply(`le membre ${interaction.member.displayName} n'a pas accepté les règles. Ce dernier s'est fait kick.`)
    }
    await interaction.member.kick('Il n\'a pas accepté les règles.');
  },
};