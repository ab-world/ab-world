import { META } from '@/const/seo';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/'
        },
        sitemap: `${META.url}/sitemap.xml`
    };
}
