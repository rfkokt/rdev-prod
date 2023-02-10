import clsx from "clsx";
import {m} from "framer-motion";
const animation = {
    hide: { x: -32, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
    },
};
function AboutContent(){
    return(
        <div className={clsx("content-wrapper")}>

            <m.div
                initial={animation.hide}
                animate={animation.show}
                transition={{ delay: 0.1 }}
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
                transition={{ delay: 0.2 }}
            >
                <p
                    className={clsx(
                        'mt-4 text-md text-slate-600',
                        'md:mt-6 md:text-lg lg:max-w-[500px] xl:max-w-[700px]',
                        'dark:text-slate-400'
                    )}
                >
                    An intermediate front-end developer from Indonesia
                </p>
            </m.div>
        </div>
    )
}

export default AboutContent