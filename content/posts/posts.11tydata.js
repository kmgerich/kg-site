// Default data for content/posts/** — today this is almost entirely the old
// 2002-2006 blog imported from WordPress, so the archive layout is the
// default. content/posts/art/ overrides this with its own directory data
// file (see content/posts/art/art.11tydata.js).
export default {
	tags: [
		"posts"
	],
	"layout": "layouts/archive-post.njk",
	eleventyComputed: {
		// Posts imported from the old WordPress blog (content/posts/YYYY/MM/DD/slug/)
		// were originally published at kmgerich.com/YYYY/MM/DD/slug/ — see each
		// post's `metadata.url`. Keep those exact paths working by stripping the
		// "/posts" segment Eleventy would otherwise add, so old bookmarks, search
		// results, and inbound links don't break.
		permalink: (data) => {
			if (data.metadata && data.metadata.type === "wordpress") {
				return data.page.filePathStem.replace(/^\/posts/, "").replace(/\/index$/, "") + "/";
			}
		},
	},
};
