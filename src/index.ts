/* eslint-disable @typescript-eslint/no-explicit-any */

import { Middleware, Dispatch } from 'redux'

import qs from 'qs'

import { APIAction } from './type'

const refreshToken = (): Middleware<Dispatch<APIAction>> => {
  return () => (next) => async (action: APIAction) => {
    if (action.type !== 'REDUX_API_MIDDLEWARE') {
      return next(action)
    }

    if (action.query) {
      action.url = `${action.url}${qs.stringify(action.query, {
        skipNulls: true,
        addQueryPrefix: true,
        ...action.queryOptions,
      })}`
    }

    return next(action)
  }
}

export default refreshToken
