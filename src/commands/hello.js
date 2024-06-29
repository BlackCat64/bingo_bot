const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Bot gives a friendly reply!"),
    run: ({interaction}) => {
        interaction.reply(`Hello there, user ${interaction.user}`);
        console.log("hello command successful!")
    },
    devOnly: true
}
