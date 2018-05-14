// @flow
// flow-typed signature: ce3726ab8b1dcafbe5924d60999f6060
// flow-typed version: <<STUB>>/react-router-redux_v4.1.1/flow_v0.69.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'react-router-redux'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'react-router-redux' {
  declare module.exports: {
    routerReducer: $Exports<'react-router-redux/reducer'>,
  }
}

declare module 'react-router-redux/es/middleware' {
  declare module.exports: any
}

declare module 'react-router-redux/es/reducer' {
  declare module.exports: $Exports<'react-router-redux/reducer'>
}

declare module 'react-router-redux/reducer' {
  declare type Location = {
    pathname: string,
    search: string,
    hash: string,
    key: string,
  }

  declare type State = {
    location: Location,
    action: ?string,
  }

  declare type Action = {
    type: string,
    payload: Object,
  }

  declare module.exports: {
    routerReducer: (state: State, action: Action) => State,
  }
}
