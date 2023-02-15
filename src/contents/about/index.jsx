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
                    An intermediate front-end developer
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
                    I am a Frontend Developer with more than 4 years of experience. I have a great passion for web
                    application development which allows me to continue learning and improving my skills.
                </div>
                <br/>
                <div>
                    I have a strong knowledge of HTML, CSS, and JavaScript, with a focus on the React.js, Next.js, and
                    Tailwind frameworks. I also have experience building web applications with responsive and
                    user-friendly designs.
                </div>
                <br/>
                <div>
                    In addition, I have experience integrating web applications with APIs and third-party services, as
                    well as testing and debugging web applications to ensure their quality and performance.
                </div>
                <br/>
                <div>
                    I am deeply interested in web technology and always looking for ways to enhance my skills and
                    knowledge in this field. With my broad experience and strong knowledge of ReactJS and NextJS, I
                    believe I can make a significant contribution to any web development project.
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
                <CardEducation url="https://gunadarma.ac.id/" campus="University of Gunadarma"
                               study="Informatics Engineering" date="11/2019"/>
            </m.div>
        </div>
    )
}

export default AboutContent
