import {
  domAnimation,
  LazyMotion,
  MotionConfig as MotionProvider,
} from 'framer-motion';

function FramerMotionProvider({ children }) {
  return (
    <MotionProvider reducedMotion="user">
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    </MotionProvider>
  );
}

export default FramerMotionProvider;
