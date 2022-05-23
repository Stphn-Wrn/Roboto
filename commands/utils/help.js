const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');


const contextDescription = {
  userInfos: 'Renvoie des informations sur l\'utilisateur.'
}


module.exports = {
  name: 'help',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'help <command>',
  examples: ['help', 'help ping', 'help ...'],
  description: 'Affiche la liste de commande filtrée par catégorie.',
  async run(client, message, args, guildSettings) {
    const prefix = guildSettings.prefix;
    
    if (!args.length) {
      const noArgsEmbed = new MessageEmbed()
        .setColor('#b40f0f')
        .addField('Liste des commandes', `Liste de toutes les catégories et leurs commandes.\nPour plus d'informations sur une commande, tapez \`${prefix}help <command>\``)

      for (const category of commandFolder) {
        noArgsEmbed.addField(
          `${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
          `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
        )
      }

      return message.channel.send({ embeds: [noArgsEmbed] });
    }

    const cmd = client.commands.get(args[0]);
    if (!cmd) return message.reply('Cette commande n\'existe pas.');

    return message.channel.send(`
\`\`\`makefile
[Help: Commande -> ${cmd.name}] ${cmd.ownerOnly ? '/!\\ Pour les admins du bot uniquement /!\\' : ''}

${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}

Permissions: ${cmd.permissions.join(', ')}
Utilisation: ${prefix}${cmd.usage}
Exemple: ${prefix}${cmd.examples.join(` | ${prefix}`)}

---

${prefix} = préfix utilisé pour le bot (/commands sont aussi disponibles)
{} = sous-commande(s) disponible(s) | [] = option(s) obligatoire(s) | <> = option(s) optionnel(s)
Ne pas inclure ces caractères -> {}, [], <> dans vos commandes. 
\`\`\``)},

  options: [
    {
      name: 'commande',
      description: 'Tapez le nom de votre commande',
      type: 'STRING',
      required: false,
    },
  ],
  async runInteraction(client, interaction, guildSettings) {
    const prefix = guildSettings.prefix;
    const cmdName = interaction.options.getString('commande');

    if (!cmdName) {
      const noArgsEmbed = new MessageEmbed()
        .setColor('#b40f0f')
        .addField('Liste des commandes', `Liste de toutes les catégories et leurs commandes.\nPour plus d'informations sur une commande, tapez \`${prefix}help <command>\``)

      for (const category of commandFolder) {
        noArgsEmbed.addField(
          `${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
          `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
        )
      }

      return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true });
    }

    const cmd = client.commands.get(cmdName);
    if (!cmd) return interaction.reply({ content: 'Cette commande n\'existe pas.', ephemeral: true });

    return interaction.reply({ content : `
\`\`\`makefile
[Help: Commande -> ${cmd.name}] ${cmd.ownerOnly ? '/!\\ Pour les admins du bot uniquement /!\\' : ''}

${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}

Permissions: ${cmd.permissions.join(', ')}
Utilisation: ${prefix}${cmd.usage}
Exemple: ${prefix}${cmd.examples.join(` | ${prefix}`)}

---

${prefix} = préfix utilisé pour le bot (/commands sont aussi disponibles)
{} = sous-commande(s) disponible(s) | [] = option(s) obligatoire(s) | <> = option(s) optionnel(s)
Ne pas inclure ces caractères -> {}, [], <> dans vos commandes. 
\`\`\``, ephemeral: true})

  }
}