exports.run = async client => {
    logger.debug(`Logged in as ${client.user.tag}`);
    logger.debug(`Serving ${client.guilds.size} servers with ${client.users.filter(i => !i.bot).size} users`);
    client.user.setPresence({game: {name: '/help /tournament', type: 0}}).catch(err => logger.error(err));

};
