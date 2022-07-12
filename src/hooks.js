export async function handle({ event, resolve }) {
  // // get accept-language header
  // event.locals.user = event.locals.user || {};
  // event.locals.language = event.request.headers.get('accept-language');

  const response = await resolve(event);
  return response;
}

export function getSession(event) {
  const langRE = /[a-z]{2}-[A-Z]{2}/gi;
  const acceptLanguage = event.request.headers.get('accept-language');
  const language = langRE.test(acceptLanguage)
    ? acceptLanguage.match(langRE)[0]
    : undefined;


	return {
		user: {
			// only include properties needed client-side —
			// exclude anything else attached to the user
			// like access tokens etc
			language
		}
	};
}
