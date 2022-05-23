module.exports = {
  name: 'unban',
  category: 'moderation',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'unban [@member] [duration] [reason]',
  examples: ['unban @member 2 raison'],
  description: 'Bannir un membre temporairement avec une raison.',
   async run(client, message, args) { 
      if(!args[0]) return message.reply('Spécifier un membre à kick.');
      if(isNaN(args[1]) || !args[1] || args[1] > 7 || args[1] < 1) return message.reply('Spécifier une durée pour votre ban **(entre 1 et 7 jours)**');
      if(!args[2]) return message.reply('Spécifier une raison à votre ban.');
      
      const target = message.mentions.members.find(m => m.id);
      const duration = args[1];
      const reason = args.slice(2).join(' ');

      if(!target.bannable) return message.reply('Ce membre ne peut pas être ban temporairement.');

      target.ban({ days: duration, reason: reason});
      message.channel.send(`${target} est banni(e) pour ${duration} jour(s).`)
   },
  options: [
    {
      name: 'target',
      description: 'L\'utilisateur à ban temporairement.',
      type: 'USER',
      required: true,
    },
    {
      name: 'duration',
      description: 'La durée du ban.',
      type: 'NUMBER',
      required: true,
    },
    {
      name: 'reason',
      description: 'La raison du ban.',
      type: 'STRING',
      required: true,
    },
  ],
  async runInteraction (client, interaction) { 
      const target = interaction.options.getMember('target');
      const reason = interaction.options.getString('reason');
      const duration = interaction.options.getNumber('duration')
      if(!target.bannable) return interaction.reply('Ce membre ne peut pas être ban temporairement.');

      target.ban({ days: duration, reason: reason});
      interaction.reply(`${target} est banni(e) pour ${duration} jour(s).`)

  },
};