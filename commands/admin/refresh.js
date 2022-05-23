const { Guild } = require('../../models/index');

module.exports = {
  name: 'refresh',
  category: 'admin',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: true,
  usage: 'refresh',
  examples: ['refresh'],
  description: 'Refresh les datas',
  async run(client, message, args) {
     await Guild.updateMany({}, 
      { 
       '$set': {
       "rolesMemberChannel" : "",
       "socialChannel": "" ,
       "rulesChannel" : "",
       
      }, upsert: true });
     
     message.reply('Nouvelle(s) donnée(s) ajoutée(s).');
  },
  async runInteraction(client, interaction){
    await Guild.updateMany({}, 
      { 
       '$set': {
        "rolesMemberChannel" : "",
        "socialChannel": "" ,
        "rulesChannel" : "",
        
      }, upsert: true 
    });
    
     interaction.reply('Nouvelle(s) donnée(s) ajoutée(s).');
  },
};