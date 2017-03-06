
const navigatorSet = (navigatorNew) => {
  return ({ navigator }) => {
    return { navigator: navigatorNew }
  }
}

export default navigatorSet