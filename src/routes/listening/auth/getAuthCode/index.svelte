
<script context="module">
  import Spotify from '$lib/spotify/Spotify.js';

  export async function load({ url }) {

    const { searchParams } = url;
    const queryParams = {};
    for (const [key, value] of searchParams.entries()) {
      queryParams[key] = value;
    }

    const spotify = new Spotify();

    const scope = 'user-read-currently-playing user-read-recently-played';
    const state = spotify.getRandomString(16);

    if (
      Object.keys(queryParams).includes('refresh') &&
      searchParams.get('refresh') === 'true'
    ) {

      return {
        props: {
        // accessToken
      }
      };
    } else {
      const query = new URLSearchParams({
        response_type: 'code',
        client_id: spotify.clientID,
        scope,
        redirect_uri: 'https://localhost:3000',
        state
      }).toString();

      const spotifyEndpoint = `https://accounts.spotify.com/authorize?${query}`;

      return {
        status: 307,
        redirect: spotifyEndpoint,
      };
    }
  }
</script>

<script>
  export let accessToken;
</script>

<h3>
  {accessToken}
</h3>


}||
