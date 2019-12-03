const mdlinks = require('../index.js')

const result = [
  {
    text: '8. Checklist',
    href: '#8-checklist'
  },
  { 
    text: 'Markdown', 
    href: 'https://pt.wikipedia.org/wiki/Markdown' 
  },
  { 
    text: 'Jest', 
    href: 'https://jestjs.io/' 
  }
]

describe('mdlinks', () => {
  it('is a function', () => {
    expect(typeof mdlinks).toBe('function')
  })

  it('returns 3 links', done => {
    mdlinks('./lib/__tests__/README.md').then(link => {
      expect(link).toEqual(result)
      done()
    })
  })

  it('return error', done => {
    mdlinks('./lib/__tests__/text.md').catch(link => {
      expect(link).toEqual(link)
      done()
    })
  })
})
