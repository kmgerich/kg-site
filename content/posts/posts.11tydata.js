export default {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	eleventyComputed: {
		// Posts imported from the old WordPress blog (content/posts/YYYY/MM/DD/slug/)
		// were originally published at kmgerich.com/YYYY/MM/DD/slug/ — see each
		// post's `metadata.url`. Keep those exact paths working by stripping the
		// "/posts" segment Eleventy would otherwise add, so old bookmarks, search
		// results, and inbound links don't break. Newer content (e.g. content/posts/art/)
		// has no legacy URL to preserve and keeps Eleventy's default location.
		permalink: (data) => {
			if (data.metadata && data.metadata.type === "wordpress") {
				return data.page.filePathStem.replace(/^\/posts/, "").replace(/\/index$/, "") + "/";
			}
		},
	},
};
