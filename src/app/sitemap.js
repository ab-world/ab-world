import { META } from '@/const/seo';

// 검색 노출 대상 페이지 (lastModified는 실제 수정일을 알 수 없으므로 생략)
const ROUTES = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/recruit', priority: 0.8 },
    { path: '/map', priority: 0.8 },
    { path: '/k-system-erp', priority: 0.8 },
    { path: '/contact', priority: 0.8 }
];

export default function sitemap() {
    return ROUTES.map(({ path, priority }) => ({
        url: `${META.url}${path}`,
        priority
    }));
}
