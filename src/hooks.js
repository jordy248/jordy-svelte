export async function handle({ event, resolve }) {
	// get accept-language header
	// event.locals.user = event.locals.user || {};
	// event.locals.language = event.request.headers.get('accept-language');;

	// get headers
	const headers = {};
	for (const [key, val] of event.request.headers) {
		headers[key] = val;
	}

	// get language
	const langRE = /[a-z]{2}-[A-Z]{2}/gi;
	const acceptLanguage = event.request.headers.get('accept-language');
	const language = langRE.test(acceptLanguage)
		? acceptLanguage.match(langRE)[0]
		: undefined;

	event.locals.user = {
		language,
		headers,
	};

	const response = await resolve(event);
	return response;
}

export function getSession(event) {
	// const headers = typeof event.request.headers;
	const { user } = event.locals;

	return {
		user,
	};
}
