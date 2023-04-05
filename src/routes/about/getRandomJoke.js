export default async function getRandomJoke () {
  const url= 'http://localhost:3000/graphql';
  // const url= 'https://www.jordy.is/graphql';
  const query = `query {
    joke {
      setup
      punchline
    }
  }`.trim();
  
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: null,
    }),
  });

  const defaultJoke = {
    setup: 'Have you heard the one about the elevator?',
    punchline: 'It works on so many levels.'
  };

  if (resp.ok) {
    const respData = await resp.json();
    const jokes = respData?.data?.joke;
    const nJokes = jokes.length;
    const idx = Math.floor(Math.random() * nJokes);
    const joke = jokes[idx];
    return joke;
  } else {
    // quick, grab a stock joke
    return defaultJoke;
  }
}