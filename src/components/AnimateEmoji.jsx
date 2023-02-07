import Image from "next/image";
import {m, useAnimationControls} from "framer-motion";

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

function AnimateEmoji({src, alt, className, onLoadingComplete, unoptimized,mobile}) {
    return (
        <m.div
            variants={emojiMotion}
        >
            <Image
                className={className}
                alt={alt}
                src={src}
                width={mobile ? 50 : 256}
                height={mobile ? 50 : 256}
                onLoadingComplete={onLoadingComplete}
                unoptimized={unoptimized}
                priority
            />
        </m.div>
    )
}

export default AnimateEmoji