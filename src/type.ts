import { APIAction as APIMiddlewareAction } from '@savchenko91/rc-redux-api-mw'

import { IStringifyOptions } from 'qs'

export type APIAction = APIMiddlewareAction & {
  query?: Record<string, unknown>
  queryOptions?: IStringifyOptions
}
