const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    env:{
      username: 'Kelompok11'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 680,
    defaultCommandTimeout: 3700
  },
});
