// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'sidsru' // 본인 레포 이름으로 변경

const nextConfig = {
  output: 'export',           // 정적 HTML로 빌드
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,        // GitHub Pages는 이미지 최적화 서버 없음
  },
}

module.exports = nextConfig