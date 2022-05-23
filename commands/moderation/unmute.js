const ms = require('ms');

module.exports = {
  name: 'unmute',
  category: 'moderation',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'unmute [@member]',
  examples: ['unmute @member'],
  description: 'Démute un membre.',
   async run(client, message, args) { 
      if(!args[0]) return message.reply('Spécifier un membre à démute.');
  
      const target = message.mentions.members.find(m => m.id);
      
      if(!target.isCommunicationDisabled()) return await message.reply('Ce membre ne peut pas être démute car il n\'est pas mute.');
      
      
      target.timeout(null);
      message.channel.send(`${target} est démute.`)
   },
  options: [
    {
      name: 'target',
      description: 'L\'utilisateur à démute.',
      type: 'USER',
      required: true,
    },
  ],
  async runInteraction (client, interaction) { 
      const target = interaction.options.getMember('target');
      
      
      if(!target.isCommunicationDisabled()) return await interaction.reply('Ce membre ne peut pas être démute car il n\'est pas mute.');
      
      
      target.timeout(null);
      interaction.reply(`${target} est démute.`)

  },
};