module.exports = {
  stories: ['../src/**/stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)

    return config
  }
}
