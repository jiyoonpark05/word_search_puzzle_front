const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** R3F */
const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

/** next-translate */
const nextTranslate = require("next-translate-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStricMode: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://localhost:3030/:path*`,
      },
    ];
  },
};

module.exports = withVanillaExtract(nextTranslate(nextConfig));
