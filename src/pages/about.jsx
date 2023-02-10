import Page from "../contents-layout/Page";
import AboutContent from "../contents/about";

function About() {
    return (
        <Page
            frontMatter={{
                title: "About",
                caption: 'a passionate front-end developer',
                desc: 'Based in Indonesia!',
            }}
        >
            <AboutContent/>
        </Page>
    )
}

export default About