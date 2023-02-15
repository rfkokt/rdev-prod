import clsx from "clsx";

export function CardExperience({company, startDate, endDate, technologies, job, list = [], url}) {
    return (
        <div className={clsx('flex flex-col mb-2')}>
            <div className={clsx('md:flex md:justify-between mb-2')}>
                <div className={clsx('flex gap-2', 'font-extrabold ')}>
                    <p>{job}</p>
                    <span className={clsx('font-normal')}>-</span>
                    <a href={url} target="_blank" className={clsx(
                        'underline decoration-sky-500 cursor-pointer'
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

export function CardEducation({}) {

}

export default {CardExperience, CardEducation}