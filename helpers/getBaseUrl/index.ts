const getBaseUrl = () => {
	if (typeof window !== "undefined") {
		// browser origin
		return window.location.origin;
	}

	if (process.env.VERCEL_URL) {
		// reference for vercel.com
		return `https://${process.env.VERCEL_URL}`;
	}

	// assume localhost
	return `http://localhost:${process.env.PORT ?? 3000}`;
};

export default getBaseUrl;
