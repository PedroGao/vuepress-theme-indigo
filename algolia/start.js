const algoliasearch = require('algoliasearch');

const client = algoliasearch('76S5YNGFSB', '9b0396d931120d465c7dc371256fcc5f');
const index = client.initIndex('personal_blog');

console.log(index);
