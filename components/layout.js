import Head from 'next/head';
const Layout = ({ children }) => (
    <>
        <Head>
            <title>Todoshka Ruslan</title>
        </Head>

        <main>
            <div>{children}</div>
        </main>
    </>
);

export default Layout;