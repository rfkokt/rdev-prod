import clsx from "clsx";

export function CardExperience({company, startDate, endDate, technologies, job, list = [], url}) {
    return (
        <div className={clsx('flex flex-col mb-2')}>
            <div className={clsx('md:flex md:justify-between mb-2')}>
                <div className={clsx('flex gap-2', 'font-extrabold ')}>
                    <p>{job}</p>
                    <span className={clsx('font-normal')}>-</span>
                    <a href={url} target="_blank" className={clsx(
                        'hover:text-rdev-blue-600 decoration-2',
                        'decoration-rdev-blue-500',
                        'hover:dark:text-rdev-blue-500',
                        'underline underline-offset-4',
                        'cursor-pointer'
                    )}>{company}</a>
                </div>
                <div className={clsx('flex gap-2')}>
                    <span>{startDate}</span>
                    <span>-</span>
                    <span>{endDate}</span>
                </div>
            </div>
            <div className={clsx('text-[0.8rem] italic')}>
                <p className={clsx('font-extrabold')}>Technologies: <span className={clsx('font-normal')}>
                       {technologies}
                    </span>
                </p>
            </div>
            <div className={clsx('text-sm')}>
                <ul className={clsx('flex flex-col gap-3')}>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export function CardEducation({url,campus,study,date}) {
    return (
        <div className={clsx('flex flex-col mb-2')}>
            <div className={clsx('md:flex md:justify-between mb-2')}>
                <div className={clsx('flex gap-2', 'font-extrabold ')}>
                    <a href={url} target="_blank" className={clsx(
                        'hover:text-rdev-blue-600 decoration-2',
                        'decoration-rdev-blue-500',
                        'hover:dark:text-rdev-blue-500',
                        'underline underline-offset-4',
                        'cursor-pointer'
                    )}>{campus}</a>
                    <span className={clsx('font-normal')}>-</span>
                    <p>{study}</p>
                </div>
                <div className={clsx('flex gap-2')}>
                    <span>{date}</span>
                </div>
            </div>
            <div className={clsx('text-[0.8rem] italic')}>
                <p className={clsx('font-extrabold')}>Course contents: <span className={clsx('font-normal')}>
                       {"technologies"}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default {CardExperience, CardEducation}