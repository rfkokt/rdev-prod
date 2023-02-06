import clsx from "clsx";
import RepoApps from "src/contents/index/RepoApps";

function IndexContents() {
    return (
            <div className={clsx( 'lg:-mt-12 lg:mb-24')}>
                <RepoApps />
            </div>
    )
}

export default IndexContents;