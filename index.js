const { Client, Intents, Collection } = require("discord.js");
const Logger = require('./utils/Logger')
const mongoose = require('mongoose');

const dotenv = require("dotenv"); dotenv.config();

const client = new Client({ 
    intents: 
        [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
        ],
    partials: 
        [
        'MESSAGE', 
        'CHANNEL', 
        'REACTION'
        ] 
    });

//  client.commands = new Collection();
//  client.buttons = new Collection();
//  client.selects = new Collection();

['commands', 'buttons', 'selects'].forEach(x => client[x] = new Collection());
['CommandUtils', 'EventUtils', 'ButtonUtils', 'SelectUtils'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });
require('./utils/Functions')(client);

process.on('exit', code => { 
    Logger.client(`Le processus c'est arrêté avec le code : ${code}`)});

process.on('uncaughtException', (err, origin) => { 
    Logger.error(`UNCAUGHT_EXCEPTION : ${err}`, `Origine : ${origin}`)
    console.error(`Origine: ${origin}`)
});


process.on('unhandledRejection', (reason, promise) => { 
    Logger.warn(`UNHANDLED_REJECTION: ${reason}`)
    console.log(promise)
});

process.on('warning', (...args) => Logger.warn(...args));

mongoose.connect(process.env.DATABASE_URI, {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
    }).then(() => { Logger.client('- connecté à la base de données.'); })
    .catch(err => { Logger.error(err); });

client.login(process.env.TOKEN);

