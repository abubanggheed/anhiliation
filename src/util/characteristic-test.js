
const genRandom = (max = 1, min = 0) => Math.floor(Math.random() * (max - min)) + 1 + min

export const characteristicTest = (test, variance, char, basic, advantages, disadvantages,
  centerings, charM, fatM, fatigue, numberOfRolls, charName) => {
  const results = []
  let advs = +advantages - +disadvantages
  let dice = test.difficulty[`${variance}Ary`]
  let max = dice[0]
  let totalRolls = dice.length + Math.abs(advs) + 2 * centerings
  let i = 0
  while (i++ < +numberOfRolls) {
    let j = 0
    let rollResults = []
    while (j++ < +totalRolls) {
      rollResults.push(genRandom(max))
    }
    let rawResults = [...rollResults]
    rollResults.sort((a, b) => a - b)
    let k = advs
    while (k !== 0) {
      if (k < 0) {
        k++
        rollResults.pop()
      } else {
        k--
        rollResults.shift()
      }
    }
    for(let l = +centerings; l > 0; l--) {
      rollResults.pop()
      rollResults.shift()
    }
    let diceSum = rollResults.reduce((tot, curr) => tot + curr)
    let charEffect = Math.floor(char * charM)
    let fatigueEffect = Math.floor(fatigue * fatM)
    let total = diceSum + charEffect - fatigueEffect + +basic - max * dice.length
    results.push({
      rawResults,
      rollResults,
      total,
      summary: `${diceSum} + ${charEffect}${fatigueEffect ? ` - ${fatigueEffect}` : ''}${basic ? ` + ${basic}`: ''} - ${max * dice.length}`
    })
  }
  return {
    results,
    dice: test.difficulty[`${variance}Descr`],
    testName: test.name,
    variance: {
      h: 'High',
      s: 'Standard',
      l: 'Low'
    }[variance],
    charName
  }
}
