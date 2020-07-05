
import { genRandom } from './gen-random'

export const rollRng = (dice, offset, numberOfRolls) => {
  const results = []
  if (+numberOfRolls > 1000) numberOfRolls = '1000'
  let i = 0
  while (i++ < +numberOfRolls) {
    let diceResults = []
    let diceSums = []
    let diceRolled = 0
    dice.forEach(die => {
      let diceTypeTotal = 0
      if (diceRolled < 100) {
        let j = 0
        while (j++ < +die.number) {
          let rollResult = genRandom(+die.max)
          diceResults.push(rollResult)
          diceTypeTotal += rollResult
          diceRolled++
        }
        diceSums.push(diceTypeTotal)
      }
    })
    let diceTotal = diceResults.reduce((total, cur) => total + cur, 0)
    let total = diceTotal + +offset
    let summary = `${diceSums.join(' + ')} + ${offset}`
    results.push({
      total,
      summary,
      diceResults
    })
  }
  return {
    results,
    dice: dice.reduce((prev, cur) => prev ? prev + ` + ${cur.number}d${cur.max}` : `${cur.number}d${cur.max}`, ''),
    offset
  }
}
