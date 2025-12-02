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
    }
};

export default nextConfig;
