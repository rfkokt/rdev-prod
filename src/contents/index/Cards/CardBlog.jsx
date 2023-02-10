import clsx from "clsx";
import Image from "next/image";
import {LinkIcon, MediumIcon, TwitterIcon, YoutubeIcon} from "src/components/Icons";
import Link from "next/link";
import {m} from 'framer-motion'

const animation = {
    hide: {
        x: -16,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
    },
};

function CardBlog({
                      as = 'h2',
                      username,
                      title,
                      src,
                      alt,
                      media,
                      href,
                      unoptimized,
                      duration
                  }) {

    const Heading = as;
    return (
        <m.div
            initial={animation.hide}
            animate={animation.show}
            transition={{delay: duration * 0.1}}
            className={clsx('w-full break-inside-avoid mb-10')}>
            <Link href={href ?? "/"}
                  target="_blank"
                  className={clsx(
                      'text-sm',
                      'border-divider-light bg-white',
                      'dark:border-divider-dark dark:bg-rdark')}
            >
                <div>

                    <div className={clsx(
                        'mb-2 flex items-center gap-2')}>
                        {media === "twitter" ? (
                            <TwitterIcon className={clsx('h-5 w-5')}/>
                        ) : media === "medium" ? (
                            <MediumIcon className={clsx('h-5 w-5')}/>
                        ) : media === "youtube" ? <YoutubeIcon className={clsx('mb-1 h-5 w-5')}/> :
                            <LinkIcon className={clsx('h-5 w-5')}/>}
                        <p className={clsx('mb-1 font-extrabold')}>{username}</p>
                    </div>
                    <Image
                        src={src ?? "/assets/images/default.jpg"}
                        className={clsx('rounded-xl')}
                        alt={alt}
                        width={2048}
                        height={1086}
                        unoptimized={unoptimized}
                    />
                    {title && (
                        <Heading
                            className={clsx(
                                'font-black text-slate-700',
                                'text-xl my-2',
                                'lg:my-4',
                                'dark:text-slate-200'
                            )}
                        >
                            {title}
                        </Heading>
                    )}
                </div>
            </Link>
        </m.div>
    )
}

export default CardBlog
