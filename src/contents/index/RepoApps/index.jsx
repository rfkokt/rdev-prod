import SectionTitle from "src/components/sections/SectionTitle";
import clsx from "clsx";
import SectionContent from "src/components/sections/SectionContent";
import CardRepo from "src/contents/index/Cards/CardRepo";
import {getRepo} from "src/helpers/api";
import {useEffect, useState} from "react";
import Link from "next/link";
import CardSkeleton from "../Cards/CardSkeleton";

function RepoApps() {
    const [dataRep, setDataRep] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getRepo().then((res) => {
            res.length = 4
            setDataRep(res)
            setIsLoading(false)
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
                    {isLoading ? (
                        <>
                            <CardSkeleton/>
                            <CardSkeleton/>
                        </>
                    ) : (
                        <>
                            {dataRep.map((item, index) => (
                                <CardRepo key={index} title={item?.name} description={item?.description}
                                          tag1={item?.language}
                                          date={item?.created_at}
                                          link={item?.svn_url}
                                          tag2={item.size}
                                />
                            ))}
                        </>
                    )}
                    <Link href={'/work/skills-and-tools'} className={clsx(
                        'rounded-xl py-2 text-xl text-rdev-blue-600',
                        'dark:text-rdev-blue-500'
                    )}>more...</Link>
                </div>
            </SectionContent>
        </div>
    );
}

export default RepoApps
