import clsx from "clsx";
import RepoApps from "src/contents/index/RepoApps";
import BlogThread from "./BlogThread";

function IndexContents() {
    return (
        <div>
            <div className={clsx( 'lg:-mt-12 lg:mb-12')}>
                <RepoApps />
            </div>
            <div className={clsx( 'lg:-mt-12 lg:mb-12')}>
                <BlogThread />
            </div>
        </div>
    )
}

export default IndexContents;