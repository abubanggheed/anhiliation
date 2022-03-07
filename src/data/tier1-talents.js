
import { Talent } from './talent'
import { charMap } from './characteristic'
import { aptitudes } from './aptitude'
import { skills } from './skill'
import { tier0Talents } from './tier0-talents'
import { supportFromAffar, improvisedFighter, enterTheImprovised } from './inverted-talents'

export const tier1Costs = [26, 22, 18, 14]

const coveringGround = new Talent(
  'Covering Ground',
  'May reload while running or charging',
  'While taking a run, full move or charge, you may reload your readied weapon by ½ action worth of reloading.',
  [charMap.R, aptitudes[6]],
  1,
  []
)

const stayFrosty = new Talent(
  'Stay Frosty',
  'Gain 1 additional reaction per round',
  'You gain an additional reaction each round for a total of 2 per round.',
  [charMap.R, aptitudes[2]],
  1,
  []
)

const counterAttack = new Talent(
  'Counter Attack',
  'May attack after parrying',
  'After making a parry against any non counter attack, if your opponents attack score was reduced to -3 or less, you may spend an additional reaction to make a counter attack against that opponent.',
  [charMap.R, aptitudes[3]],
  1,
  [[stayFrosty]]
)

export const tier1Talents = [
  new Talent(// 0|9
    'Cavalry',
    'Attack while riding on something',
    'While zipping around on some sort of mount or vehicle as the driver, you may make basic ranged attacks and charge melee attacks but may not reload. You may only do so with improvised, melee, and pistol type weapons. If you can fly, this talent allows you to make strafing ranged attacks and melee charge attacks while flying. Any kind of ranged attack can be a strafing ranged attack.',
    [charMap.R, aptitudes[1]],
    1,
    []
  ),
  coveringGround,// 1|10
  counterAttack,// 2|11
  new Talent(// 3|12
    'Dirty Fighting',
    'Compromise reactions in brawler hits',
    'Whenever you land an attack made from the brawler talent, exhaust a reaction from your opponent for every 2 successes you have on that attack. If you would exhaust their reactions below 0, they can take no actions the next round.',
    [charMap.M, aptitudes[3]],
    1,
    [[tier0Talents[1]]]
  ),
  new Talent(// 4|13
    'Dodge Counter',
    'May counter attack after dodging',
    'You may use a counter attack after dodging a melee attack.',
    [charMap.R, aptitudes[3]],
    1,
    [[counterAttack]]
  ),
  new Talent(// 5|14
    'Dog Pile',
    'May immediately enter other people\'s grapples',
    'When a grapple is initiated successfully, if you within your half reflexes score of meters, you may spend a reaction to dive into the grapple on behalf of either the aggressor or defender. You must role a grapple attempt to join the grapple. If joining on behalf of the aggressor, you enter as an assistor. If joining on behalf of the defender, the aggressor may oppose  with a reaction, but that takes them out of grapple. If so, you would become the aggressor if you manage to grapple them. If they do not react, you enter the grapple as an intervener.',
    [charMap.R, aptitudes[1]],
    1,
    []
  ),
  new Talent(// 6|15
    'Flexed',
    'Gain concussive property on all out attacks',
    'Your all out attacks gain the Concussive (0) ability. If that weapon is already concussive, increase its concussive value by 1.',
    [charMap.M, aptitudes[1]],
    1,
    []
  ),
  new Talent(// 7|16
    'Flimsical',
    'Use sleight of hand to slip free',
    'When attempting to slip free from grapple or a mosh pit, you may use a sleight of hand test instead of the usual Ref test.',
    [charMap.R, aptitudes[3]],
    1,
    [[{...skills[23], training: 'Professional'}]]
  ),
  new Talent(// 8|17
    'Gun Fu',
    'You may reload your ranged weapon while using it as a melee weapon',
    'You may gain up to a half action worth of reloading on a round where your use your ranged weapon as a melee weapon.',
    [charMap.R, aptitudes[3]],
    1,
    [[coveringGround], [enterTheImprovised]]
  ),
  new Talent(// 9|18
    'Hard Target',
    'Increase difficulty to hit you when running',
    'When you run, charge, counter charge, ride, or dive for cover, increase the difficulty of all ranged attack made against you by one step until your next round.',
    [charMap.R, aptitudes[2]],
    1,
    []
  ),
  new Talent(// 10|19
    'Quick Draw',
    'Draw weapons as a free action',
    'You may draw your weapon as a free action so long as that weapon is a melee, pistol, infantry, or improvised type weapon. (If your plan is to beat down with unarmed damage you do not need to draw your “weapons”.) You may draw a number of weapons freely equal to your half Acc score.',
    [charMap.R, aptitudes[3]],
    1,
    []
  ),
  improvisedFighter,// 11|20
  new Talent(// 12|21
    'Inspector',
    'Determine armor special rules at a glance',
    'You can determine all of the special rules regarding one or more suits of armor by seeing them in action.',
    [charMap.K, aptitudes[4]],
    1,
    [[
      { ...skills[8], name: skills[8].name + ' (War)', training: 'Basic'},
      { ...skills[28], name: skills[28].name + ' (Armorer)', training: 'Basic'}
    ]]
  ),
  new Talent(// 13|22
    'Lent Shot',
    'Shoot into another melee when engaged in your own',
    'You may shoot outside of your current melee without conceding your ability to react to your melee opponent\'s attacks.',
    [charMap.K, aptitudes[3]],
    1,
    [[supportFromAffar]]
  ),
  new Talent(// 14|23
    'Overwatch',
    'May use overwatch action',
    'You may use the overwatch action.',
    [charMap.K, aptitudes[2]],
    1,
    []
  ),
  new Talent(// 15|24
    'Primed',
    'Gain advantage on personal initiative',
    'You gain a general advantage on all personal initiative tests.',
    [charMap.K, aptitudes[3]],
    1,
    []
  ),
  new Talent(// 16|25
    'Razor\'s Edge',
    'May dodge after parrying',
    'After making a parry test, you may spend an additional reaction to make a dodge test.',
    [charMap.R, aptitudes[3]],
    1,
    [[stayFrosty]]
  ),
  new Talent(// 17|26
    'Refocus',
    'Reactions and half moves do not undo your aim bonus',
    'You can retain an aim bonus through making a reaction, half move, or change of target. Other kinds of movements still disrupt your aim bonus. With this talent, you can complete an aim action over the course of 2 turns while doing 1 or 2 half moves.',
    [charMap.A, aptitudes[3]],
    1,
    []
  ),
  new Talent(// 18|27
    'Rippling Frame',
    'No more need to brace',
    'You automatically count as braced when using your weapons.',
    [charMap.M, aptitudes[0]],
    1,
    []
  ),
  new Talent(// 19|28
    'Semi Auto',
    'May perform the semi-auto burst attack',
    'You may use the semi-auto burst attack.',
    [charMap.A, aptitudes[1]],
    1,
    []
  ),
  stayFrosty,// 20|29
  new Talent(// 21|30
    'Suppressing Fire',
    'May perform the suppressing fire attack',
    'You may use the suppressing fire attack.',
    [charMap.A, aptitudes[2]],
    1,
    []
  ),
  new Talent(// 22|31
    'Therapy',
    'Reduce your total insanity by 5',
    'Reduce your total insanity by 5. You may take this talent any number of times.',
    [charMap.W, aptitudes[7]],
    1,
    [[{name: '5 Insanity'}]]
  ),
  new Talent(// 23|32
    'The Slip',
    'May exit grapple when losing control of it',
    'If you are in control of grapple and an opponent is about to gain control, you may spend a reaction to exit that grapple.',
    [charMap.R, aptitudes[3]],
    1,
    []
  ),
  new Talent(// 24|33
    'Spontaneous Deathtrap',
    'May throw any explosive as if it were a grenade',
    'You may use any explosive device as if it were a grenade, although it may be harder to throw.',
    [charMap.I, aptitudes[4]],
    1,
    [[{ ...skills[22], training: 'Basic' }]]
  ),
  new Talent(// 25|34
    'Unarmed Fighter',
    'Your fisticuffs do additional damage',
    'Your unarmed attacks now do 2d6 damage.',
    [charMap.M, aptitudes[1]],
    1,
    [[ { ...tier0Talents[8], name: tier0Talents[8].name + ' (Unarmed)'} ]]
  ),
  new Talent(// 26|35
    'Unhinged',
    'Gain bonus to intimidate and filibuster from insanity points',
    'Whenever you make an intimidate or filibuster test, you gain a basic bonus of 1 for every 10 insanity score you have.',
    [charMap.P, aptitudes[8]],
    1,
    []
  )
]
