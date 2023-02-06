import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

import mdxCustomComponents from 'src/components/mdx/custom-components';
import ColorAccentProvider from 'src/providers/ColorAccentProvider';
import FramerMotionProvider from 'src/providers/FramerMotionProvider';

function Provider({ children = null }) {
    return (
        <FramerMotionProvider>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                <ColorAccentProvider defaultScheme="violet">
                    <MDXProvider components={mdxCustomComponents}>{children}</MDXProvider>
                </ColorAccentProvider>
            </ThemeProvider>
        </FramerMotionProvider>
    );
}

export default Provider;
