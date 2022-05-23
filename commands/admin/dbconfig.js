module.exports = {
  name: 'dbconfig',
  category: 'admin',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'dbconfig [key] <value>',
  examples: ['dbconfig', 'dbconfig prefix ?', 'dbconfig prefix'],
  description: 'Configurer les données de la base de données.',
  async run(client, message, args, guildSettings) {
    // args = !emit guildMemberAdd -> args = ['guildMemberAdd']
    if (args[0] || !args[0].match(/^(prefix|logChannel|socialChannel|rulesChannel)$/))
    return message.reply('Merci d\'entrer une clé valide (`prefix`/ `logChannel`, `socialChannel`, `rulesChannel`)');
    const value = args[1];


    if(args[0] == 'prefix'){
      if (value){
        await client.updateGuild(message.guild, { prefix: value });
        return message.reply({ content: `La nouvelle valeur du préfix est ${value}`})
      }
      message.reply({ content: `Valeur du préfix : ${guildSettings.prefix} ` });
    } 
    else if (args[0] == 'logChannel'){
      if (value){
        await client.updateGuild(message.guild, { logChannel: value });
        return message.reply({ content: `La nouvelle valeur du logChannel est ${value}`})
      }
      message.reply({ content: `Valeur du logChannel : ${guildSettings.logChannel} ` });
    } 
    else if (args[0] == 'socialChannel'){
      if (value){
        await client.updateGuild(message.guild, { socialChannel: value });
        return message.reply({ content: `La nouvelle valeur du socialChannel est ${value}`})
      }
      message.reply({ content: `Valeur du socialChannel : ${guildSettings.socialChannel} ` });
    } 
    else if (args[0] == 'rulesChannel'){
      if (value){
        await client.updateGuild(message.guild, { rulesChannel: value });
        return message.reply({ content: `La nouvelle valeur du rulesChannel est ${value}`})
      }
      message.reply({ content: `Valeur du rulesChannel : ${guildSettings.rulesChannel} ` });
    }
  },
  options: [
    {
      name: 'key',
      description: 'Choisir une clé à modifier/afficher',
      type: 'STRING',
      required: true,
      choices: [
        {
          name: 'prefix',
          value: 'prefix',
        },
        {
          name: 'logChannel',
          value: 'logChannel',
        },
        {
          name: 'socialChannel',
          value: 'socialChannel',
        },
        {
          name: 'rulesChannel',
          value: 'rulesChannel',
        },
      ]
    },
    {
      name: 'value',
      description: 'Choisir la nouvelle valeur.',
      type: 'STRING',
    }
  ],
  async runInteraction(client, interaction, guildSettings) {
    const key = interaction.options.getString('key');
    const value = interaction.options.getString('value');

    if(key == 'prefix'){
      if (value){
        await client.updateGuild(interaction.guild, { prefix: value });
        return interaction.reply({ content: `La nouvelle valeur du préfix est ${value}`})
      }
      interaction.reply({ content: `Valeur du préfix : ${guildSettings.prefix} ` });
    } 
    else if (key == 'logChannel'){
      if (value){
        await client.updateGuild(interaction.guild, { logChannel: value });
        return interaction.reply({ content: `La nouvelle valeur du logChannel est ${value}`})
      }
      interaction.reply({ content: `Valeur du logChannel : ${guildSettings.logChannel} ` });
    } 
    else if (key == 'socialChannel'){
      if (value){
        await client.updateGuild(interaction.guild, { socialChannel: value });
        return interaction.reply({ content: `La nouvelle valeur du socialChannel est ${value}`})
      }
      interaction.reply({ content: `Valeur du socialChannel : ${guildSettings.socialChannel} ` });
    } 
    else if (key == 'rulesChannel'){
      if (value){
        await client.updateGuild(interaction.guild, { rulesChannel: value });
        return interaction.reply({ content: `La nouvelle valeur du rulesChannel est ${value}`})
      }
      interaction.reply({ content: `Valeur du rulesChannel : ${guildSettings.rulesChannel} ` });
    }
  },
};