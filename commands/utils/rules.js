const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { runInteraction } = require('./help');

const buttons = new MessageActionRow()
  .addComponents(
     new MessageButton()
     .setCustomId('accept-button')
     .setLabel('Accepter')
     .setStyle('SUCCESS'),
    
     new MessageButton()
     .setCustomId('refuse-button')
     .setLabel('Refuser')
     .setStyle('DANGER'),

  
  )

  const rulesEmbed = new MessageEmbed()
  .setTitle('Acceptez le règlement pour accéder à l\'intégralité du serveur')
   .setDescription(`Michel`)
   .setFooter({ text: '-Michel !'})
  .setTimestamp()

module.exports = {
    name: 'rules',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'rules',
    examples: ['rules'],
    description: 'La commande rules permet d\'envoyer l\'embed du réglement.',
    async run(client, message, args){ 
      // const fetchGuild = await client.getGuild(message.guild);
      // const rulesChannel = client.channels.cache.get(fetchGuild.rulesChannel)

      await message.channel.send({embeds: [rulesEmbed], components: [buttons]})
     },
     async runInteraction(client, interaction){
        // await interaction.reply({embeds: [rulesEmbed], components: [buttons]})
     }
    
}