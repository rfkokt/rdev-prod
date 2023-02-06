import clsx from 'clsx';
import Link from 'next/link';
import Image from "next/image";
import {m, useAnimationControls} from "framer-motion";

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

                    <h1 className={clsx('py-12 text-center')}>
                        <Image
                            className={clsx('w-full md:w-full')}
                            alt="Wave Hands Gesture"
                            src="/assets/emojis/detective.png"
                            width={50}
                            height={50}
                            onLoadingComplete={() => {
                                controls.start({
                                    opacity: 1,
                                    y: 0,
                                    rotate: 0,
                                });
                            }}
                            priority
                        />
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
