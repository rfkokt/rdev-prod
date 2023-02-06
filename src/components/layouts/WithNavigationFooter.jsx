import Footer from 'src/components/Footer';
import Navigation from 'src/components/Navigation';
import Header from "src/contents/index/Header";

function WithNavigationFooter({children}) {
    return (
        <>
            <Navigation/>
            <main>
                <Header/>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default WithNavigationFooter;
