const { path } = require('@vuepress/utils')

module.exports = {
    // site config
    port: 6789,
    lang: 'en-US',
    title: 'Hello, VuePress!',
    theme: path.resolve(__dirname, './themes'),
    description: 'This is my first VuePress site',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'git@github.com:taiphan0310/Mastering-Laravel',
        docsRepo: 'git@github.com:taiphan0310/Mastering-Laravel',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,   
        smoothScroll: true,    
        contributors: false,
        lastUpdated : true,
        displayAllHeaders: true,
    },
  }