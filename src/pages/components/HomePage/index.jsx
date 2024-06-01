import { JokeList } from '../JokeList';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <h1>Jokes: </h1>
      <JokeList />
    </div>
  );
};
