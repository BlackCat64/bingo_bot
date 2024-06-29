require("dotenv").config();

module.exports = (interaction, commandObj) => {
    if (commandObj.devOnly) {
        if (interaction.member.id !== process.env.DEV_ID) {
            interaction.reply({
                content: "Sorry, this command is for developers only.",
                ephemeral: true
            });
            return true;
        }
    }
}