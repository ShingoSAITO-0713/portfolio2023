import styles from 'src/components/Report/index.module.scss';

export function Report(props) {
    const date = props.date;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.report}>
                    <h2>{date}</h2>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
