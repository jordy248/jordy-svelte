import Spotify from '$lib/spotify/Spotify.js';

export async function get({ url }) {
	const spotify = new Spotify();

	try {
		const accessToken = await spotify.getAccessToken();
    const spotifyStatusCode = accessToken.status;

		if (spotifyStatusCode === 200) {
			const accessTokenData = await accessToken.json();

			return {
				status: 200,
				body: {
					accessTokenData
				}
			};
		} else {
			return {
				status: 500,
				error: `Spotify status ${spotifyStatusCode}`
			};
		}
	} catch (error) {
		return {
			status: 500,
      error: `Error getting refresh token.`
		};
	}
}
