let tweets = [
  {
    id: "1",
    text: "드림코더 화이팅",
    createdAt: Date.now().toString(),
    name: "Ted",
    username: "tedjunny",
    url: "https://i.ibb.co/jWqbYPN/IMG-0008.jpg",
  },
  {
    id: "2",
    text: "노드 너무 재미있어요",
    createdAt: Date.now().toString(),
    name: "MooHyun",
    username: "moohyun",
  },
];

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };

  tweets = [tweet, ...tweets];

  return tweet;
}

export function update(id, text) {
  const tweet = getById(id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
