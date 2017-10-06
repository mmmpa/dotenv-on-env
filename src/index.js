import { load as loadEnv } from 'dotenv'
import { join } from 'path'
import fs from 'fs'

module.exports.load = function (base = './', options = {}) {
  const {
    DOTENV_ENV,
    NODE_ENV = 'development',
  } = process.env

  const env = DOTENV_ENV || NODE_ENV
  const isDevelopmentDotEnv = env === 'development'

  let isFile = false
  try {
    const file = fs.lstatSync(base)
    isFile = file.isFile()
  } catch (e) {
    //
  }

  const path = isFile
    ? base
    : join(base, isDevelopmentDotEnv ? '.env' : `.env.${env}`)

  loadEnv({
    path,
    ...options,
  })
}
