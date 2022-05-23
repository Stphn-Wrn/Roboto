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
   .setDescription(`✨ - Comportement.\n\n - Restez courtois, poli. Vous pouvez être familier, nous ne vous demandons pas d’écrire comme Molière, nous ne sommes pas à L’Élysée.\n\n - Pas de violence verbale gratuite. Vous pouvez taquiner gentiment sans aller dans l’extrême. Si cela reste dans la bonne humeur et le second degré nous le tolérons. Si le staff ou moi même estimons que cela ne respecte plus la règle, vous risquez un kick ou un ban en fonction de l’humeur de la personne qui s\'occupe de votre cas (en général c’est un ban direct avec moi)\n\n ✨ – Chat écrit/vocal.\n\n  - Ne doit pas être ressemblant/confondu avec celui d’un membre du staff, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.\n\n - Ne doit pas contenir de propos racistes, homophobes, sexistes …sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.\n\n  - Ne doit pas avoir de caractère pornographique, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.\n\n ✨ - Contacter le staff.\n\n - Si pour une quelconque raison, vous voulez contacter un membre du staff (modo ou admin), mentionnez un des <@&951468958295408710> dans le channel <#950379999754588160>`)
   .setFooter({ text: '- Veuillez bien lire ce règlement puis validez pour avoir automatiquement votre rôle et l\'accès à tout les salons ❤️'})
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
      const fetchGuild = await client.getGuild(message.guild);
      const rulesChannel = client.channels.cache.get(fetchGuild.rulesChannel)

      await rulesChannel.send({embeds: [rulesEmbed], components: [buttons]})
     },
     async runInteraction(client, interaction){
      //  await interaction.reply({embeds: [rulesEmbed], components: [buttons]})
     }
    
}