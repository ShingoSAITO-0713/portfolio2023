import styles from 'src/components/BackButton/index.module.scss';

export function BackButton() {
    function buttonHandler(e) {
        e.preventDefault;
        history.back();
        return;
    }

    return (
        <div className={styles.container}>
            <input type="button" value="戻る" onClick={buttonHandler} />
        </div>
    );
}
