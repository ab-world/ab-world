// 도입문의 페이지
'use client';
import styles from './page.module.scss';
import { useState } from 'react';
import { dispatch } from '@/redux/store';
import { setLoading } from '@/redux/slices/system';
import commonApi from '@/api/commonApi';
import { showErrorNoti, showSuccessNoti } from '@/util/noti';
import { trim } from '@/util/util';
import Modal from '@/component/layout/Modal';

const PRODUCT_OPTION = ['COSMOS', 'K-System ERP', 'Flextudio'];

const SELECT_OPTION = [
    '이전 사용 경험',
    '사용하지는 않았으나 예전부터 알고 있었음',
    '회사 내 추천',
    '지인 추천',
    'IT관련 파트너 추천',
    '영림원 직원(영업, 마케팅 등)',
    '정부지원사업(스마트팩토리 등) 관련 소개 또는 문서',
    '네이버/구글 등 포털에서 "영림원"으로 검색',
    '네이버/구글 등 포털에서 "ERP"으로 검색',
    '네이버/구글 등 포털에서 기타 검색어로 검색',
    '온라인 매체 기사',
    '온라인 배너 광고',
    '유튜브',
    '소셜미디어(페이스북, 린크드인 등)',
    '라디오 광고',
    '지면 광고(신문, 매거진 등)',
    '행사(세미나, CEO포럼, 전시회 등)',
    '전화홍보(Tele-Marketing)',
    '이메일(뉴스레터, eDM 등)',
    '마케팅/영업자료'
];

// 약관보기 모달 내용
const TERMS = {
    privacy: {
        title: '개인정보 수집 활용에 대한 동의 (필수)',
        lines: [
            '1. 개인정보의 수집 및 이용 목적 : 도입문의 상담 서비스',
            '2. 수집 항목 : 회사명, 담당자명, 전화번호, 이메일',
            '3. 보유기간 : 동의 철회시까지(2년마다 재동의)',
            '개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으나, 동의 거부 시 상담서비스 이용에 제한이 있을 수 있습니다.'
        ]
    },
    marketting: {
        title: '마케팅 활용에 대한 동의 (선택)',
        lines: [
            '1. 수집 목적 : 제품 정보, 행사초청, 이벤트, 광고성 정보 제공 및 참여기회를 전화, 문자, 이메일로 안내',
            '2. 수집 항목 : 회사명, 담당자명, 전화번호, 이메일',
            '3. 보유기간 : 동의 철회시까지(2년마다 재동의)',
            '마케팅 활용에 동의하지 않을 권리가 있으나, 동의 거부 시 제품 정보, 행사 정보 등 유익한 정보 수신에 제한이 있을 수 있습니다.'
        ]
    }
};

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

const INIT_DATA = {
    product: '옵션을 선택해주세요.',
    visitDemo: '',
    referralSource: '옵션을 선택해주세요.',
    companyName: '',
    businessKind: '',
    businessSize: '',
    managerName: '',
    contact: '',
    email: '',
    content: '',
    privacy: 0,
    marketting: 0
};

