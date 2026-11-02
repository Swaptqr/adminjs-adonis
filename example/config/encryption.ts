import env from '#start/env'
import { defineConfig, drivers } from '@adonisjs/core/encryption'

/**
 * Encryption configuration. The APP_KEY is used by the "encryption" module
 * and for encrypting cookies (including the session cookie).
 */
const encryptionConfig = defineConfig({
  default: 'gcm',

  list: {
    gcm: drivers.aes256gcm({
      keys: [env.get('APP_KEY')],
      id: 'gcm',
    }),
  },
})

export default encryptionConfig

/**
 * Inferring types for the list of encryptors you have configured
 * in your application.
 */
declare module '@adonisjs/core/types' {
  export interface EncryptorsList extends InferEncryptors<typeof encryptionConfig> {}
}
