// Overrides content/posts/posts.11tydata.js for the art/sketchbook gallery.
// These pieces have no legacy published URL to preserve (unlike the old
// WordPress archive), so they get a clean /art/slug/ location matching the
// new "Art" section instead of Eleventy's default /posts/art/slug/.
export default {
	layout: "layouts/art.njk",
	eleventyComputed: {
		permalink: (data) => {
			return data.page.filePathStem.replace(/^\/posts\/art/, "/art").replace(/\/index$/, "") + "/";
		},
	},
};
