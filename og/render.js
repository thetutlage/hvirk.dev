import { readFile } from 'node:fs/promises'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

const WIDTH = 1200
const HEIGHT = 630

const colors = {
  paper: '#ffffff',
  ink: '#262626',
  muted: '#7a7a7a',
  accent: '#2a5d8f',
}

const fontsDir = new URL('./fonts/', import.meta.url)
const fonts = [
  { name: 'Lato', weight: 400, data: await readFile(new URL('Lato-Regular.ttf', fontsDir)) },
  { name: 'Lato', weight: 700, data: await readFile(new URL('Lato-Bold.ttf', fontsDir)) },
  { name: 'Lato', weight: 900, data: await readFile(new URL('Lato-Black.ttf', fontsDir)) },
]

const avatar = `data:image/jpeg;base64,${(await readFile(new URL('../src/assets/virk.jpg', import.meta.url))).toString('base64')}`

function el(type, style, children) {
  return { type, props: { style, children } }
}

function img(src, size) {
  return { type: 'img', props: { src, width: size, height: size, style: { borderRadius: '50%' } } }
}

async function toPng(tree) {
  const svg = await satori(tree, { width: WIDTH, height: HEIGHT, fonts })
  return new Resvg(svg).render().asPng()
}

const page = (children) =>
  el(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '80px 88px',
      background: colors.paper,
      color: colors.ink,
      fontFamily: 'Lato',
    },
    children
  )

/**
 * The image for one article: the series, the title, and the author.
 */
export function renderArticleImage({ title, series, part, author, domain }) {
  return toPng(
    page([
      el('div', { display: 'flex', flexDirection: 'column' }, [
        series
          ? el('div', { fontSize: 32, fontWeight: 700, color: colors.accent, marginBottom: 24 }, `${series}, part ${part}`)
          : null,
        el('div', { fontSize: 80, fontWeight: 900, lineHeight: 1.06, letterSpacing: -2 }, title),
      ].filter(Boolean)),
      el('div', { display: 'flex', alignItems: 'center' }, [
        img(avatar, 72),
        el('div', { fontSize: 32, fontWeight: 900, marginLeft: 24 }, author),
        el('div', { fontSize: 30, color: colors.muted, marginLeft: 'auto' }, domain),
      ]),
    ])
  )
}

/**
 * The image for the site as a whole: the author and the bio.
 */
export function renderSiteImage({ author, bio, domain }) {
  return toPng(
    page([
      img(avatar, 160),
      el('div', { display: 'flex', flexDirection: 'column' }, [
        el('div', { fontSize: 88, fontWeight: 900, letterSpacing: -2, marginBottom: 16 }, author),
        el('div', { fontSize: 38, color: colors.muted }, bio),
      ]),
      el('div', { fontSize: 30, color: colors.muted }, domain),
    ])
  )
}
