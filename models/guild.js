const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
  id: String,
  prefix: { 'type': String, 'default': '!' },
  logChannel: { 'type': String, 'default': '' }, // Info du channel à changer pour les logs
  socialChannel: { 'type': String, 'default': '' }, // Info du channel à changer pour le channel réseaux sociaux
  rulesChannel: { 'type': String, 'default': '' }, // Info du channel à changer pour le channel réglement
})

module.exports = mongoose.model('Guild', guildSchema);