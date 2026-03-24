// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'portfolio' // 본인 레포 이름으로 변경

const nextConfig = {
  output: 'export',

  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig