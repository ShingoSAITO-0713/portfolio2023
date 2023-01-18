import styles from 'src/pages/thesis/[key]/index.module.scss';
import { Layout } from 'src/components/Layout';
import Link from 'next/link';

export async function getServerSideProps({ query }) {
    const key = query.key;
    const url = `https://7fdecq.deta.dev/get/${key}`;

    const res = await fetch(url);
    const details = await res.json();

    return {
        props: {
            details,
        },
    };
}

export default function ThesisDetails(props) {
    const title = '論文管理';
    const details = props.details;
    const key = details.key;

    return (
        <div>
            <Layout title={title}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h2>{details.title}</h2>
                    </div>
                    <div className={styles.details}>
                        <h3>詳細</h3>
                        <ul>
                            <li>
                                <span>言語:</span>{' '}
                                {details.language ? '英語' : '日本語'}
                            </li>
                            <li>
                                <span>発行年:</span> {details.publish_date}
                            </li>
                            <li>
                                <span>URL:</span> {details.url}
                            </li>
                            {details.author ? (
                                <li>
                                    <span>著者:</span> {details.authors}
                                </li>
                            ) : null}
                            {details.page ? (
                                <li>
                                    <span>ページ:</span> {details.page}
                                </li>
                            ) : null}
                            {details.magazine ? (
                                <li>
                                    <span>書誌:</span> {details.magazine}
                                </li>
                            ) : null}
                            {details.isRead ? (
                                <li>
                                    <span>既読:</span> {details.isRead}
                                </li>
                            ) : null}
                            <li>
                                <span>キーワード:</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.controller}>
                        <Link href={`/thesis/${key}/edit`} className={styles.link}>
                            編集
                        </Link>
                        <Link href={``} className={styles.link}>
                            削除
                        </Link>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
