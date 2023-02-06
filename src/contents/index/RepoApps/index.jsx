import SectionTitle from "src/components/sections/SectionTitle";
import clsx from "clsx";
import SectionContent from "src/components/sections/SectionContent";
import TodoItem from "src/contents/index/Cards/TodoItem";
import {getRepo} from "src/helpers/api";
import {useEffect, useState} from "react";
import Link from "next/link";

function RepoApps() {
    const [dataRep, setDataRep] = useState([])
    useEffect(() => {
        // @ts-ignore
        getRepo().then((res) => {
            // @ts-ignore
            res.length = 4
            setDataRep(res)
        })
    }, [])
    return (
        <div>
            <header className={clsx('mb-8')}>
                <SectionTitle title="What i'm doing?" caption="Repositories & Activity" description=""/>
            </header>
            <SectionContent>
                <div
                    className={clsx('flex flex-wrap gap-3')}
                >
                    {dataRep.map((item, index) => (
                        <TodoItem key={index} title={item?.name} description={item?.description} tag1={item?.language}
                                  date={item?.created_at} link={item?.svn_url}/>
                    ))}
                    <Link href={'/work/skills-and-tools'} className={clsx(
                        'rounded-xl py-2 text-xl text-rdev-blue-600',
                        'dark:text-rdev-blue-500'
                    )}>more...</Link>
                </div>
            </SectionContent>
        </div>
    )
}

export default RepoApps