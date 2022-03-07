import { Asset } from './models'

export class Characteristic {
  constructor(name, abvr, descr, zeroEffect) {
    this.constructor.apply(this, name, abvr, descr, zeroEffect)
  }

  static apply(funcObj, name, abvr, descr, zeroEffect) {
    Asset.apply(funcObj, name, descr)
    funcObj.abvr = abvr
    funcObj.zeroEffect = zeroEffect
  }
}

export const characteristics = [
]

export const charMap = {
  A: new Characteristic(
    'Accuracy',
    'Acc',
    'The coordination and predictive instincts to hit targets at a distance.',
    'Jittering nerves prevent your from holding anything in your hands, or from focusing on a target. You can still move okay.'
  ),
  M: new Characteristic(
    'Might',
    'M',
    'A character\'s strength (not strength of character).',
    'You suffer from some charactestrophic health failure. If you are treated immediately, you wont die from this.'
  ),
  R: new Characteristic(
    'Reflexes',
    'Ref',
    'Speed and nimbletude.',
    'Your peripheral nervous system shuts down, and you become unable to act except to stumble around and slur out nonsense.'
  ),
  I: new Characteristic(
    'Intelligence',
    'Int',
    'Puzzle solving and memorization.',
    'You retreat into a state of infantile cognitive capability, and make no significant decisions until you recover. You keep no memory of this incident.'
  ),
  K: new Characteristic(
    'Keenness',
    'K',
    'The ability to notice things that are happening in the moment.',
    'Your senses fail, and although conscious, your only conception of the world is a blur of color and noise.'
  ),
  W: new Characteristic(
    'Willpower',
    'Will',
    'The ability to withstand mental hardships.',
    'You fall into a coma.'
  ),
  P: new Characteristic(
    'Personality',
    'Per',
    'The ability to get along with others.',
    'You withdraw into a state of complete self focus, with no concept of the existence of other people.'
  )
}

for (let k in charMap) {
  characteristics.push(charMap[k])
}
