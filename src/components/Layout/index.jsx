import styles from 'src/components/Layout/index.module.scss';
import Link from 'next/link';

export function Layout(props) {
    const title = props.title;

    return (
        <div className={styles.container}>
            <aside>
                <div className={styles.header}>
                    <h1>論文管理</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <span className={styles.under_line}>
                                <Link href={'/'}>HOME</Link>
                            </span>
                        </li>
                        <li>
                            <span className={styles.under_line}>
                                <Link href={''}>論文一覧</Link>
                            </span>
                        </li>
                        <li>
                            <span className={styles.under_line}>
                                <Link href={''}>論文管理</Link>
                            </span>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className={styles.main}>
                <h1>{title}</h1>
                <div className={styles.content}>{props.children}</div>
            </div>
        </div>
    );
}
