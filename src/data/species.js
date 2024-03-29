import { charMap } from './characteristic'
import { aptitudes } from './aptitude'
import { Asset } from './models'
import { talents } from './all-talents'

export class Species {

  constructor(name, b, r, t, d, r2) {
    this.constructor.apply(this, name, b, r, t, d, r2)
  }

  static apply(funcObj, name, bApt, rApt, bTalent, descr, rApt2) {
    Asset.apply(funcObj, name, descr)
    funcObj.bApt = bApt
    funcObj.rApt = rApt
    funcObj.rApt2 = rApt2
    funcObj.bTalent = bTalent
  }
}

let relnDescription = 'Reln live on terrestrial lowlands, including forests, plains, deserts, tundras, and many other biomes.'
  + ' In such competitive environments, Reln benefit form an inherit killer instinct, but that cognitive'
  + ' specialization takes some priority from puzzle solving.'
let uvenDescription = 'Uven spend most of their lives underground. Their diet includes roots, fungi, and '
  + 'other cave dwelling animals. Even so, a life underground poses many challenges, '
  + 'and Uven benefit immensely from creative problem solving, though the general '
  + 'lack of light and life leaves little use for sharpened senses.'
let gylDescription = 'Gyl typically inhabit islands, coasts, and lakes. They are comfortable swimming, '
  + 'and leading a largely aquatic lifestyle. Gyl have a greater upper body strength '
  + 'than other humanoids, which helps with the constant swimming. However, living amongst water dwelling '
  + 'megafauna has imbued more powerful survival instincts than other humanoids.'
let kavrenDescription = ' Kavren inhabit places of high altitude, and are known traveling around the world in '
  + 'balloon fleets. They have flaps of skin, that when extended, act as a hang glider, '
  + 'though they cannot fly without gear. This is made possible due to their light frame, '
  + 'but a low mass body isn\'t good in a fight.'
let mechDescription = 'Mechaniform are the only non-humanoid that can be sentient. They are built in maturity, '
  + 'and fall outside the realm of the human condition. Because of this, sentient '
  + 'mechaniform are resistant to mental trauma, but struggle with invoking empathy.'


export const species = [
  new Species('Reln', charMap.A, charMap.I, talents[0][0], relnDescription),
  new Species('Uven', charMap.I, charMap.K, talents[0][4], uvenDescription),
  new Species('Gyl', charMap.M, charMap.W, talents[4][0], gylDescription),
  new Species('Kavren', charMap.R, charMap.M, talents[0][3], kavrenDescription),
  new Species('Sentient Mechaniform', charMap.W, charMap.P, { name: 'Resistance (radiation)' }, mechDescription, aptitudes[0])
]
