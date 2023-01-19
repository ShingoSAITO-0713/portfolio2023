import styles from 'src/components/TablePage/index.module.scss';
import Link from 'next/link';

export function TablePage(props) {
    const data = props.data[0];

    return (
        <div className={styles.container}>
            <div className={styles.items_table}>
                <table border={1}>
                    <thead>
                        <tr>
                            <th width={1000}>タイトル</th>
                            <th width={400}>URL</th>
                            <th width={70}>言語</th>
                            <th width={70}>発行年</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            const key = item.key;
                            const title = item.title;
                            const language = item.language;
                            const publishDate = item.publish_date;
                            const url = item.url;

                            return (
                                <tr key={key}>
                                    <td>
                                        <Link href={`/thesis/${key}`}>
                                            {title}
                                        </Link>
                                    </td>
                                    <td>{url}</td>
                                    <td className={styles.text_center}>
                                        {language ? '英語' : '日本語'}
                                    </td>
                                    <td className={styles.text_center}>
                                        {publishDate}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
