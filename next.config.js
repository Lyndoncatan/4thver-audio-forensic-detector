/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
<<<<<<< HEAD
  // Remove output: "standalone" for Render deployment
=======
  output: "standalone",
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
  images: {
    domains: [],
    unoptimized: true,
  },
<<<<<<< HEAD
  // Optimize for production
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Handle audio files
=======
  webpack: (config, { isServer }) => {
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|m4a)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/audio/",
          outputPath: "static/audio/",
        },
      },
    })

<<<<<<< HEAD
    // Handle Python files (for scripts)
=======
>>>>>>> 754d16a453ea9f48bb6124628bfeebbe0aa23ed5
    config.module.rules.push({
      test: /\.py$/,
      use: "raw-loader",
    })

    return config
  },
}

module.exports = nextConfig
