const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: !!process.env.ANALYZE
});

module.exports = withBundleAnalyzer({
    webpack(
        config,
        {
            dev = process.env.NODE_ENV === 'development',
            isServer = typeof window === 'undefined'
        }
    ) {
        /**
         * !dev ? preact/compat : react, react-dom on build
         * reduce page weight in production by ~10%
         */
        if (!dev && !isServer) {
            Object.assign(
                (config.resolve.alias['@/'] = path.resolve('./')),
                {
                    react: 'preact/compat',
                    'react-dom': 'preact/compat'
                }
            );
        }
        return config;
    },
    sourceMaps: {
        productionBrowserSourceMaps: true
    },
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'faderoom-headless.us',
            'www.faderoom-headless.us',
            'dtmqnbkq3btfh.cloudfront.net',
            'secure.gravatar.com',
            'automattic.com',
            'serve.onegraph.com',
            'onegraph.com',
            'maps.google.com',
            'lh3.googleusercontent.com',
            'maps.gstatic.com',
            'thefaderoom146.booksy.com',
            'dev-3cqt2bq0.auth0.com',
            'scontent-sea1-1.xx.fbcdn.net',
            'd2zdpiztbgorvt.cloudfront.net',
            'platform-lookaside.fbsbx.com',
            'square-postoffice-production.s3.amazonaws.com',
            'rdev-prod.vercel.app',
        ]
    },
    future: {
        webpack5: true,
        strictPostcssConfiguration: true
    },
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US'
    }
});

console.log(
    'next.config.js',
    JSON.stringify(module.exports, null, 2)
);