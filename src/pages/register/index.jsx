import styles from 'src/pages/register/index.module.scss';
import { Layout } from 'src/components/Layout';
import { BackButton } from 'src/components/BackButton';

export default function Register() {
    const title = '論文登録';

    function checkFormat(data) {
        if (data.publish_date.length !== 4) {
            alert('YYYYで入力してください');
            return false;
        }
        if (data.page[0] !== 'p') {
            alert('ページ(p.○-○)で入力してください');
            return false;
        }
        return true;
    }

    async function submitHandler(e) {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            language: e.target.language.value,
            publish_date: e.target.publishDate.value,
            url: e.target.url.value,
            is_read: e.target.isRead.value,
            magazine: e.target.magazine.value,
            authors: e.target.authors.value.split(','),
            page: e.target.page.value,
        };

        const isSendable = checkFormat(data);

        if (isSendable) {
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
            e.target.isRead.value = 0;
            e.target.magazine.value = '';
            e.target.authors.value = '';
            e.target.page.value = '';
        } else {
            return
        }
    }

    return (
        <div>
            <Layout title={title}>
                <div className={styles.container}>
                    <form onSubmit={submitHandler}>
                        <div className={styles.details}>
                            <label htmlFor="title">タイトル</label>
                            <input type="text" name="title" id="title" />
                        </div>
                        <div className={styles.details}>
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
                        <div className={styles.details}>
                            <label htmlFor="publish-date">発行年月</label>
                            <input
                                type="text"
                                name="publish-date"
                                id="publishDate"
                            />
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="url">URL</label>
                            <input type="text" name="url" />
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="page">ページ(p.○-○)</label>
                            <input type="text" name="page" id="page" />
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="">既読</label>
                            <div>
                                <input
                                    type="radio"
                                    name="isRead"
                                    id="isRead"
                                    value={0}
                                    defaultChecked
                                />
                                <label htmlFor="">未読</label>
                                <input
                                    type="radio"
                                    name="isRead"
                                    id="isRead"
                                    value={1}
                                />
                                <label htmlFor="isRead">既読</label>
                            </div>
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="magazine">書誌</label>
                            <input type="text" name="magazine" id="magazine" />
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="authors">著者</label>
                            <input type="text" name="authors" id="authors" />
                        </div>
                        <div className={styles.submit}>
                            <input
                                type="submit"
                                value="登録"
                                className={styles.button}
                            />
                        </div>
                        <BackButton />
                    </form>
                </div>
            </Layout>
        </div>
    );
}
