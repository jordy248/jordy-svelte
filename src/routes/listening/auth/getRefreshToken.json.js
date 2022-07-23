import Spotify from '$lib/spotify/Spotify.js';

export async function get() {
	const spotify = new Spotify();

	try {
		const accessTokenResp = await spotify.getAccessToken();
		const { status } = accessTokenResp;

		if (status === 200) {
			const accessTokenData = await accessTokenResp.json();

			return {
				status: 200,
				body: {
					accessTokenData,
				},
			};
		} else {
			return {
				status: 500,
				error: `Spotify status ${status}`,
			};
		}
	} catch (error) {
		return {
			status: 500,
			error: `Error getting refresh token.`,
		};
	}
}
