const { default: axios } = require("axios");

const axios = require("axios");
function get() {
    axios.get()
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

module.exports = getPoke;