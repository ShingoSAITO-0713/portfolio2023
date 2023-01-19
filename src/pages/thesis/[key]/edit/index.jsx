import styles from 'src/pages/thesis/[key]/edit/index.module.scss';
import { Layout } from 'src/components/Layout';

export async function getServerSideProps({ query }) {
    const key = query.key;
    const url = `https://7fdecq.deta.dev/get/${key}`;

    const res = await fetch(url);
    const details = await res.json();

    return {
        props: {
            details,
            key,
        },
    };
}

function languageCheckBox(language) {
    if (language) {
        return (
            <div>
                <input type="radio" name="language" id="language" value={0} />
                <label htmlFor="language">日本語</label>
                <input
                    type="radio"
                    name="language"
                    id="language"
                    value={1}
                    defaultChecked
                />
                <label htmlFor="language">英語</label>
            </div>
        );
    } else {
        return (
            <div>
                <input
                    type="radio"
                    name="language"
                    id="language"
                    value={0}
                    defaultChecked
                />
                <label htmlFor="language">日本語</label>
                <input type="radio" name="language" id="language" value={1} />
                <label htmlFor="language">英語</label>
            </div>
        );
    }
}

function isReadCheckBox(isRead) {
    if (isRead === null || isRead === 0) {
        return (
            <div>
                <input
                    type="radio"
                    name="isRead"
                    id="isRead"
                    value={0}
                    defaultChecked
                />
                <label htmlFor="isRead">未読</label>
                <input type="radio" name="isRead" id="isRead" value={1} />
                <label htmlFor="isRead">既読</label>
            </div>
        );
    } else {
        return (
            <div>
                <input type="radio" name="isRead" id="isRead" value={0} />
                <label htmlFor="isRead">未読</label>
                <input
                    type="radio"
                    name="isRead"
                    id="isRead"
                    value={1}
                    defaultChecked
                />
                <label htmlFor="isRead">既読</label>
            </div>
        );
    }
}

export default function Edit(props) {
    const title = '編集・追加';
    const details = props.details;

    console.log(details)

    async function submitHandler(e) {
        e.preventDefault();
        const data = {
            key: details.key,
            title: e.target.title.value,
            language: e.target.language.value,
            publish_date: e.target.publishDate.value,
            url: e.target.url.value,
            authors: e.target.authors.value.split(','),
            page: e.target.page.value,
            magazine: e.target.magazine.value,
            is_read: e.target.isRead.value,
        };

        const url = 'https://7fdecq.deta.dev/put';
        const res = await fetch(url, {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
        });

        const result = await res.json();
        const key = result.key;
        alert(`${key}を更新しました`);
        history.back();
    }

    return (
        <div>
            <Layout title={title}>
                <div className={styles.container}>
                    <form onSubmit={submitHandler}>
                        <div className={styles.detail}>
                            <label htmlFor="title">タイトル</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                defaultValue={details.title}
                            />
                        </div>
                        <div className={styles.detail}>
                            <label htmlFor="">言語</label>
                            {languageCheckBox(details.language)}
                        </div>
                        <div className={styles.detail}>
                            <label htmlFor="publish-date">発行年月</label>
                            <input
                                type="text"
                                name="publish-date"
                                id="publishDate"
                                defaultValue={details.publish_date}
                            />
                        </div>
                        <div className={styles.detail}>
                            <label htmlFor="url">URL</label>
                            <input
                                type="text"
                                name="url"
                                defaultValue={details.url}
                            />
                        </div>
                        <div className={styles.detail}>
                            <label htmlFor="authors">
                                著者(複数の場合は，(,)で区切ってください)
                            </label>
                            <input
                                type="text"
                                name="authors"
                                id="authors"
                                defaultValue={details.authors}
                            />
                        </div>
                        <div className={styles.detail}>
                            <label htmlFor="page">ページ(p.○-○)</label>
                            <input
                                type="text"
                                name="page"
                                id="page"
                                defaultValue={details.page}
                            />
                        </div>
                        <div className={styles.detail}>
                            <label htmlFor="magazine">書誌</label>
                            <input
                                type="text"
                                name="magazine"
                                id="magazine"
                                defaultValue={details.magazine}
                            />
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="">既読</label>
                            {isReadCheckBox(details.is_read)}
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
