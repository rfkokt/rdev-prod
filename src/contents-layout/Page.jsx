import {getPageOgImageUrl} from "../helpers/page";
import Head from "src/components/meta/Head";
import PageHeader from "../components/PageHeader";
import clsx from "clsx";
import SkipNavigation from "../components/navigations/SkipNavigation";

function Page({
                  frontMatter: {title, desc, caption},
                  children,
                  headerImage
              }) {
    const image = getPageOgImageUrl({
        caption,
        title,
        desc,
    });

    return (
        <>
            <Head title={title} description={desc} ogImage={image.default}/>
            <SkipNavigation skipTableOfContents={false}/>
            <PageHeader
                title={title}
                description={desc}
                caption={caption}
                headerImage={headerImage}
            />

            <div className={clsx('scroll-mt-[86px]')} id="main-contents">
                <div
                    className={clsx(
                        'border-divider-light flex justify-center border-t py-6 -mt-16  text-xs',
                        'dark:border-divider-dark'
                    )}
                />
                {children}
            </div>
        </>
    )
}

export default Page