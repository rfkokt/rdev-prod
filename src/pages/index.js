import Head from 'src/components/meta/Head';
import { getBaseUrl } from 'src/helpers/url';
import IndexContents from "src/contents/index";


export default function Home() {
  return (
      <>
        <Head
            title="Rifki Okta · Front-End Developer"
            description="An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design."
            ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
            overrideTitle
        />
        <IndexContents/>
      </>
  )
}
