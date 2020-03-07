const axios = require('axios').default;



fetchjoke = () => {
    axios.get('http://api.icndb.com/jokes/random').then(res => {
        const joke = res.data.value.joke;
        console.log(joke);
        return joke;
    }).catch(err => {
        console.error(err);
    })
};
