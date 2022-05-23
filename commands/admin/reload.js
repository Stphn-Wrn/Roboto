const { Guild } = require('../../models/index');

module.exports = {
  name: 'reload',
  category: 'admin',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'reload',
  examples: ['reload'],
  description: 'Relancer le bot.',
  async run(client, message, args) {
    // const devGuild = await client.guilds.cache.get('950378219683581982'); // ID du serveur. 
    // devGuild.commands.set([]);
    await interaction.reply('Le bot est relancé.');
    return process.exit();
  },
  async runInteraction(client, interaction){
    // const devGuild = await client.guilds.cache.get('950378219683581982'); // ID du serveur. 
    // devGuild.commands.set([]);
    await interaction.reply('Le bot est relancé.');
    return process.exit();
  },
};