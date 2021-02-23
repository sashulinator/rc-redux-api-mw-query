import { APIAction as APIMiddlewareAction } from '@savchenko91/rc-redux-api-mw'

import { IStringifyOptions } from 'qs'

export type APIActionQs<RequestBody = unknown, ResponseBody = unknown, Payload = unknown> = APIMiddlewareAction<
  RequestBody,
  ResponseBody,
  Payload
> & {
  query?: Record<string, unknown>
  queryOptions?: IStringifyOptions
}
