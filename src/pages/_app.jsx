import { Analytics } from '@vercel/analytics/react';
import RootLayout from 'src/components/layouts/Root';
import WithNavigationFooter from 'src/components/layouts/WithNavigationFooter.jsx';
import Provider from 'src/providers';


import 'styles/main.css';

function getDefaultLayout(page) {
    return <WithNavigationFooter>{page}</WithNavigationFooter>;
}

function _app({ Component, pageProps }) {
    const getLayout = Component.getLayout ?? getDefaultLayout;

    return (
        <Provider>
            <RootLayout>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {getLayout(<Component {...pageProps} />)}
                <Analytics />
            </RootLayout>
        </Provider>
    );
}

export default _app;
