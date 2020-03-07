var axios = require('axios').default;
var SlackBot = require('slackbots');

var bot = new SlackBot({
    token: "",
    name: 'Friday'
});

var params = {
    icon_emoji: ':jenkins_ci:'
};

bot.on('start', () => {
    bot.postMessageToChannel('general', 'Monsieur!', params);
});


bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }
    if (data.text.split(' ')[0] != '<@UV0RRUC5A>') {
        return;
    }
    fetchjoke();
});


fetchjoke = () => {
    axios.get('http://api.icndb.com/jokes/random').then(res => {
        const joke = res.data.value.joke + '.   appreciate it!';
        bot.postMessageToChannel('general', joke, params);
    }).catch(err => {
        console.error(err);
    })
};

