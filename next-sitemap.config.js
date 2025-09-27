/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://www.vmyro.co/',
	generateRobotsTxt: true,
	transform: async (config, path) => {
		return {
			loc: path,
			lastmod: new Date().toISOString(),
		}
	},
}
