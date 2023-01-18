import { Layout } from 'src/components/Layout';
import { TablePage } from 'src/components/TablePage';

export async function getServerSideProps() {
    const url = 'https://7fdecq.deta.dev/get';
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}

export default function Thesis(props) {
    const title = '論文一覧';
    const data = props.data;

    return (
        <div>
            <Layout title={title}>
                <TablePage data={data} />
            </Layout>
        </div>
    );
}
