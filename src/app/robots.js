import { META } from '@/const/seo';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/sample']
        },
        sitemap: `${META.url}/sitemap.xml`
    };
}
