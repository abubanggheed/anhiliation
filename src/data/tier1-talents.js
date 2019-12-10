
import { Talent } from './talent'
import { characteristics } from './characteristic'
import { aptitudes } from './aptitude'
import { skills } from './skill'
import { tier0Talents } from './tier0-talents'

export const tier1Costs = [26, 22, 18, 14]

const coveringGround = new Talent(
  'Covering Ground',
  'May reload while running or charging',
  '',
  [characteristics[0], aptitudes[3]],
  1,
  []
)

const stayFrosty = new Talent(
  'Stay Frosty',
  'Gain 1 additional reaction per round',
  'You gain an additional reaction each round for a total of 2 per round.',
  [characteristics[0], characteristics[3], aptitudes[2]],
  1,
  []
)

const counterAttack = new Talent(
  'Counter Attack',
  'May attack after parrying',
  'After making a parry against any non counter attack, if your opponents attack score was reduced to -3 or less, you may spend an additional reaction to make a counter attack against that opponent.',
  [characteristics[0], aptitudes[3]],
  1,
  [[stayFrosty]]
)

export const tier1Talents = [
  new Talent(// 0|9
    'Cavalry',
    'Attack while riding on something',
    'While zipping around on some sort of mount or vehicle as the driver, you may make basic ranged attacks and charge melee attacks but may not reload. You may only do so with improvised, melee, and pistol type weapons.',
    [characteristics[3], aptitudes[1]],
    1,
    []
  ),
  coveringGround,// 1|10
  counterAttack,// 2|11
  new Talent(// 3|12
    'Dirty Fighting',
    'Compromise reactions in brawler hits',
    '',
    [characteristics[3], aptitudes[3]],
    1,
    [[tier0Talents[1]]]
  ),
  new Talent(// 4|13
    'Dodge Counter',
    'May counter attack after dodging',
    '',
    [characteristics[3], aptitudes[3]],
    1,
    [[counterAttack]]
  ),
  new Talent(// 5|14
    'Dog Pile',
    'May immediately enter other people\'s grapples',
    '',
    [characteristics[1], aptitudes[1]],
    1,
    []
  ),
  new Talent(// 6|15
    'Flexed',
    'Gain concussive property on all out attacks',
    '',
    [characteristics[1], aptitudes[1]],
    1,
    []
  ),
  new Talent(// 7|16
    'Flimsical',
    'Use sleight of hand to slip free',
    '',
    [characteristics[3], aptitudes[3]],
    1,
    [[{...skills[23], training: 'Professional'}]]
  ),
  new Talent(// 8|17
    'Gun Fu',
    'You may reload your ranged weapon while using it as a melee weapon',
    '',
    [characteristics[0], aptitudes[3]],
    1,
    [[coveringGround]]//pending
  ),
  new Talent(// 9|18
    'Hard Target',
    'Increase difficulty to hit you when running',
    '',
    [characteristics[3], aptitudes[2]],
    1,
    []
  ),
  new Talent(// 10|19
    'Quick Draw',
    'Draw weapons as a free action',
    '',
    [characteristics[0], aptitudes[3]],
    1,
    []
  ),
  new Talent(// 11|20
    'Improvised Fighter',
    'Improvised Weapons do more damage and can be used to parry normally',
    '',
    [characteristics[0], aptitudes[1]],
    1,
    [[{ ...tier0Talents[8], name: tier0Talents[8].name + ' (Improvised)'}]]
  ),
  new Talent(// 12|21
    'Inspector',
    'Determine armor special rules at a glance',
    '',
    [characteristics[5], aptitudes[4]],
    1,
    [[
      { ...skills[8], name: skills[8].name + ' (war)'},
      { ...skills[28], name: skills[28].name + ' (Armorer)'}
    ]]
  ),
  new Talent(// 13|22
    'Lent Shot',
    'Shot into another melee when engaged in your own',
    '',
    [characteristics[0], aptitudes[3]],
    1,
    []//pending
  ),
  new Talent(// 14|23
    'Overwatch',
    'May use overwatch action',
    '',
    [characteristics[0], aptitudes[2]],
    1,
    []
  ),
  new Talent(// 15|24
    'Primed',
    'Gain advantage on personal initiative',
    '',
    [characteristics[5], aptitudes[3]],
    1,
    []
  ),
  new Talent(// 16|25
    'Razor\'s Edge',
    'May dodge after parrying',
    '',
    [characteristics[3], aptitudes[3]],
    1,
    [[stayFrosty]]
  ),
  new Talent(// 17|26
    'Refocus',
    'Reactions and half moves do not undo your aim bonus',
    '',
    [characteristics[0], aptitudes[3]],
    1,
    []
  ),
  new Talent(// 18|27
    'Rippling Frame',
    'No more need to brace',
    '',
    [characteristics[1], aptitudes[0]],
    1,
    []
  ),
  new Talent(// 19|28
    'Semi Auto',
    'May perform the semi-auto burst attack',
    '',
    [characteristics[0], aptitudes[1]],
    1,
    []
  ),
  stayFrosty,// 20|29
  new Talent(// 21|30
    'Suppressing Fire',
    'May perform the suppressing fire attack',
    '',
    [characteristics[0], aptitudes[2]],
    1,
    []
  ),
  new Talent(// 22|31
    'Therapy',
    'Reduce your total insanity by 5',
    '',
    [characteristics[6], aptitudes[0]],
    1,
    [[{name: '5 Insanity'}]]
  ),
  new Talent(// 23|32
    'The Slip',
    'May exit grapple when losing control of it',
    '',
    [characteristics[1], aptitudes[3]],
    1,
    []
  ),
  new Talent(// 24|33
    'Unhinged',
    'Gain bonus to intimidate and blather from insanity points',
    '',
    [characteristics[7], aptitudes[8]],
    1,
    []
  )
]
