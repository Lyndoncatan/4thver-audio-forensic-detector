/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
    // Ignore TypeScript errors during build (not recommended for production)
    ignoreBuildErrors: false,
  },
  eslint: {
    // Ignore ESLint errors during build (not recommended for production)
    ignoreDuringBuilds: false,
  },
  // Enable static optimization
  output: "standalone",
  // Optimize images
  images: {
    domains: [],
    unoptimized: true,
  },
  // Webpack configuration for audio processing
  webpack: (config, { isServer }) => {
    // Handle audio files
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

    // Handle Python files (for scripts)
    config.module.rules.push({
      test: /\.py$/,
      use: "raw-loader",
    })

    return config
  },
}

module.exports = nextConfig
