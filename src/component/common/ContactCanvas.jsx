'use client';

import CanvasArea from './CanvasArea';

// 서버 컴포넌트에서 CanvasArea로 문구를 넘기면 HTML(RSC 데이터)에 그대로 실리므로 문구를 여기에 둠
const CONTEXTS = {
    privacyTel: { text: '· Tel : 070-4077-0265', fontSize: 15 },
    privacyEmail: { text: '· Email : support@abworld.co.kr', fontSize: 15 },
    recruitEmail: { text: '인사담당 메일주소 : hr@abworld.co.kr', fontSize: 16 }
};

export default function ContactCanvas({ name, backgrund }) {
    return <CanvasArea contexts={CONTEXTS[name]} backgrund={backgrund} />;
}
