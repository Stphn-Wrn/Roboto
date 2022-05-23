const Logger = require('../../utils/Logger')

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    let guildCount = await client.guilds.fetch();
    let userCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

    Logger.client(`- Prêt à être utiliser sur ${guildCount.size} serveur(s). - ${userCount} utilisateur(s) l'utilise(nt)`);

    client.user.setPresence({ activities: [{ name: 'Visual Studio Code', type: 'PLAYING'}], status: 'dnd'});

      // const devGuild = await client.guilds.cache.get('950378219683581982'); // ID du serveur. 
      // devGuild.commands.set(client.commands.map(cmd => cmd)); // Enregistrer une commande.

      // Slash commands sur serveur = instantanné
      // Slash commands en global = 1h environ
      client.application.commands.set(client.commands.map(cmd => cmd))
  },
};