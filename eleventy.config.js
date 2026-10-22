import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { renderArticleImage, renderSiteImage } from './og/render.js'

const site = JSON.parse(await readFile(new URL('./src/_data/site.json', import.meta.url), 'utf8'))

export default function (eleventyConfig) {
  eleventyConfig.amendLibrary('md', (md) => md.set({ typographer: true }))

  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/_redirects')

  eleventyConfig.addFilter('readableDate', (date) => {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(date)
  })

  /**
   * Articles are kept from the collection, so the OG images can be
   * rendered after the build writes the pages
   */
  let articles = []
  eleventyConfig.addCollection('articles', (collectionApi) => {
    const items = collectionApi.getFilteredByGlob('src/articles/*.md')
    articles = items.map((item) => ({ slug: item.fileSlug, ...item.data }))
    return items
  })

  eleventyConfig.on('eleventy.after', async ({ dir }) => {
    const ogDir = join(dir.output, 'og')
    await mkdir(ogDir, { recursive: true })

    await writeFile(join(ogDir, 'site.png'), await renderSiteImage(site))
    for (const article of articles) {
      const png = await renderArticleImage({ ...article, author: site.author, domain: site.domain })
      await writeFile(join(ogDir, `${article.slug}.png`), png)
    }
  })

  return {
    dir: { input: 'src', output: '_site' },
    markdownTemplateEngine: false,
  }
}
