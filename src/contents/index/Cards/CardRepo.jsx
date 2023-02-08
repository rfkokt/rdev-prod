import clsx from 'clsx';
import moment from 'moment'
import {CalendarIcon} from 'src/components/Icons';
import Link from "next/link";

function CardRepo({
                   title, description, date, tag1, tag2, link
               }) {
    return (<Link
        href={link}
        target={"_blank"}
        className={clsx(' w-full border p-6', 'lg:max-w-[360px]', 'min-h-full', ['rounded-xl '], ['text-sm'], ['border-divider-light bg-white', 'dark:border-divider-dark dark:bg-rdark',])}
        role="presentation"
    >
        <div
            className={clsx(['mb-1'], ['text-lg font-bold'], ['text-slate-700', 'dark:text-slate-300'])}
        >
            {title}
        </div>
        <div
            className={clsx(['mb-4'], ['text-slate-600', 'dark:text-slate-400'])}
        >
            {description}
        </div>
        <div
            className={clsx('flex', ['mb-6 gap-2'], ['text-xs font-bold'],)}
        >
            {tag1 && (

                <div
                    className={clsx(
                        ['rounded-full'],
                        ['px-2 py-0.5'],
                        [
                            'bg-blue-100 text-blue-700',
                            'dark:bg-blue-500/20 dark:text-blue-300',
                        ],
                        'flex gap-1 items-center'
                    )}
                >
                    <span
                        className={clsx(["relative inline-flex rounded-full h-3 w-3"],
                            tag1 === "JavaScript" && ['bg-[#f1e05a]'],
                            tag1 === "TypeScript" && ['bg-[#3178c6]'],
                            tag1 === "Vue" && ['bg-[#41b883]'],
                            tag1 === "HTML" && ['bg-[#e34c26]'],
                            tag1 === "CSS" && ['bg-[#563d7c]']
                        )}/>
                    {tag1}
                </div>)}
            {tag2 && (

                <div
                    className={clsx(['rounded-full'], ['px-2 py-0.5'], ['bg-yellow-100 text-yellow-700', 'dark:bg-yellow-500/20 dark:text-yellow-300',])}
                >
                    {tag2}
                </div>)}
        </div>
        <div
            className={clsx('flex items-center', ['gap-1 '], ['text-xs font-medium'],)}
        >
            <CalendarIcon
                className={clsx('h-4 w-4', ['-mt-1'], ['text-slate-400', 'dark:text-slate-600'])}
            />
            <div
                className={clsx(['text-slate-600', 'dark:text-slate-400'])}
            >
                {moment(date).format("LL")}
            </div>
        </div>
    </Link>);
}

export default CardRepo;
