async function lottery() {
  console.log("Вы начали игру");
  try {
    const result = await promise(1000)
    console.log('Вы выиграли')
    console.log("Вам заплатили")
  } catch {
    console.log('Вы проиграли')
  } finally {
    console.log('Игра закончена')
  }
}
const promise = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random(0) > 0.5) {
        resolve()
      } else reject('Вы промахнулись')

    }, ms)
  })

}

lottery()

