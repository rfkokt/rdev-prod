import clsx from "clsx";
import RepoApps from "src/contents/index/RepoApps";
import BlogThread from "./BlogThread";
import Header from "./Header";

function IndexContents() {
    return (
        <div>
            <Header/>
            <div className={clsx( 'lg:-mt-12 mb-12 lg:mb-24')}>
                <RepoApps />
            </div>
            <div className={clsx( 'lg:-mt-12 mb-12 lg:mb-24')}>
                <BlogThread />
            </div>
        </div>
    )
}

export default IndexContents;