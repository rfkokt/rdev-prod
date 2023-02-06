import clsx from 'clsx';
import Link from 'next/link';
import Image from "next/image";
import {m, useAnimationControls} from "framer-motion";
import AnimateEmoji from "../components/AnimateEmoji";
const emojiMotion = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1.2,
    },
    tap: {
        scale: 0.8,
    },
};
function Error404Contents() {
    const controls = useAnimationControls();
    return (
        <div
            className={clsx(
                'background-grid flex h-full items-center justify-center'
            )}
        >
            <div
                className={clsx(
                    'content-wrapper text-center text-slate-600',
                    'dark:text-slate-400'
                )}
            >
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
                        className={clsx('pointer-events-none h-full w-full')}
                        alt="Wave Hands Gesture"
                        src="/assets/emojis/detective.png"
                        onLoadingComplete={() => {
                            controls.start({
                                opacity: 1,
                                y: 0,
                                rotate: 0,
                            });
                        }}
                    />
                    <h1 className={clsx('pb-4 text-center')}>
                        <div className={clsx('text-2xl')}> Page Not Found</div>
                    </h1>
                    <Link
                        href="/"
                        className={clsx(
                            'rounded-xl py-2 px-4 text-xl text-rdev-blue-600',
                            'dark:text-rdev-blue-500'
                        )}
                    >
                        back to the right way
                    </Link>
                </m.div>

            </div>
        </div>
    );
}

export default Error404Contents;
