const mdlinks = require('../index.js')

const result = [ { text: '8. Checklist', href: '#8-checklist' },
	{ text: 'Markdown', href: 'https://pt.wikipedia.org/wiki/Markdown' },
	{ text: 'Jest', href: 'https://jestjs.io/' } ]

describe('mdlinks', () => {
  it('is a function', () => {
    expect(typeof mdlinks).toBe('function')
  })

  it('returns `mdlinks`', () => {
    expect(`* [1. Introdução](#1-introdução)
* [2. O problema](#2-o-problema)
* [3. UX](#3-ux)
* [4. Planejamento](#4-planejamento)
* [5. Desenvolvimento Front End](#5-desenvolvimento-front-end)
* [6. Desenvolvedoras](#7-desenvolvedoras)`).toEqual()
  })
})
