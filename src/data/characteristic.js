
export class Characteristic {
  constructor(name, abvr, descr, zeroEffect) {
    this.constructor.apply(this, name, abvr, descr, zeroEffect)
  }

  static apply(funcObj, name, abvr, descr, zeroEffect) {
    funcObj.name = name
    funcObj.abvr = abvr
    funcObj.descr = descr
    funcObj.zeroEffect = zeroEffect
  }
}

export const characteristics = [
  new Characteristic(//0
    'Weapon Skill',
    'WS',
    'The instinct and ability to use the tools of combat be it the blade, the gun, or the folding chair.',
    'Jittering nerves prevent your from holding anything in your hands, or from focusing on a target. You can still move okay.'
  ),
  new Characteristic(//1
    'Strength',
    'S',
    'Strength (physical strength, not strength of character)',
    'You feel completely and utterly drained, and cannot bring yourself to move except to breathe and speak.'
  ),
  new Characteristic(//2
    'Toughness',
    'T',
    'The ability to withstand physical hardships.',
    'You suffer from a heart attack, or the mechaniform equivalent. If you are treated immediately, you wont die from this.'
  ),
  new Characteristic(//3
    'Agility',
    'Agi',
    'Speed and nimbletude.',
    'Your peripheral nervous system shuts down, and you become unable to act except to stumble around and slur out nonsense.'
  ),
  new Characteristic(//4
    'Intelligence',
    'Int',
    'Puzzle solving and memorization.',
    'You retreat into a state of infantile cognitive capability, and make no significant decisions until you recover. You keep no memory of this incident.'
  ),
  new Characteristic(//5
    'Perception',
    'Per',
    'The ability to notice things that are happening in the moment.',
    'Your senses fail, and although conscious, your only conception of the world is a blur of color and noise.'
  ),
  new Characteristic(//6
    'Willpower',
    'Will',
    'The ability to withstand mental hardships.',
    'You fall into a coma.'
  ),
  new Characteristic(//7
    'Fellowship',
    'Fel',
    'The ability to get along with others.',
    'You withdraw into a state of complete self focus, with no concept of the existence of other people.'
  )
]
