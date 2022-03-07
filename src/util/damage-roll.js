
import { genRandom } from './gen-random'

export const damageRoll = (dice, atts, basic, pen, numberOfRolls) => {
  const results = []
  if (+numberOfRolls > 1000) numberOfRolls = '1000'
  let i = 0
  while (i++ < +numberOfRolls) {
    let diceResults = []
    let diceRolled = 0
    dice.forEach(die => {
      if (diceRolled < 100) {
        let j = 0
        while (j++ < +die.number) {
          diceResults.push(genRandom(+die.max))
          diceRolled++
        }
      }
    })
    let attTotal = atts.slice(0, 100).reduce((total, cur) => total + cur, 0)
    let diceSum = diceResults.reduce((total, cur) => total + cur, 0)
    let total = diceSum + attTotal + +basic
    results.push({
      diceResults,
      total,
      pen,
      summary: `${diceSum}${atts ? ` + ${attTotal}` : ''} + ${basic}`
    });
  }
  let totalDamage = results.reduce((t, cur) => t + (cur.total < 0 ? 0 : cur.total), 0)
  return {
    results,
    dice: dice.reduce((prev, cur) => prev ? prev + ` + ${cur.number}d${cur.max}` : `${cur.number}d${cur.max}`, ''),
    basic,
    pen,
    atts,
    totalDamage,
    ts: new Date()
  }
}
