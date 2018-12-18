
export function* watchActions () {
  //Watch user action 
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
