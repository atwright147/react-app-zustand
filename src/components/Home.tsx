import { useTitle } from '../hooks/title';
import { Heading } from './Heading';

export const Home = () => {
  useTitle('Home');

  return (
    <div>
      <Heading>Home View</Heading>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
};
