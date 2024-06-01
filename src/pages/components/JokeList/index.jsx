import React, { useState, useEffect } from 'react';
import { Joke } from '../Joke';

export const JokeList = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJokes(data.data);
    };

    fetchJokes();
  }, []);

  return (
    <div className="joke-list">
      {jokes.length === 0 ? (
        <div>Načítám vtipy...</div>
      ) : (
        jokes.map((joke) => (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))
      )}
    </div>
  );
};
