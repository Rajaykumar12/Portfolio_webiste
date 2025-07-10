import { Player } from 'lottie-react';

function AnimationComponent() {
  return (
    <Player
      autoplay
      loop
      src="path/to/your/animation.json"
      style={{ height: '300px', width: '300px' }}
    />
  );
}

export default AnimationComponent;