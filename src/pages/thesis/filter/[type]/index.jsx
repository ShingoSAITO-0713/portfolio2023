import { Layout } from 'src/components/Layout';
import { TablePage } from 'src/components/TablePage';

export async function getServerSideProps({ query }) {
    const type = query.type;
    const url = `https://7fdecq.deta.dev/get/filter/${type}`;

    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            type,
            data,
        },
    };
}

const types = {
    read: '条件: 既読',
    unread: '条件: 未読',
    ja: '条件: 日本語',
    en: '条件: 英語',
};

export default function filterTypePage(props) {
    const type = props.type;
    const title = types[type];
    const data = props.data;

    return (
        <div>
            <Layout title={title}>
                <TablePage data={data} />
            </Layout>
        </div>
    );
}
