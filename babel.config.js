module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            components: "./src/components",
            screens: "./src/screens",
            styles: "./src/styles",
            src: "./src",
            hooks: "./src/hooks",
            services: "./src/services",
            "@redux": "./src/redux",
            "@assets": "./src/assets",
            "@utils": "./src/utils"
          },
        },
      ],
      'react-native-reanimated/plugin'
    ],
  };
};
