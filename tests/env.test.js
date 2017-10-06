import path from 'path'
const load = require('../built').load

beforeEach(() => {
  process.env.NODE_ENV = ''
  process.env.DOTENV_ENV = ''
  process.env.VALUE = ''
})

test('.env.test', () => {
  process.env.NODE_ENV = 'test'
  load(__dirname)

  const { VALUE } = process.env
  expect(VALUE).toBe('test')
})

test('.env', () => {
  process.env.NODE_ENV = 'development'
  load(__dirname)

  const { VALUE } = process.env
  expect(VALUE).toBe('development')
})

test('.env.specific', () => {
  process.env.NODE_ENV = 'development'
  load(path.join(__dirname, '.env.specific'))

  const { VALUE } = process.env
  expect(VALUE).toBe('specific')
})

test('DOTENV_ENV', () => {
  process.env.DOTENV_ENV = 'dotenvenv'
  process.env.NODE_ENV = 'development'
  load(__dirname)

  const { VALUE } = process.env
  expect(VALUE).toBe('dotenvenv')
})

test('not found', () => {
  process.env.NODE_ENV = 'development'
  load(path.join(__dirname, 'none'))

  const { VALUE } = process.env
  expect(VALUE).toBe('')
})
