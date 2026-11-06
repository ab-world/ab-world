export const META = {
    siteName: '(주)에이비',
    title: '(주)에이비 - Above Business Solution',
    description: '(주)에이비는 ERP·WMS 구축, 웹·앱 플랫폼 개발, 비즈니스 컨설팅 및 IT 솔루션을 통해 기업의 디지털 혁신과 효율성 향상을 지원하는 전문 솔루션 기업입니다.',
    keyword: [
        '(주)에이비',
        '에이비',
        'AB',
        '영림원소프트랩',
        '영림원',
        '플렉스튜디오',
        'Flextudio',
        'WMS',
        'WMS 구축',
        'WMS 시스템',
        'ERP',
        'ERP 구축',
        'ERP 시스템',
        'IT 컨설팅',
        '기업 시스템 구축',
        '모바일 ERP',
        '클라우드 ERP'
    ],
    url: 'https://www.abworld.co.kr',
    ogImage: '/img/og_image.png',
    googleVerification: 'sjND_ZxzUAx77WdrbbrYllSgj8ri5dGfHIJYjtzpFj0',
    naverVerification: '5e2654063336ad96337ae07f92cc6f251c306046'
};

// 주소·전화·팩스·이메일은 수집 방지를 위해 canvas로만 노출하므로 여기에 넣지 않음
export const JSON_LD = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${META.url}/#organization`,
            name: META.siteName,
            alternateName: ['에이비', 'Above Business Solution'],
            url: META.url,
            logo: `${META.url}/img/ablogo.png`
        },
        {
            '@type': 'WebSite',
            '@id': `${META.url}/#website`,
            name: META.siteName,
            url: META.url,
            inLanguage: 'ko-KR',
            publisher: { '@id': `${META.url}/#organization` }
        }
    ]
};
