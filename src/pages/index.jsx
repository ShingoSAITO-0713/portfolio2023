import { Layout } from 'src/components/Layout';
import { Report } from 'src/components/Report';
import styles from 'src/pages/index.module.scss';

export default function Home() {
    const title = '更新記録';

    return (
        <div className={styles.container}>
            <Layout title={title}>
                <div className={styles['report-template']}>
                    <Report date={'date'}>
                        <h3>進捗</h3>
                        <ul>
                            <li></li>
                        </ul>
                        <h3>TODO</h3>
                        <ul>
                            <li></li>
                        </ul>
                    </Report>
                </div>
                <Report date={'2023/01/18'}>
                    <h3>進捗</h3>
                    <ul>
                        <li>DB設計</li>
                        <li>DBの作成</li>
                        <li>登録フォームの作成</li>
                        <li>一覧ページの作成</li>
                        <li>APIの作成</li>
                        <li>APIとフロントの紐づけ</li>
                        <li>データの編集機能の作成</li>
                    </ul>
                    <h3>TODO</h3>
                    <ul>
                        <li>削除機能の実装</li>
                        <li>著者,isRead,書誌のDBと追加機能の作成</li>
                        <li>著者,isRead,書誌での検索機能の作成</li>
                    </ul>
                </Report>
                <Report date={'2023/01/11'}>
                    <h3>進捗</h3>
                    <ul>
                        <li>レイアウトの作成</li>
                        <li>更新記録ページの作成</li>
                    </ul>
                    <h3>TODO</h3>
                    <ul>
                        <li>DB設計</li>
                        <li>DBの作成</li>
                        <li>登録フォームの作成</li>
                        <li>一覧ページの作成</li>
                        <li>APIの作成</li>
                        <li>APIとフロントの紐づけ</li>
                    </ul>
                    <h3>メモ</h3>
                    <ul>
                        <li>書誌情報の登録・自動出力</li>
                        <li>論文のワードクラウドの作成</li>
                    </ul>
                </Report>
            </Layout>
        </div>
    );
}
