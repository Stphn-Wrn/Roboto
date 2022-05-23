const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'userinfos',
  category: 'contextuel',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'Utiliser le menu contextuel de Discord.',
  examples: ['Utiliser le menu contextuel de Discord.'],
  type: 'USER', // Contexte menu
  async runInteraction(client, interaction) {
    const member = await interaction.guild.members.fetch(interaction.targetId);

    const embed = new MessageEmbed()
    .setAuthor({ name: `${member.user.tag}`, iconURL: member.user.bot ? 'https://images.emojiterra.com/twitter/512px/1f916.png' : 'https://images.emojiterra.com/twitter/v13.1/512px/1f9d1.png' })
    .setColor('#8e48f7')
    .setImage(member.user.displayAvatarURL())
    .addFields(
      { name: 'Nom', value: `${member.displayName}`, inline: true },
 
      { name: 'Modérateur', value: `${member.kickable ? '🔴' : '🟢'}`, inline: true },

      { name: 'Bot', value: `${member.user.bot ? '🟢' : '🔴'}`, inline: true }, 

      { name: 'Rôles', value: `${member.roles.cache.map(role => role).join(', ').replace(', @everyone', ' ')}`},

      { name: 'Compte créé le', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f>(<t:${parseInt(member.joinedTimestamp / 1000)}:R>)` },

      { name: 'A rejoint le serveur le', value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f>(<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)` },
      
    )
    interaction.reply({ embeds: [embed], ephemeral: true})
  }
};
