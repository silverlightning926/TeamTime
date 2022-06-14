const { Client, Intents } = require("discord.js")
const { token, prefix } = require("./config.json")

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS],
})

client.on('ready', () => {
    console.log("The Bot Is Online")
})

client.on('messageCreate', (message) => {
    if(message.author.bot)
        return;
    if(!message.content.charAt(0) == prefix)
        return;
    
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0])
    {
        case 'time':
            message.channel.send("Test Succesful").then(() =>{
                message.react("👍");
            })
            break;
    }
})

client.login(token)