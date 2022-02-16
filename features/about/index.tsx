import { memo } from 'react';
import IsEqual from 'react-fast-compare';

function About(): JSX.Element {
  return (
    <div>
      <p>About</p>
    </div>
  );
}

export default memo(About, IsEqual);