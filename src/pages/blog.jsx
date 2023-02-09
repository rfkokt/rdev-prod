import Page from "../contents-layout/Page";
import BlogContent from 'src/contents/blog'

function Blog() {
    return (
        <Page
            frontMatter={{
                title: "Blog & Thread",
                caption:'I can\'t write but i can share',
                desc: 'Share posts that I find interesting',
            }}
        >
            <BlogContent/>
        </Page>
    )
}

export default Blog