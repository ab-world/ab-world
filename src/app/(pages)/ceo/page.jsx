// CEO 인사말 페이지
import { getMetadata } from '@/util/seo';
import styles from './page.module.scss';
import Image from 'next/image';

export default function CEO(props) {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.mainSection}>
                    <h1>CEO 인사말</h1>
                    <h2>CEO’s Greetings</h2>

                    <div className={styles.flexView}>
                        <div className={styles.textView}>
                            <p>
                                {`정직할 수 있는 용기와 문제를 해결하는 지혜와 뜻을 이루어가는 정성으로`}
                                <b>가장 좋은 경영 혁신 소프트웨어를 만들어 가겠습니다.</b>
                            </p>

                            <p>{`
                                에이비 홈페이지를 방문해 주신 여러분께 진심으로 감사드립니다.
                                
                                21세기를 맞아 대부분의 기업들의 화두가 ‘e-비즈니스’로 모아져가고 있습니다. 그러나 기존 기업 특히 중소기업들이 ‘e-비즈니스’ 로 전환해 가는데는 많은 어려움이 있습니다. 마치 구도자가 깨달음을 얻기 위해 출가를 했으나 과거의 업보로 인한 인연을 다 끊지 못하여 득도에 어려움이 있는것과 마찬가지 상황으로 비유하고 싶습니다. 저희 ㈜에이비는 바로 그런 기업들의 애로사항을 해결해 주기 위해 태어난 회사 입니다. ‘e-비즈니스’ 기업이 되고싶은 마음은 절실하나 현실적으로 기술적인 어려움과 경제적인 부담, 기타 새로운 체제로의 전환을 시도 할만한 여유가 없는 기업들을 위한 충실한 일꾼으로서 봉사하기 위해 ㈜에이비는 2021년 3월1일 새 출범을 하게 되었습니다. 제가 (주)에이비 설립자 겸 영업대표로 재직하면서 줄곧 지켜온 신조가 ‘정직과 정성’의 두 마디입니다.
                                
                                이 두 가지를 지키기 위해 최선을 다하는 것만이 고객께도 가치있는 일들을 할 수 있고 저희 회사도 발전할 수 있다는 신념을 가지고 21세기 e-비즈니스 기업을 위한 토탈 비즈니스 솔루션들을 가장 경제적이고 알차게 제공해 드리도록 노력해 가고자 합니다. 감사합니다.
                            `}</p>
                        </div>

                        <div className={styles.imgView}>
                            <div className={styles.img}>
                                <Image src="/img/ceo/ceo.jpg" fill priority alt="ceo img" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export const generateMetadata = async ({ params }) => {
    return getMetadata({ asPath: `/ceo` });
};
