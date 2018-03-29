import authReducer from '../../reducers/auth'

test('should login user', () => {
  const uid = 'abc123'
  const action = {
    type: 'LOGIN',
    uid
  }
  const result = authReducer({}, action)
  expect(result).toEqual({ uid })
})

test('should logout user', () => {
  const action = {
    type: 'LOGOUT'
  }
  const result = authReducer({uid: 'anything'}, action)
  expect(result).toEqual({ })
})
