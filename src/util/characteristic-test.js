
import { genRandom } from './gen-random'

export const characteristicTest = (test, variance, char, basic, advantages, disadvantages,
  centerings, charM, fatM, fatigue, numberOfRolls, charName) => {
  const results = []
  let advs = +advantages - +disadvantages
  if (advs > 100) advs = 100
  if (advs < -100) advs = -100
  if (+centerings > 100) centerings = '100'
  if (+numberOfRolls > 1000) numberOfRolls = '1000'
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
    rollResults = advs > 0 ?
      rollResults.slice(advs + +centerings, rollResults.length - +centerings)
      : rollResults.slice(+centerings, rollResults.length + advs - +centerings)
    let diceSum = rollResults.reduce((tot, curr) => tot + curr, 0)
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
