/**
 * Gets dimensions of image at URL
 * @param {string} url - image URL
 * @param {number} timeout - The number of milliseconds to wait for image to load (defaults to 2000)
 * @returns {object} - Object containing width and height of image at URL
 */
async function getImageDimensions(url, timeout = 2000) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.addEventListener('load', function () {
			resolve({
				width: this.naturalWidth,
				height: this.naturalHeight,
			});
		});
		try {
			img.src = url;
		} catch (error) {
			reject(error);
		}

		setTimeout(() => {
			reject();
		}, timeout);
	});
}

export default getImageDimensions;
