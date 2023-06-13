import { useRive } from '@rive-app/react-canvas';

import Animation from '../rive/temp-animation.riv';

const RiveAnimation = () => {
  const { rive, RiveComponent } = useRive({
    src: Animation,
    autoplay: true,
  });

  return (
    <div className='relative shadow-2xl'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 1250 703'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-auto'
      />
      <div className='absolute top-0 left-0 w-full h-full'>
        <RiveComponent role='img' aria-label='Animation' />
      </div>
    </div>
  );
};

export default RiveAnimation;
