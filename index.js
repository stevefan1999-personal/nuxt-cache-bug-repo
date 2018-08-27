const { Builder, Nuxt } = require('nuxt');
const config = require('./nuxt.config.js')

const nuxt = new Nuxt(config);
new Builder(nuxt).build();
nuxt.listen(3000)