export default function Contact(props) {
    const [formData, setFormData] = useState(INIT_DATA);
    // '' | privacy | marketting
    const [terms, setTerms] = useState('');

    const doSetFormData = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    const onClickSendEmail = async () => {
        if (formData.product == '옵션을 선택해주세요.') return showErrorNoti('문의 제품은 필수입력 항목입니다.');
        if (formData.product == 'COSMOS' && formData.visitDemo == '') return showErrorNoti('방문 데모 여부는 필수입력 항목입니다.');
        if (trim(formData.companyName) == '') return showErrorNoti('회사명은 필수입력 항목입니다.');
        if (trim(formData.businessKind == '')) return showErrorNoti('업종은 필수입력 항목입니다.');
        if (trim(formData.businessSize == '')) return showErrorNoti('기업규모(매출액)은 필수입력 항목입니다.');
        if (trim(formData.managerName == '')) return showErrorNoti('담당자는 필수입력 항목입니다.');
        if (trim(formData.contact == '')) return showErrorNoti('연락처는 필수입력 항목입니다.');
        if (trim(formData.email == '')) return showErrorNoti('이메일은 필수입력 항목입니다.');
        if (!EMAIL_REGEX.test(formData.email)) return showErrorNoti('이메일 형식이 잘못되었습니다.');

        if (formData.privacy == 0) return showErrorNoti('개인정보 수집 및 활용 동의는 필수입력 항목입니다.');

        dispatch(setLoading(true));

        const visitDemo = formData.product == 'COSMOS' ? ` (방문 데모: ${formData.visitDemo})` : '';

        const result = await commonApi
            .postApi('/api/send-email', {
                subject: `[${formData.product}] 도입문의가 접수 되었습니다. `,
                content: `<div style="white-space:pre-wrap">도입문의가 접수 되었습니다.\n\n문의 제품: ${formData.product}${visitDemo}\n\n0. 유입경로: ${formData.referralSource}\n\n1. 회사정보\n  - 회사명: ${formData.companyName}\n  - 업종: ${formData.businessKind}\n  - 기업규모(매출액): ${formData.businessSize}\n  - 담당자: ${formData.managerName}\n  - 연락처: ${formData.contact}\n  - 이메일: ${formData.email}\n\n2. 문의내용\n${formData.content}\n\n3. 개인정보 수집 활용에 대한 동의: Y\n\n4. 마케팅 활용에 대한 동의: ${formData.marketting == 1 ? 'Y' : 'N'}\n\n</div>`
            })
            .finally(() => dispatch(setLoading(false)));

        if (result.code == 0) {
            showSuccessNoti('도입문의가 완료되었습니다.');
            setFormData(INIT_DATA);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}>
                    <h1 className={styles.title}>도입문의</h1>

                    <div className={styles.form}>
                        <label className={styles.field}>
                            <span className={styles.label}>
                                문의 제품 <span>*</span>
                            </span>
                            <select
                                className={formData.product == '옵션을 선택해주세요.' ? styles.placeholder : ''}
                                value={formData.product}
                                onChange={(e) => doSetFormData({ product: e.target.value, visitDemo: '' })}
                            >
                                <option value={'옵션을 선택해주세요.'} disabled>
                                    옵션을 선택해주세요.
                                </option>

                                {PRODUCT_OPTION.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className={styles.field}>
                            <span className={styles.label}>
                                (주)에이비를 어떻게 알고 문의하게 되셨나요? <span>*</span>
                            </span>
                            <select
                                className={formData.referralSource == '옵션을 선택해주세요.' ? styles.placeholder : ''}
                                value={formData.referralSource}
                                onChange={(e) => doSetFormData({ referralSource: e.target.value })}
                            >
                                <option value={'옵션을 선택해주세요.'} disabled>
                                    옵션을 선택해주세요.
                                </option>

                                {SELECT_OPTION.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </label>

                        {formData.product == 'COSMOS' && (
                            <fieldset className={styles.field}>
                                <legend className={styles.label}>
                                    방문 데모 <span>*</span>
                                </legend>
                                <div className={styles.radioView}>
                                    {['희망', '희망 안 함'].map((item) => (
                                        <label key={item}>
                                            <input type="radio" name="visitDemo" value={item} checked={formData.visitDemo == item} onChange={(e) => doSetFormData({ visitDemo: e.target.value })} />
                                            {item}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                        )}

                        <label className={styles.field}>
                            <span className={styles.label}>
                                회사명 <span>*</span>
                            </span>
                            <input type="text" autoComplete="organization" value={formData.companyName} onChange={(e) => doSetFormData({ companyName: e.target.value })} />
                        </label>

                        <label className={styles.field}>
                            <span className={styles.label}>
                                업종 <span>*</span>
                            </span>
                            <input type="text" value={formData.businessKind} onChange={(e) => doSetFormData({ businessKind: e.target.value })} />
                        </label>

                        <label className={styles.field}>
                            <span className={styles.label}>
                                기업규모(매출액) <span>*</span>
                            </span>
                            <input type="text" value={formData.businessSize} onChange={(e) => doSetFormData({ businessSize: e.target.value })} />
                        </label>

                        <label className={styles.field}>
                            <span className={styles.label}>
                                담당자명 <span>*</span>
                            </span>
                            <input type="text" autoComplete="name" value={formData.managerName} onChange={(e) => doSetFormData({ managerName: e.target.value })} />
                        </label>

                        <label className={styles.field}>
                            <span className={styles.label}>
                                연락처 <span>*</span>
                            </span>
                            <input type="tel" autoComplete="tel" placeholder="010-1234-5678" value={formData.contact} onChange={(e) => doSetFormData({ contact: e.target.value })} />
                        </label>

                        <label className={styles.field}>
                            <span className={styles.label}>
                                이메일 <span>*</span>
                            </span>
                            <input type="email" autoComplete="email" spellCheck={false} value={formData.email} onChange={(e) => doSetFormData({ email: e.target.value })} />
                        </label>

                        <label className={`${styles.field} ${styles.full}`}>
                            <span className={styles.label}>문의내용</span>
                            <textarea
                                rows={3}
                                placeholder="회사 소재 지역(ex. 서울/경기도 등) 및 상세 문의사항을 남겨주십시오."
                                value={formData.content}
                                onChange={(e) => doSetFormData({ content: e.target.value })}
                            />
                        </label>

                        <div className={styles.consent}>
                            <label>
                                <input type="checkbox" checked={formData.privacy == 1} onChange={(e) => doSetFormData({ privacy: e.target.checked ? 1 : 0 })} />
                                개인정보 수집 및 이용에 동의합니다. <span>(필수)</span>
                            </label>
                            <button type="button" onClick={() => setTerms('privacy')}>
                                약관보기
                            </button>
                        </div>

                        <div className={styles.consent}>
                            <label>
                                <input type="checkbox" checked={formData.marketting == 1} onChange={(e) => doSetFormData({ marketting: e.target.checked ? 1 : 0 })} />
                                마케팅 활용에 동의합니다. (선택)
                            </label>
                            <button type="button" onClick={() => setTerms('marketting')}>
                                약관보기
                            </button>
                        </div>
                    </div>

                    <div className={styles.btnView}>
                        <button aria-label="Contact" onClick={onClickSendEmail}>
                            문의하기
                        </button>
                    </div>
                </div>
            </main>

            {terms && (
                <Modal open setOpen={() => setTerms('')} childStyle={{ width: 'min(560px, calc(100% - 32px))' }} title={TERMS[terms].title} isBackBlur>
                    <div className={styles.terms}>
                        {TERMS[terms].lines.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </div>
                </Modal>
            )}
        </div>
    );
}
