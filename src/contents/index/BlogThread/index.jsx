import SectionTitle from "../../../components/sections/SectionTitle";
import clsx from "clsx";
import SectionContent from "../../../components/sections/SectionContent";
import CardBlog from "../Cards/CardBlog";
import dataBlog from "./data.json";

function BlogThread() {
    return (
        <div>
            <header className={clsx('mb-8')}>
                <SectionTitle
                    button={{
                        title: "See more",
                        href: '/blog'
                    }}
                    title="I can't write but i can share" caption="Blog & Thread"
                    description="Share posts that I find interesting"/>
            </header>
            <SectionContent>
                <div
                    className={clsx('lg:columns-2 gap-3')}
                >
                    {dataBlog.slice(0, 4).map((item, index) => (
                        <CardBlog href={item.href} title={item.title} username={item.username} src={item.src}
                                  alt={item.alt} media={item.media} unoptimized={item.unoptimized} key={index}
                                  duration={index + 1}
                        />
                    ))}
                </div>
            </SectionContent>
        </div>
    )
}

export default BlogThread