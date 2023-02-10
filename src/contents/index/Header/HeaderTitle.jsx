import {m, useAnimationControls} from 'framer-motion';
import clsx from "clsx";
import HeaderCta from "src/contents/index/Header/HeaderCta";
import AnimateEmoji from "../../../components/AnimateEmoji";

const animation = {
    hide: {x: -32, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
    },
};

function HeaderTitle() {
    const controls = useAnimationControls();
    return (
        <div>
            <m.div
                className={clsx(
                    'mb-1 flex items-center gap-1 text-2xl text-slate-600',
                    'md:mb-0 md:gap-2 md:text-4xl',
                    'dark:text-slate-200'
                )}
                initial={animation.hide}
                animate={animation.show}
                transition={{delay: 0.1}}
            >
                hallo!
                <m.div
                    initial={{
                        opacity: 0,
                        y: 16,
                        rotate: 30,
                        transformOrigin: 'right center',
                    }}
                    animate={controls}
                    transition={{
                        type: 'spring',
                        delay: 0.35,
                        bounce: 0.7,
                        duration: 0.7,
                    }}
                >
                    <AnimateEmoji
                        className={clsx('w-7 md:w-10')}
                        alt="Wave Hands Gesture"
                        src="/assets/emojis/waving-hand-light-skin-tone.png"
                        mobile
                        unoptimized={false}
                        onLoadingComplete={() => {
                            controls.start({
                                opacity: 1,
                                y: 0,
                                rotate: 20,
                            });
                        }}
                    />
                </m.div>
            </m.div>
            <span className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <m.span
            className={clsx(
                'mb-4 block text-[2.5rem] font-[1000] leading-none',
                'md:mb-6 md:text-7xl'
            )}
            initial={animation.hide}
            animate={animation.show}
            transition={{delay: 0.2}}
        >
          I&apos;m{' '}
            <strong className={clsx('text-rdev-blue-600', 'dark:text-rdev-blue-500')}>
            Rifki
          </strong>{' '}
            Okta,{' '}
        </m.span>
        <m.h1
            className={clsx(
                'block text-base text-slate-600',
                'md:text-xl',
                'dark:text-slate-400'
            )}
            initial={animation.hide}
            animate={animation.show}
            transition={{delay: 0.3}}
        >
          <span className={clsx('lowercase')}>A</span>{' '}
            <strong
                className={clsx(
                    'font-bold lowercase text-slate-700',
                    'dark:text-slate-300'
                )}
            >
            Front-End Developer
          </strong>{' '}
            who loves intuitive,{' '}
            <span className={clsx('block')}>clean and modern UI design.</span>
        </m.h1>
      </span>
            <div className={clsx('mt-6 md:mt-8')}>
                <HeaderCta/>
            </div>
        </div>
    )
}

export default HeaderTitle