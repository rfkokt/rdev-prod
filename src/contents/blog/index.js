import clsx from "clsx";
import {m} from 'framer-motion'
import {Tab} from "@headlessui/react";
import dataBlog from "../index/BlogThread/data.json";
import CardBlog from "../index/Cards/CardBlog";
import {useState} from "react";

const animation = {
    hide: {x: -32, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
    },
};

function BlogContent() {
    const [lenghtData, setLenghtData] = useState(4)
    const Tabs = ['Programming', 'Tools', 'Motivation']

    return (
        <div className={clsx('content-wrapper')}>
            <Tab.Group>
                <m.div
                    initial={animation.hide}
                    animate={animation.show}
                    transition={{delay: 0.1}}
                    className={clsx('flex justify-center mb-14')}>
                    <Tab.List className={clsx('w-1/2 flex space-x-1 rounded-xl p-1')}>
                        {Tabs.map((item, i) => (
                            <Tab
                                key={i}
                                className={({selected}) =>
                                    clsx(
                                        'w-full py-2.5 text-sm leading-5',
                                        'focus:outline-none focus:ring-0',
                                        selected
                                            ? [
                                                'transition-all ease-in duration-100',
                                                'text-slate-700 font-black',
                                                'dark:text-slate-200',
                                                'border-b-2 border-0',
                                                'dark:border-rdark dark:border-b-slate-200',
                                                'border-white border-b-slate-700',
                                            ] : [
                                                'text-slate-700',
                                                'dark:text-slate-200',
                                            ]
                                    )
                                }
                            >
                                {item}
                            </Tab>
                        ))}
                    </Tab.List>
                </m.div>
                <Tab.Panels className="mt-2">
                    {Tabs.map((item, i) => (
                        <Tab.Panel key={i} className="rounded-xl p-3">
                            <div
                                className={clsx('lg:columns-2 gap-3')}
                            >
                                {dataBlog.slice(0, lenghtData).map((item, index) => (
                                    <CardBlog href={item.href} title={item.title} username={item.username}
                                              src={item.src}
                                              alt={item.alt} media={item.media} unoptimized={item.unoptimized}
                                              key={index}
                                              duration={index + 1}
                                    />
                                ))}
                            </div>
                            <div
                                onClick={() => {
                                    setLenghtData(lenghtData + 10)
                                }}
                                className={clsx(
                                    'flex justify-center',
                                    'rounded-xl py-2 text-xl ',
                                    ['dark:text-slate-200', 'text-slate-700'],
                                    dataBlog.length > lenghtData && ['cursor-pointer', 'dark:text-rdev-blue-500', 'text-rdev-blue-600'])}>
                                {dataBlog.length > lenghtData ? "Load more..." : "You've reached the end! 👋"}
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default BlogContent