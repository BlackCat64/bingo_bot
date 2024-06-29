const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    run: ({interaction}) => {
        const cmd = interaction.options.getSubcommand();

        switch (cmd) {
            case "create":
                let name = interaction.options.get("name").value;
                interaction.reply(`WIP - Name: ${name}`);
                break;
            case "delete":
                break;
            case "list":
                break;
            case "view":
                break;
            default:
                interaction.reply({
                    content: "Command not found.",
                    ephemeral: true
                })
        }
    },

    data: new SlashCommandBuilder()
        .setName("bingo")
        .setDescription("Command group for all bingo-related commandss")
        .addSubcommand((subcommand) => subcommand
            .setName("create")
            .setDescription("Create a new bingo board")
            .addStringOption((option) => option
                .setName("name")
                .setDescription("The name of the new bingo board")
                .setRequired(true)))
        .addSubcommand((subcommand) => subcommand
            .setName("delete")
            .setDescription("Delete a saved bingo board")
            .addStringOption((option) => option
                .setName("name")
                .setDescription("The name of the new bingo board")
                .setRequired(true)))
        .addSubcommand((subcommand) => subcommand
            .setName("view")
            .setDescription("View a saved bingo board")
            .addStringOption((option) => option
                .setName("name")
                .setDescription("The name of the bingo board you want to view")
                .setRequired(true)))
        .addSubcommand((subcommand) => subcommand
            .setName("start")
            .setDescription("Start playing a saved bingo board")
            .addStringOption((option) => option
                .setName("name")
                .setDescription("The name of the saved bingo board you want to play")
                .setRequired(true)))
        .addSubcommand((subcommand) => subcommand
            .setName("end")
            .setDescription("Stop playing a currently running bingo board")
            .addStringOption((option) => option
                .setName("name")
                .setDescription("The name of the currently running bingo board you want to stop playing")
                .setRequired(true)))
}