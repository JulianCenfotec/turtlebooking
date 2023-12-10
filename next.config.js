module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  }
  const path = require('path');

require('dotenv').config({ path: path.resolve(process.cwd(),'.vercel/env.production.local') });

  return nextConfig
}