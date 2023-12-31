module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@assets": ["./src/assets"],
            "@components": ["./src/components"],
            "@hooks": ["./src/hooks"],
            "@screens": ["./src/screens"],
            "@routes": ["./src/routes"],
          },
        },
      ],
    ],
  };
};
