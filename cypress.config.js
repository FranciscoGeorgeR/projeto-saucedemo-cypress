const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');
module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: "https://www.saucedemo.com/",
      allure: true,
      allureResults: './allure-results',
    },
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
    },
  },
});