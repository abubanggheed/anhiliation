
import { Talent } from './talent'
import { characteristics } from './characteristic'
import { aptitudes } from './aptitude'
import { skills } from './skill'
import { tier0Talents } from './tier0-talents'
import { tier1Talents } from './tier1-talents'
import { tier2Talents } from './tier2-talents'
import { enterTheImprovised } from './inverted-talents'

export const tier3Costs = [50, 46, 42, 38]

const goodGuyWithAGun = new Talent(
  'Good Guy with a Gun',
  'Dual wield infantry class weapons',
  'You may dual wield infantry class ranged weapons for ranged attacks. It still takes 2 hands to reload 1 of them.',
  [characteristics[0], aptitudes[3]],
  3,
  [[tier2Talents[6]], [{ ...tier0Talents[8], name: tier0Talents[8].name + ' (Infantry)'}]]
)

const unarmedMaster = new Talent(
  'Unarmed Master',
  'Your unarmed combat gains perks',
  'Your unarmed damage is now 1d10, and you may parry any melee weapon when unarmed. When doing so, you are deflecting your opponents arms, not the actual weapons.',
  [characteristics[0], aptitudes[3], aptitudes[2]],
  3,
  [[tier1Talents[25]]]
)

const leadLove = new Talent(
  'Leadlove',
  'You may use heavy weapons in melee',
  'You may use heavy weapons in melee as if they were pistols.',
  [characteristics[0], aptitudes[1]],
  3,
  [[tier2Talents[11]]]
)

