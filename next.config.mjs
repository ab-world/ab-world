import { fileURLToPath } from 'url';
import path from 'path';

// 현재 파일 경로
const __filename = fileURLToPath(import.meta.url);

// 현재 디렉토리 경로
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/style')]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '2203',
                pathname: '/**'
            }
        ]
    },
    experimental: {
        optimizeCss: true
    },
    // 구 정적 사이트 주소가 구글 색인에 남아 404로 잡히므로 홈으로 영구 이동
    async redirects() {
        return [{ source: '/index.html', destination: '/', permanent: true }];
    }
};

export default nextConfig;
