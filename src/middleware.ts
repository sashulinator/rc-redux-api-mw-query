import { Middleware, Dispatch } from 'redux'

import { REDUX_API_MIDDLEWARE, APIAction } from '@savchenko91/rc-redux-api-mw'

import qs from 'qs'

import { APIActionQs } from './type'

const refreshToken = (): Middleware<Dispatch<APIAction>> => {
  return () => (next) => async (action: APIActionQs) => {
    if (action.type !== REDUX_API_MIDDLEWARE) {
      return next(action)
    }

    if (action.query) {
      const newAction = Object.assign(action)

      newAction.url = `${action.url}${qs.stringify(action.query, {
        skipNulls: true,
        addQueryPrefix: true,
        ...action.queryOptions,
      })}`

      await next(newAction)

      return action
    }

    return next(action)
  }
}

export default refreshToken
