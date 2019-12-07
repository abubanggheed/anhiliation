import { characteristics } from './characteristic'
import { aptitudes } from './aptitude'

export class Species {

  constructor(name, b, r, t, d, r2) {
    this.constructor.apply(this, name, b, r, t, d, r2)
  }

  static apply(funcObj, name, bApt, rApt, bTalent, descr, rApt2) {
    funcObj.name = name
    funcObj.bApt = bApt
    funcObj.rApt = rApt
    funcObj.rApt2 = rApt2
    funcObj.bTalent = bTalent
    funcObj.descr = descr
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
  + 'than other humanoids, which helps with the constant swimming. However, their '
  + 'bodies are known to be somewhat fragile.'
let kavrenDescription = ' Kavren inhabit places of high altitude, and are known traveling around the world in'
  + 'balloon fleets. They have flaps of skin, that when extended, act as a hang glider, '
  + 'though they cannot fly without gear. This is made possible due to their light frame, '
  + 'but a low mass body isn\'t good in a fight.'
let mechDescription = 'Mechaniform are the only non-humanoid that can be sentient. They are built in maturity, '
  + 'and fall outside the realm of the human condition. Because of this, sentient '
  + 'mechaniform are resistant to mental trauma, but struggle with invoking empathy.'


export const species = [
  new Species('Reln', characteristics[0], characteristics[4], 'Ambidextrous', relnDescription),
  new Species('Uven', characteristics[4], characteristics[5], 'Night Fighter', uvenDescription),
  new Species('Gyl', characteristics[1], characteristics[2], 'Gyl may hold their breath for T minutes', gylDescription),
  new Species('Kavren', characteristics[3], characteristics[1], 'Catfall', kavrenDescription),
  new Species('Sentient Mechaniform', characteristics[6], characteristics[7], 'Resistance (radiation)', mechDescription, aptitudes[0])
]
