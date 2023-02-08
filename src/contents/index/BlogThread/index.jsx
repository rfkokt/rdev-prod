import SectionTitle from "../../../components/sections/SectionTitle";
import clsx from "clsx";
import SectionContent from "../../../components/sections/SectionContent";
import CardBlog from "../Cards/CardBlog";

function BlogThread() {
    const dataDummy = [
        {
            href: "https://esai.nauv.al/tidak-apa-apa-kita-semua-memang-capek",
            username: "@mhdnauvalazhar",
            title: "Tidak Apa-Apa, Kita Semua Memang Capek",
            src: "/assets/images/current-workspace.jpg",
            alt: "Image for Tidak Apa-Apa, Kita Semua Memang Capek",
            media: "link",
            unoptimized: false
        },
        {
            href: "https://twitter.com/themuslimgaze/status/1622561428694773762",
            username: "@themuslimgaze",
            title: "YouTube Kids? Sudah tahu belum konten-konten edukasi pro LGBTQ+",
            src: "https://pbs.twimg.com/media/FoRtojuacAEUSTG?format=jpg&name=medium",
            alt: "Image for YouTube Kids? Sudah tahu belum konten-konten edukasi pro LGBTQ+",
            media: "twitter",
            unoptimized: true
        },
        {
            href: "https://esai.nauv.al/tidak-apa-apa-kita-semua-memang-capek",
            username: "@mhdnauvalazhar",
            title: "Tidak Apa-Apa, Kita Semua Memang Capek",
            src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1674927705460/140fb5e8-236d-41de-ac60-eed6b4df8317.png?w=1600&h:840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            alt: "Image for Tidak Apa-Apa, Kita Semua Memang Capek",
            media: "link",
            unoptimized: true
        },
        {
            href: "https://esai.nauv.al/tidak-apa-apa-kita-semua-memang-capek",
            username: "@mhdnauvalazhar",
            title: "Tidak Apa-Apa, Kita Semua Memang Capek",
            src: "/assets/images/current-workspace.jpg",
            alt: "Image for Tidak Apa-Apa, Kita Semua Memang Capek",
            media: "link",
            unoptimized: false
        },

    ]
    return (
        <div>
            <header className={clsx('mb-8')}>
                <SectionTitle title="I can't write but i can share" caption="Blog & Thread"
                              description="Share posts that I find interesting"/>
            </header>
            <SectionContent>
                <div
                    className={clsx('lg:columns-2 gap-3')}
                >
                    {dataDummy.map((item, index) => (
                        <CardBlog href={item.href} title={item.title} username={item.username} src={item.src}
                                  alt={item.alt} media={item.media} unoptimized={item.unoptimized}/>
                    ))}
                </div>
            </SectionContent>
        </div>
    )
}

export default BlogThread