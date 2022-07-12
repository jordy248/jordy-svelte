// import 'dotenv/config'; // this makes this work with dev server

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_AUTH_CODE, SPOTIFY_REFRESH_TOKEN } =
	process.env;

export default class Spotify {
	constructor() {
		this.redirectURI = 'https://localhost:3000';

		this.clientID = SPOTIFY_CLIENT_ID;
		this.clientSecret = SPOTIFY_CLIENT_SECRET;
		this.authCode = SPOTIFY_AUTH_CODE;
		this.refreshToken = SPOTIFY_REFRESH_TOKEN;

		this.endpoints = [
			{
				name: 'currentlyPlaying',
				url: 'https://api.spotify.com/v1/me/player/currently-playing',
				method: 'get',
				params: ['market', 'additional_types']
			},
			{
				name: 'getAccessToken',
				url: 'https://accounts.spotify.com/api/token',
				method: 'post',
				params: ['grant_type', 'code', 'redirect_uri']
			},
			{
				name: 'refreshAccessToken',
				url: 'https://accounts.spotify.com/api/token',
				method: 'post',
				params: ['grant_type', 'code', 'redirect_uri']
			}
		];

		// bind methods
		this.getRandomString = this.getRandomString.bind(this);
		this.getAccessToken = this.getAccessToken.bind(this);
	}

	getRandomString(length) {
		let text = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

	async getAccessToken() {
		const endpoint = this.endpoints.find((e) => e.name === 'getAccessToken');

		const query = new URLSearchParams({
			grant_type: 'authorization_code',
			code: this.authCode,
			redirect_uri: this.redirectURI
		}).toString();

		try {
			const resp = await fetch(endpoint.url + `?${query}`, {
				method: endpoint.method,
				headers: {
					Authorization:
						'Basic ' + Buffer.from(this.clientID + ':' + this.clientSecret).toString('base64'),
					'content-type': 'application/x-www-form-urlencoded'
				}
			});

			return resp;
		} catch (error) {
			console.log(error);

			return null;
		}
	}

	async refreshAccessToken() {
		const endpoint = this.endpoints.find((e) => e.name === 'refreshAccessToken');

		const query = new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: this.refreshToken
		}).toString();

		try {
			const resp = await fetch(endpoint.url + `?${query}`, {
				method: endpoint.method,
				headers: {
					Authorization:
						'Basic ' + Buffer.from(this.clientID + ':' + this.clientSecret).toString('base64'),
					'content-type': 'application/x-www-form-urlencoded'
				}
			});

			if (resp.status === 200) {
				const data = await resp.json();
				return data;
			} else {
				return null;
			}
		} catch (error) {
			console.log(error);

			return null;
		}
	}

	async getNowPlaying(OAuthToken, query) {
		const endpoint = this.endpoints.find((e) => e.name === 'currentlyPlaying');

		const resp = await fetch(endpoint.url, {
			method: endpoint.method,
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				Authorization: `Bearer ${OAuthToken}`
			},
			body: JSON.stringify(query)
		});

		const status = resp?.status;

		switch (status) {
			case 200:
				return {
					status,
					resp
				};
			case 204:
				return {
					status,
					resp: {}
				};
			default:
				return {
					status,
					resp: {}
				};
		}
	}
}
