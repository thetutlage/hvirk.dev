export default function (eleventyConfig) {
  eleventyConfig.amendLibrary('md', (md) => md.set({ typographer: true }))

  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/_redirects')

  eleventyConfig.addFilter('readableDate', (date) => {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(date)
  })

  return {
    dir: { input: 'src', output: '_site' },
    markdownTemplateEngine: false,
  }
}
