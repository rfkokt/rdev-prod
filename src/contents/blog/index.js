import clsx from "clsx";
import {Tab} from "@headlessui/react";

function BlogContent(){
    return(
        <div className={clsx('content-wrapper')}>
            <Tab.Group>
                <Tab.List clasName={clsx('flex space-x-1 rounded-xl bg-blue-900/20 p-1')}>
                    <Tab className={({ selected }) =>
                        clsx(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )
                    }>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default BlogContent