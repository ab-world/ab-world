import styles from './Modal.module.scss';
import { IconX } from '@tabler/icons-react';

const Modal = ({ children, open, setOpen = () => {}, style = {}, childStyle = {}, title = '', buttons = [], onClickButton = () => {}, isBackBlur = false }) => {
    return (
        <div className={styles.modalContainer} style={style}>
            <div className={`${styles.modalBackDrop} ${isBackBlur ? styles.isBlur : ''}`} style={isBackBlur ? { backdropFilter: 'blur(4px)' } : {}} onClick={() => setOpen(false)} />

            <div className={styles.modalChild} style={childStyle} onClick={(e) => e.stopPropagation()}>
                <div className={`${styles.modalHeader} ${title ? styles.active : ''}`}>
                    <h2>{title}</h2>

                    <button onClick={() => setOpen(false)}>
                        <IconX />
                    </button>
                </div>

                <div className={styles.modalBody}>{children}</div>

                <div className={`${styles.modalFooter} ${buttons.length ? styles.active : ''}`}>
                    {buttons.map((item, idx) => {
                        return (
                            <button key={idx} onClick={() => onClickButton(item)}>
                                {item}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Modal;
