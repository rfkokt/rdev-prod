import SectionTitle from "src/components/sections/SectionTitle";
import clsx from "clsx";
import SectionContent from "src/components/sections/SectionContent";
import CardRepo from "src/contents/index/Cards/CardRepo";
import {getRepo} from "src/helpers/api";
import {useEffect, useState} from "react";
import CardSkeleton from "../Cards/CardSkeleton";

function RepoApps() {
    const [dataRep, setDataRep] = useState([])
    const [isLoading, setIsLoading] = useState({
        firstLoading: true, more: false,
    })
    const isLoadingCard = Array.from(Array(2).keys())
    useEffect(() => {
        getDataRepo(4)
    }, [])
    const getDataRepo = (length) => {
        getRepo().then((res) => {
            if (length) {
                res.length = length
                setDataRep(res)
            }
            setDataRep(res)
            setIsLoading({
                more: false, firstLoading: false
            })
        })
    }
    return (<div>
        <header className={clsx('mb-8')}>
            <SectionTitle
                title="What i'm doing?" caption="Repositories & Activity" description=""/>
        </header>
        <SectionContent>
            <div
                className={clsx('flex flex-wrap items-center justify-center gap-3')}
            >
                {isLoading.firstLoading ? (<>
                    {isLoadingCard.map((i) => (<CardSkeleton key={i}/>))}
                </>) : (<>
                    {dataRep.map((item, index) => (
                        <CardRepo key={index}
                                  duration={index + 1}
                                  title={item?.name} description={item?.description}
                                  tag1={item?.language}
                                  date={item?.created_at}
                                  link={item?.svn_url}
                                  tag2={item.size}
                        />))}
                </>)}
                {isLoading.more && (<>
                    {isLoadingCard.map((i) => (<CardSkeleton key={i}/>))}
                </>)}
                <div onClick={() => {
                    if (dataRep.length === 4) {
                        setIsLoading({
                            ...isLoading, more: true
                        })
                        getDataRepo()
                    }
                }}
                     className={clsx(
                         'rounded-xl py-2 text-xl ',
                         ['dark:text-slate-200', 'text-slate-700'],
                         dataRep.length === 4 && ['cursor-pointer', 'dark:text-rdev-blue-500', 'text-rdev-blue-600'])}>
                    {dataRep.length === 4 ? "Load more..." : "You've reached the end! 👋"}
                </div>
            </div>
        </SectionContent>
    </div>);
}

export default RepoApps