export const tier3Talents = [
  new Talent(// 0|58
    'Cap\'n Cappin',
    'Dual wield heavy class weapons',
    'You may dual wield heavy class ranged weapons for ranged attacks. It still takes 2 hands to reload 1 of them.',
    [characteristics[0], aptitudes[1]],
    3,
    [[goodGuyWithAGun]]
  ),
  new Talent(// 1|59
    'Counter Shot',
    'Counter ranged attacks with single shots',
    'After using a dodge on a ranged attack if your opponents attack score was reduced to -3 or less, you may spend an additional reaction to make a single shot attack against that opponent.',
    [characteristics[0], aptitudes[3]],
    3,
    [[tier1Talents[4]]]
  ),
  new Talent(// 2|60
    'Crushing Blows',
    'Deal physical exhaustion when you make all out attacks',
    'If one of your all out attacks is not dodged, you may make an opposed hth S test. If you succeed by at least 2, your opponent gains 1 physical exhaustion.',
    [characteristics[1], aptitudes[1]],
    3,
    [[tier1Talents[6]]]
  ),
  enterTheImprovised,// 3|61
  new Talent(// 4|62
    'Generalist',
    'Are considered trained in all common lores',
    'You are considered trained in every common lore skill. If you are already trained in that lore, you instead gain a +1 basic bonus to it.',
    [characteristics[4], aptitudes[0]],
    3,
    [[{ ...skills[8], name: skills[8].name + ' (x4)', training: 'Basic' }]]
  ),
  goodGuyWithAGun,// 5|63
  new Talent(// 6|64
    'Immobile Object',
    'You gain bonus to defensive opposed strength tests',
    'You gain a basic bonus of +4 for all opposed S test where you are the responder.',
    [characteristics[1], aptitudes[2]],
    3,
    []
  ),
  new Talent(// 7|65
    'Immortal',
    'You have double wounds',
    'You have double your normal maximum wounds.',
    [characteristics[2], aptitudes[2]],
    3,
    []
  ),
  new Talent(// 8|66
    'Indiscriminant Justice',
    'Use ranged attacks in mosh pits',
    'You may use ranged attacks in mosh pits as if they were regular melees. This includes your beloved heavy weapons. These are made in place of unarmed or improvised weapon attacks. (They do not deal double damage.) Automatic fire can hit allies.',
    [characteristics[0], aptitudes[1]],
    3,
    [[leadLove], [tier2Talents[14]]]
  ),
  new Talent(// 9|67
    'Kung Fu Grip',
    'May enter grapple as a follow up to an unarmed attack',
    'After making any unarmed attack including a counter attack, if you got a result of at least 4, you may reduce your result by 4. Then after damage, you grapple that opponent.',
    [characteristics[0], aptitudes[3]],
    3,
    [[unarmedMaster]]
  ),
  new Talent(// 10|68
    'Latch On',
    'Leap onto a moving mount or vehicle',
    'You may make an acrobatics test to leap onto a moving vehicle or mount. The difficulty depends on the size and speed of your target. If you succeed by at least 3, you do not go prone when latching on. If there is an enemy by where you are leaping, that enemy may spend a reaction to free grapple you.',
    [characteristics[3], aptitudes[3]],
    3,
    [[{ ...skills[19], training: 'Basic' }], [{ ...skills[0], training: 'Expert' }]]
  ),
  leadLove,// 11|69
  new Talent(// 12|70
    'Leap Back',
    'You may jump back after making a melee attack',
    'After making a melee attack, success or not, you may make an acrobatics test at 2d8 – 16. If you succeed, you may leap back a number of meters equal to your half Ref score.',
    [characteristics[3], aptitudes[6]],
    3,
    [[{ ...skills[0], training: 'Professional' }]]
  ),
  new Talent(// 13|71
    'Lightning Attack',
    'Gain additional hits with standard attack',
    'When you succeed a standard attack, you hit an additional time for every 2 points of success.',
    [characteristics[0], aptitudes[1]],
    3,
    [[tier2Talents[21]]]
  ),
  new Talent(// 14|72
    'Lightning Reflexes',
    'You may test personal initiative to act in an ambush',
    'When ambushed, you may make a personal initiative test. If you get a result of 16 or higher, you may act that round.',
    [characteristics[3], aptitudes[6]],
    3,
    [[tier2Talents[19]]]
  ),
  new Talent(// 15|73
    'Profound Innocence',
    'Gain advantage to charm and deceive and impose disadvantage to scrutiny',
    'You give off the impression of someone who is a terrible liar, and tries to live honestly as much as possible. Your gain a general advantage on all charm and deceive tests and anyone who make a scrutiny test against you gains a general disadvantage.',
    [characteristics[7], aptitudes[7]],
    3,
    [[{ ...skills[9], training: 'Expert' }]]
  ),
  new Talent(// 16|74
    'Reckless Abandon',
    'Transfer dice from feedback role to focus role',
    'When making a spell use test, you may roll up to three extra dice for that test. For each die, roll 1 less die on the test to resist feedback. This may result in negative dice.',
    [characteristics[4], aptitudes[4]],
    3,
    [[{ ...skills[24], training: 'Expert' }]]
  ),
  new Talent(// 17|75
    'Slasher',
    'Gain half Acc score bonus to damage',
    'You gain a basic bonus of your half Acc score to all your damage rolls.',
    [characteristics[0], aptitudes[1]],
    3,
    []
  ),
  new Talent(// 18|76
    'Slippery Bastard',
    'You gain scale-able reactions',
    'Instead of having a fixed number of reactions per round, you have reactions equal to the average of your Acc and Ref scores rounded up.',
    [characteristics[0], characteristics[3], aptitudes[2]],
    3,
    [[tier2Talents[16]]]
  ),
  new Talent(// 19|77
    'Sound of Mind',
    'Ignore ill effects of insanity',
    'You ignore all negative effects of insanity or from gaining insanity with the exception of terminal insanity.',
    [characteristics[6], aptitudes[2]],
    3,
    [[{ ...tier1Talents[22], name: tier1Talents[22].name + ' (x10)'}]]
  ),
  unarmedMaster,// 20|78
  new Talent(// 21|79
    'Unstoppable Force',
    'Knock over opponents while charging',
    'When charging you may make a free knock down attack against any number of characters in your path. Failing to knock down an opponent ends the charge. You may make target-less continuous charges with this talent.',
    [characteristics[1], aptitudes[1]],
    3,
    []
  ),
  new Talent(// 22|80
    'Vengeance',
    'May counter attack when hit',
    'You may make counter attacks after being hit, even when you do not attempt an evasion.',
    [characteristics[0], aptitudes[1]],
    3,
    [[tier1Talents[2]]]
  )
]
