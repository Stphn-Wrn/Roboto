module.exports = {
  name: 'clear',
  category: 'moderation',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'clear [amount] <@target>',
  examples: ['clear 50', 'clear 50 @target'],
  description: 'Supprimer un nombre de message sur un salon ou en provenance d\'un utilisateur.',
   async run(client, message, args) {
    const amountToDelete = args[0];
    if(isNaN(amountToDelete) || !args[0] > 100 || amountToDelete < 2) return message.reply('Le NOMBRE doit être inférieur à 100 et supérieur à 0');
    const target = message.mentions.users.find(u => u.id);
    await message.delete();
    const messageToDelete = await message.channel.messages.fetch();

    if (target) {
      let i = 0;
      const filteredTargetMessages = [];
      (await messageToDelete).filter(msg => {
        if (msg.author.id == target.id && amountToDelete > i) {
          filteredTargetMessages.push(msg); i++;
        }
      });
      
      await message.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
        message.reply(`${messages.size} de l\'utilisateur ${target} ont été supprimé(s)`);
      });
    } else {
      await message.channel.bulkDelete(amountToDelete, true).then(messages => {
        message.reply(`${messages.size} ont été supprimé(s) sur ce salon`);
      });
    }
    
    },
  options: [
    {
      name: 'message',
      description: 'Nombre de message à supprimer',
      type: 'NUMBER',
      required: true,
    },
    {
      name: 'target',
      description: 'Sélectionner l\'utilisateur pour supprimer ses messages.',
      type: 'USER',
      required: false,
    },
  ],
  async runInteraction (client, interaction) {
    const amountToDelete = interaction.options.getNumber('message');
    if(amountToDelete > 100 || amountToDelete < 2) return interaction.reply('Le NOMBRE doit être inférieur à 100 et supérieur à 0');
    const target = interaction.options.getMember('target');

    const messageToDelete = await interaction.channel.messages.fetch();

    if (target) {
      let i = 0;
      const filteredTargetMessages = [];
      (await messageToDelete).filter(msg => {
        if (msg.author.id == target.id && amountToDelete > i) {
          filteredTargetMessages.push(msg); i++;
        }
      });
      
      await interaction.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
        interaction.reply(`${messages.size} de l\'utilisateur ${target} ont été supprimé(s)`);
      });
    } else {
      await interaction.channel.bulkDelete(amountToDelete, true).then(messages => {
        interaction.reply(`${messages.size} ont été supprimé(s) sur ce salon`);
      });
    }
    
  },
};