// 도입문의 페이지
'use client';
import styles from './page.module.scss';
import { useState } from 'react';
import { dispatch } from '@/redux/store';
import { setLoading } from '@/redux/slices/system';
import commonApi from '@/api/commonApi';
import { showErrorNoti, showSuccessNoti } from '@/util/noti';
import { trim } from '@/util/util';

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

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

const INIT_DATA = {
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

    const doSetFormData = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    const onClickSendEmail = async () => {
        if (trim(formData.companyName) == '') return showErrorNoti('회사명은 필수입력 항목입니다.');
        if (trim(formData.businessKind == '')) return showErrorNoti('업종은 필수입력 항목입니다.');
        if (trim(formData.businessSize == '')) return showErrorNoti('기업규모(매출액)은 필수입력 항목입니다.');
        if (trim(formData.managerName == '')) return showErrorNoti('담당자는 필수입력 항목입니다.');
        if (trim(formData.contact == '')) return showErrorNoti('연락처는 필수입력 항목입니다.');
        if (trim(formData.email == '')) return showErrorNoti('이메일은 필수입력 항목입니다.');
        if (!EMAIL_REGEX.test(formData.email)) return showErrorNoti('이메일 형식이 잘못되었습니다.');

        if (formData.privacy == 0) return showErrorNoti('개인정보 수집 및 활용 동의는 필수입력 항목입니다.');
        if (formData.marketting == 0) return showErrorNoti('마케팅 활용 동의는 필수입력 항목입니다.');

        dispatch(setLoading(true));

        const result = await commonApi
            .postApi('/api/send-email', {
                subject: '도입문의가 접수 되었습니다. ',
                content: `<div style="white-space:pre-wrap">도입문의가 접수 되었습니다.\n\n0. 유입경로: ${formData.referralSource}\n\n1. 회사정보\n  - 회사명: ${formData.companyName}\n  - 업종: ${formData.businessKind}\n  - 기업규모(매출액): ${formData.businessSize}\n  - 담당자: ${formData.managerName}\n  - 연락처: ${formData.contact}\n  - 이메일: ${formData.email}\n\n2. 문의내용\n${formData.content}\n\n3. 개인정보 수집 활용에 대한 동의: Y\n\n4. 마케팅 활용 동의에 대한 동의: Y\n\n</div>`
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
                    <h2 className={styles.title}>도입문의</h2>

                    <div className={styles.formView}>
                        <div className={styles.row1}>
                            <label>
                                ERP(영림원 K-System)을 어떻게 알고 문의하게 되셨나요? <span>*</span>
                            </label>
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
                        </div>

                        <div className={styles.row2}>
                            <label>
                                회사명 <span>*</span>
                            </label>
                            <input type="text" value={formData.companyName} onChange={(e) => doSetFormData({ companyName: e.target.value })} />
                        </div>

                        <div className={styles.row2}>
                            <label>
                                업종 <span>*</span>
                            </label>
                            <input type="text" value={formData.businessKind} onChange={(e) => doSetFormData({ businessKind: e.target.value })} />
                        </div>

                        <div className={styles.row2}>
                            <label>
                                기업규모(매출액) <span>*</span>
                            </label>
                            <input type="text" value={formData.businessSize} onChange={(e) => doSetFormData({ businessSize: e.target.value })} />
                        </div>

                        <div className={styles.row2}>
                            <label>
                                담당자명 <span>*</span>
                            </label>
                            <input type="" value={formData.managerName} onChange={(e) => doSetFormData({ managerName: e.target.value })} />
                        </div>

                        <div className={styles.row2}>
                            <label>
                                연락처 <span>*</span>
                            </label>
                            <input type="text" value={formData.contact} onChange={(e) => doSetFormData({ contact: e.target.value })} />
                        </div>

                        <div className={styles.row2}>
                            <label>
                                이메일 <span>*</span>
                            </label>
                            <input type="text" value={formData.email} onChange={(e) => doSetFormData({ email: e.target.value })} />
                        </div>

                        <div className={styles.row1}>
                            <label>문의내용</label>
                            <textarea
                                placeholder="회사 소재 지역(ex. 서울/경기도 등) 및 상세 문의사항을 남겨주십시오."
                                value={formData.content}
                                onChange={(e) => doSetFormData({ content: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className={styles.privacyView}>
                        <div className={styles.privacyItem}>
                            <p className={styles.privacyTitle}>
                                개인정보 수집 활용에 대한 동의 <span>(필수)</span>
                            </p>

                            <div className={styles.privacyInfo}>
                                <div>
                                    <b>1. 개인정보의 수집 및 이용 목적</b>
                                    <p>도입문의 상담 서비스</p>
                                </div>

                                <div>
                                    <b>2. 수집 항목</b>
                                    <p>회사명, 담당자명, 전화번호, 이메일</p>
                                </div>

                                <div>
                                    <b>3. 보유기간</b>
                                    <p>동의 철회시까지(2년마다 재동의)</p>
                                </div>

                                <p>개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으나, 동의 거부 시 상담서비스 이용에 제한이 있을 수 있습니다.</p>
                            </div>

                            <div className={styles.privacyFlexView}>
                                <p className={styles.privacyQuestion}>
                                    개인정보 수집 및 활용에 동의하시겠습니까? <span>*</span>
                                </p>

                                <div className={styles.privacyAnswer}>
                                    <div>
                                        <input id="privacy1" type="radio" name="privacy" value={1} checked={formData.privacy == 1} onChange={(e) => doSetFormData({ privacy: e.target.value })} />
                                        <label htmlFor="privacy1">동의함</label>
                                    </div>
                                    <div>
                                        <input id="privacy2" type="radio" name="privacy" value={0} checked={formData.privacy == 0} onChange={(e) => doSetFormData({ privacy: e.target.value })} />
                                        <label htmlFor="privacy2">동의하지 않음</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.privacyItem}>
                            <p className={styles.privacyTitle}>
                                마케팅 활용 동의에 대한 동의 <span>(필수)</span>
                            </p>

                            <div className={styles.privacyInfo}>
                                <div>
                                    <b>1. 수집 목적</b>
                                    <p>제품 정보, 행사초청, 이벤트, 광고성 정보 제공 및 참여기회를 전화, 문자, 이메일로 안내</p>
                                </div>

                                <div>
                                    <b>2. 수집 항목</b>
                                    <p>회사명, 담당자명, 전화번호, 이메일</p>
                                </div>

                                <div>
                                    <b>3. 보유기간</b>
                                    <p>동의 철회시까지(2년마다 재동의)</p>
                                </div>

                                <p>마케팅 활용에 동의하지 않을 권리가 있으나, 동의 거부 시 제품 정보, 행사 정보 등 유익한 정보 수신에 제한이 있을 수 있습니다.</p>
                            </div>

                            <div className={styles.privacyFlexView}>
                                <p className={styles.privacyQuestion}>
                                    마케팅 활용에 동의하시겠습니까? <span>*</span>
                                </p>

                                <div className={styles.privacyAnswer}>
                                    <div>
                                        <input
                                            id="marketting1"
                                            type="radio"
                                            name="marketting"
                                            value={1}
                                            checked={formData.marketting == 1}
                                            onChange={(e) => doSetFormData({ marketting: e.target.value })}
                                        />
                                        <label htmlFor="marketting1">동의함</label>
                                    </div>
                                    <div>
                                        <input
                                            id="marketting2"
                                            type="radio"
                                            name="marketting"
                                            value={0}
                                            checked={formData.marketting == 0}
                                            onChange={(e) => doSetFormData({ marketting: e.target.value })}
                                        />
                                        <label htmlFor="marketting2">동의하지 않음</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.btnView}>
                        <button onClick={onClickSendEmail}>문의하기</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
