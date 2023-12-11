const { getInput } = require('@actions/core');

const username = getInput('username');

console.log(`GitHub Username: ${username}`);
