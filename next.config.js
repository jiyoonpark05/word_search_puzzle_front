const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const { isReadonlyKeywordOrPlusOrMinusToken } = require("typescript");
const withVanillaExtract = createVanillaExtractPlugin();

/** R3F */
const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

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

module.exports = withVanillaExtract(nextConfig);
