import clsx from "clsx";
import {m} from 'framer-motion'
import {CardEducation, CardExperience} from "./CardAbout";

const animation = {
    hide: {x: -32, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
    },
};

const experience = [
    {
        job: "Frontend Developer",
        startDate: "07/2020",
        endDate: "present",
        url: "https://nashta.co.id/",
        company: "Nashta Global Utama",
        technologies: "HTML, CSS, javascript, ReactJs, Tailwind CSS.",
        list: [
            "Joined Informa Studios (old name) as a junior backend developer, first with back-end expertise in the fullstack development. (alongside research untill deployment)",
            "Develop ACTIONS system for university.",
            "Develop ACTIONS system for elementary school."
        ]
    },
    {
        job: "Frontend Developer",
        startDate: "08/2019",
        endDate: "06/2020",
        url: "https://allbestsistem.com/",
        company: "Allbest Solusi Sistem",
        technologies: "HTML, CSS, javascript, ReactJs, Tailwind CSS.",
        list: [
            "Joined Informa Studios (old name) as a junior backend developer, first with back-end expertise in the fullstack development. (alongside research untill deployment)",
            "Develop ACTIONS system for university.",
            "Develop ACTIONS system for elementary school."
        ]
    }
]

function AboutContent() {
    return (
        <div className={clsx("content-wrapper mdx-contents")}>
            <m.div
                initial={animation.hide}
                animate={animation.show}
                transition={{delay: 0.1}}
            >
                <h1
                    className={clsx(
                        'text-[2rem] font-extrabold leading-tight text-slate-700',
                        'md:text-4xl md:leading-snug',
                        'dark:text-slate-300'
                    )}
                >
                    Hello, I'm Rifki Okta Pratama
                </h1>
            </m.div>
            <m.div
                initial={animation.hide}
                animate={animation.show}
                transition={{delay: 0.2}}
            >
                <p
                    className={clsx(
                        'mt-2 mb-4 text-md text-slate-600 font-extrabold',
                        'md:text-lg lg:max-w-[500px] xl:max-w-[700px]',
                        'dark:text-slate-400'
                    )}
                >
                    An intermediate front-end developer from Indonesia
                </p>
            </m.div>
            <m.div
                initial={animation.hide}
                animate={animation.show}
                transition={{delay: 0.2}}
                className={clsx(
                    'mb-3 block leading-relaxed text-slate-600',
                    'dark:text-slate-400',
                    'mb-12'
                )}
            >
                <div>
                    As a passionate back-end developer, I create amazing websites and web apps to make the internet a
                    better place. I am an open-sourece enthusiast with a magic (artisan) touch inside like <a
                    className={clsx('underline decoration-sky-500')}
                    href="#">Laravel.</a>
                </div>
                <br/>
                <div>

                    I am 24 years old and have been a web developer for as long as I can think. The technologies I work
                    with are JavaScript, HTML, CSS and php with a focus on the frameworks Laravel, Nuxt.js, Tailwind. I
                    use code not only to do my day-to-day job, but also to solve everyday problems I come across.
                </div>
                <br/>
                <div>
                    When I am not writing code I love to spend time at room in Klaten or travelling around the world. I
                    speak four languages: indonesian, javanese, arabic, english (some better than others). Furthermore I
                    enjoy watching movie when I come home after a long day at the office.
                </div>
            </m.div>
            <m.div
                initial={animation.hide}
                animate={animation.show}
                transition={{delay: 0.2}}
                className={clsx('mb-6')}
            >
                <h1
                    className={clsx(
                        'text-[1.3rem] font-extrabold leading-tight text-slate-700',
                        'md:text-2xl md:leading-snug',
                        'dark:text-slate-300',
                        'mb-6'
                    )}
                >
                    Experience
                </h1>
                {experience.map((item, i) => (
                    <CardExperience
                        company={item.company}
                        list={item.list}
                        url={item.url}
                        startDate={item.startDate}
                        endDate={item.endDate}
                        job={item.job}
                        technologies={item.technologies}
                    />
                ))}
            </m.div>
            <m.div
                initial={animation.hide}
                animate={animation.show}
                transition={{delay: 0.2}}
                className={clsx('mb-6')}
            >
                <h1
                    className={clsx(
                        'text-[1.3rem] font-extrabold leading-tight text-slate-700',
                        'md:text-2xl md:leading-snug',
                        'dark:text-slate-300',
                        'mb-6'
                    )}
                >
                    Education
                </h1>
                <CardEducation url="https://gunadarma.ac.id/" campus="Gunadarma University" study="Informatics Engineering" date={"11/2019"}/>
            </m.div>
        </div>
    )
}

export default AboutContent
