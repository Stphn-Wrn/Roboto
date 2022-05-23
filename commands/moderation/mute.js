const ms = require('ms');

module.exports = {
  name: 'mute',
  category: 'moderation',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'mute [@member] [duration] [reason]',
  examples: ['mute @member 2 minutes/seconds/days raison.'],
  description: 'Mute un membre temporairement avec une raison. L',
   async run(client, message, args) { 
      if(!args[0]) return message.reply('Spécifier un membre à mute.');
      if(!args[1] || !args[2]) return message.reply('Spécifier une durée pour votre mute.');
      if(!args[3]) return message.reply('Spécifier une raison à votre mute.');
      
      const target = message.mentions.members.find(m => m.id);
      const duration = args.slice(1, 3).join(' ');
      const convertedTime = ms(duration);
      const reason = args.slice(3).join(' ');

      if(!target.moderatable) return message.reply('Ce membre ne peut pas être mute.');
      if(!convertedTime) return interaction.reply('Spécifiez une durée valable.');
      
      target.timeout(convertedTime, reason);
      message.channel.send(`${target} est mute pour ${duration} car ${reason}.`)
   },
  options: [
    {
      name: 'target',
      description: 'L\'utilisateur à mute temporairement.',
      type: 'USER',
      required: true,
    },
    {
      name: 'duration',
      description: 'La durée du mute.',
      type: 'STRING',
      required: true,
    },
    {
      name: 'reason',
      description: 'La raison du mute.',
      type: 'STRING',
      required: true,
    },
  ],
  async runInteraction (client, interaction) { 
      const target = interaction.options.getMember('target');
      const reason = interaction.options.getString('reason');
      const duration = interaction.options.getString('duration')
      const convertedTime = ms(duration);
      
      if(!target.moderatable) return interaction.reply('Ce membre ne peut pas être mute temporairement.');
      if(!convertedTime) return interaction.reply('Spécifiez une durée valable.');

      target.timeout(convertedTime, reason);
      interaction.reply(`${target} est mute pour ${duration} car ${reason}.`)

  },
};