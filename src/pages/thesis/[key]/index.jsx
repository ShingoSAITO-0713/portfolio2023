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

    async function buttonHandler(e) {
        e.preventDefault;
        const btnId = e.target.id;

        if (btnId === 'edit') {
            location.href = `/thesis/${key}/edit`;
        } else {
            const url = `https://7fdecq.deta.dev/delete/${key}`;

            const res = await fetch(url, { method: 'DELETE' });
            const result = await res.json();

            alert(`${key}を削除しました`);
            location.href = '/thesis';
        }

        return;
    }

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
                                {details.language ? (
                                    <Link href={'/thesis/filter/en'}>英語</Link>
                                ) : (
                                    <Link href={'/thesis/filter/ja'}>
                                        日本語
                                    </Link>
                                )}
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
                            {details.is_read != null ? (
                                <li>
                                    <span>既読:</span>{' '}
                                    {details.is_read ? (
                                        <Link href={'/thesis/filter/read'}>
                                            既読
                                        </Link>
                                    ) : (
                                        <Link href={'/thesis/filter/unread'}>
                                            未読
                                        </Link>
                                    )}
                                </li>
                            ) : null}
                            <li>
                                <span>キーワード:</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.controller}>
                        <div>
                            <input
                                type="button"
                                value="編集"
                                id="edit"
                                name="btn"
                                onClick={buttonHandler}
                            />
                        </div>
                        <div>
                            <input
                                type="button"
                                value="削除"
                                id="delete"
                                name="btn"
                                onClick={buttonHandler}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
