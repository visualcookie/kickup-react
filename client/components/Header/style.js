// @flow
import { StyleSheet } from 'aphrodite/no-important'

export default StyleSheet.create({
  main: {
    marginTop: 53,
    marginBottom: 50,
  },
  logo: {
    margin: '0 auto',
    width: 51,
    height: 45,
    backgroundImage: `url(${require('assets/logo.png')})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '51px 45px',
  },
})
