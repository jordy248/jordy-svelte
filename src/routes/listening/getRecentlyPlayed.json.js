// import 'dotenv/config'; // this makes this/ work with dev server

import Spotify from '$lib/spotify/Spotify.js';

export async function get() {
	const spotify = new Spotify();

	try {
		const accessTokenResp = await spotify.refreshAccessToken();
		const accessTokenData = accessTokenResp?.access_token;

		const recentlyPlayedResp = await spotify.getRecentlyPlayed(accessTokenData);
		const { status } = recentlyPlayedResp;

		if (status === 200) {
			const { resp } = recentlyPlayedResp;
			const recentlyPlayedData = await resp.json();

			return {
				status: 200,
				body: {
					data: recentlyPlayedData
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
