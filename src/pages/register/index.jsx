import styles from 'src/pages/register/index.module.scss';
import { Layout } from 'src/components/Layout';

export default function Register() {
    const title = '論文登録';

    async function submitHandler(e) {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            language: e.target.language.value,
            publish_date: e.target.publishDate.value,
            url: e.target.url.value,
        };

        const url = 'https://7fdecq.deta.dev/post';
        const res = await fetch(url, {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const result = await res.json();
        const key = result.key;
        alert(`${key}を登録しました`);
        e.target.title.value = '';
        e.target.language.value = 0;
        e.target.publishDate.value = '';
        e.target.url.value = '';
    }

    return (
        <div>
            <Layout title={title}>
                <div className={styles.container}>
                    <form onSubmit={submitHandler}>
                        <div className={styles.title}>
                            <label htmlFor="title">タイトル</label>
                            <input type="text" name="title" id="title" />
                        </div>
                        <div className={styles.language}>
                            <label htmlFor="">言語</label>
                            <div>
                                <input
                                    type="radio"
                                    name="language"
                                    id="language"
                                    value={0}
                                    defaultChecked
                                />
                                <label htmlFor="language">日本語</label>
                                <input
                                    type="radio"
                                    name="language"
                                    id="language"
                                    value={1}
                                />
                                <label htmlFor="language">英語</label>
                            </div>
                        </div>
                        <div className={styles['publish-date']}>
                            <label htmlFor="publish-date">発行年月</label>
                            <input
                                type="text"
                                name="publish-date"
                                id="publishDate"
                            />
                        </div>
                        <div className={styles.url}>
                            <label htmlFor="url">URL</label>
                            <input type="text" name="url" />
                        </div>
                        <div className={styles.submit}>
                            <input
                                type="submit"
                                value="登録"
                                className={styles.button}
                            />
                        </div>
                    </form>
                </div>
            </Layout>
        </div>
    );
}
