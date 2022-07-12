// import 'dotenv/config'; // this makes this work with dev server

import Spotify from '$lib/spotify/Spotify.js';

export async function get() {
	const spotify = new Spotify();

	try {
		const accessToken = await spotify.refreshAccessToken();
		const accessTokenData = accessToken?.access_token;

		const nowPlaying = await spotify.getNowPlaying(accessTokenData);
    const status = nowPlaying?.status;

    if (status === 200) {
      const { resp } = nowPlaying;
      const nowPlayingData = await resp.json();
      // console.log('nowPlayingData', nowPlayingData);
      return {
        status: 200,
        body: {
          nowPlaying,
          nowPlayingData
        }
      };
    } else if (status === 204) {
      return {};
    } else {
      return {};
    }
	} catch (error) {
		console.log('spotify api error');
		console.log(error);
		return {
			status: 404
		};
	}
}
