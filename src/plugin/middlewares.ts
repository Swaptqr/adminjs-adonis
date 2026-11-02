import { type HttpContext } from '@adonisjs/core/http'
import { type NextFn } from '@adonisjs/core/types/http'

export const checkSession = (loginPath: string) => {
  return async (ctx: HttpContext, next: NextFn) => {
    if (!ctx.session || !ctx.session.get('adminUser')) {
      return ctx.response.redirect(loginPath)
    }

    return next()
  }
}
