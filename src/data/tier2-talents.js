
import { Talent } from './talent'
import { charMap } from './characteristic'
import { aptitudes } from './aptitude'
import { skills } from './skill'
import { tier0Talents } from './tier0-talents'
import { tier1Talents } from './tier1-talents'
import { supportFromAffar } from './inverted-talents'

export const tier2Costs = [38, 34, 30, 26]

export const tier2Talents = [
  new Talent(// 0
    'Berserker\'s Balance',
    'React after performing all out attacks',
    'When you make an all out attack, instead of forfeiting your ability to make reactions, you spend 1.',
    [charMap.M, aptitudes[3]],
    2,
    [[tier1Talents[20]]]
  ),
  new Talent(// 1
    'Cleave',
    'Hit multiple enemies with all out attacks',
    'When you make an all out attack, you may hit a number of target in melee with you equal to your half Acc score. You use the same attack roll for all of them.',
    [charMap.M, aptitudes[1]],
    2,
    []
  ),
  new Talent(// 2
    'Commander',
    'Give allies advantage to resist fear and pinning',
    'When you are unaffected by fear or pinning, your allies that are not of higher rank than you gain a general advantage to their tests to resist fear and pinning. You may roll such tests in any order. You must be present for this effect to happen.',
    [charMap.P, aptitudes[8]],
    2,
    [[{ ...skills[6], training: 'Basic' }]]
  ),
  new Talent(// 3
    'Coping Mechanisms',
    'Reduce mental fatigue based on insanity',
    'You ignore 1 mental fatigue for every 15 insanity you have on all tests except tests to resist feedback.',
    [charMap.W, aptitudes[2]],
    2,
    [[{ name: '15 Insanity' }]]
  ),
  new Talent(// 4
    'Counter Charge',
    'May counter charge when charged',
    'When someone charges you, you may spend a reaction to immediately make a counter charge, meeting them halfway. Moving out of your current engagement still has the usual consequences.',
    [charMap.K, aptitudes[3]],
    2,
    [[tier1Talents[2]]]
  ),
  new Talent(// 5
    'Discriminant Justice',
    'Counter attack any enemy',
    'When you make a counter attack, you may make a counter attack against any opponent you are in melee with, not just the original attacker. This counter attack must be caused by an enemy\'s attack.',
    [charMap.K, aptitudes[3]],
    2,
    [[tier1Talents[2]]]
  ),
  new Talent(// 6
    'Dual Wield',
    'May use two one handed weapons',
    'You may use two one handed weapons. You may make attacks with both at the same time. This only works with attack actions, not attack reactions.',
    [charMap.M, aptitudes[1]],
    2,
    []
  ),
  new Talent(// 7
    'Fanatic',
    'Gain bonus to command based on insanity',
    'Whenever you make a command test, you gain a basic bonus of 1 for every 10 insanity score you have.',
    [charMap.P, aptitudes[8]],
    2,
    [[tier1Talents[26]]]
  ),
  new Talent(// 8
    'Footpath',
    'Gain advantage on awareness tests to spot dangers and ambushes',
    'You gain a general advantage when making awareness or survival tests to avoid traps or similar dangers.',
    [charMap.K, aptitudes[6]],
    2,
    [[{ ...skills[2], training: 'Basic' }], [{ ...skills[26], training: 'Basic' }]]
  ),
  new Talent(// 9
    'Instant Replay',
    'Force same dice result on physical characteristic test',
    'When you make a physical test such as an attack, counter attack or reaction in combat, you may set your dice result to the same value you got the last time you made that test in that combat. If you do so, you immediately gain 1 physical exhaustion. You may only use this ability once per round.',
    [charMap.R, aptitudes[3]],
    2,
    []
  ),
  new Talent(// 10
    'Iron Will',
    'Gain advantages on resisting fear and pinning',
    'You gain 2 general advantages for all tests to resist fear pinning and mind control.',
    [charMap.W, aptitudes[2]],
    2,
    [[{ ...tier0Talents[5], name: tier0Talents[5].name + ' (Fear)' }]]
  ),
  new Talent(// 11
    'Leadborn',
    'Use ranged weapons in melee without penalty',
    'You may use infantry weapons in melee as if they were pistol weapons.',
    [charMap.A, aptitudes[3]],
    2,
    []
  ),
  new Talent(// 12
    'Machete',
    'Use any ranged attack with most ranged weapons while driving',
    'You may make any ranged attack while riding a mount or vehicle as the driver with any ranged weapon that is exclusively of type, pistol, infantry or heavy. You may also do so with a weapon of type turret so long as that weapon is part of the vehicle/mount you are riding. You still cannot reload while moving.',
    [charMap.A, aptitudes[1]],
    2,
    [[tier1Talents[0]]]
  ),
  new Talent(// 13
    'Magic Moonshine',
    'Build spells using basic facilities',
    'You do not require advanced facilities to build spells from templates or memory. You do still need components.',
    [charMap.I, aptitudes[4]],
    2,
    [[{ ...skills[15], training: 'Professional' }]]
  ),
  new Talent(// 14
    'Master of the Pit',
    'Gain massive bonuses when fighting in a mosh pit',
    'When fighting in a mosh pit, your unarmed and improvised attacks deal double damage and you may make any kind of mosh action and ignore other penalties from being outnumbered. You may also perform most pit actions in melee',
    [charMap.M, aptitudes[3]],
    2,
    [[tier1Talents[25]]]
  ),
  new Talent(// 15
    'Nosy',
    'Gain advantage on tests to locate valuable items or documents',
    'You gain a general advantage when making awareness or inquiry tests to locate valuable items or documents. This includes spy gear.',
    [charMap.K, aptitudes[7]],
    2,
    [[{ ...skills[2], training: 'Basic' }], [{...skills[10], training: 'Basic' }]]
  ),
  new Talent(// 16
    'Not Today',
    'Gain up to 4 reactions per round',
    'You gain 2 more reactions for a total of 4 reactions per round.',
    [charMap.R, aptitudes[2]],
    2,
    [[tier1Talents[20]]]
  ),
  new Talent(// 17
    'Professional Wrestler',
    'Grapple 2 opponents and react while in grapple',
    'You may grapple against 2 opponents at the same time. You may use reactions normally while in grapple without breaking out of it and can use the personal shield reaction.',
    [charMap.M, aptitudes[2]],
    2,
    []
  ),
  new Talent(// 18
    'Quick Grab',
    'May obtain an improvised weapon as a free action and at start of combat',
    'You may obtain an improvised weapon as a free action. At the start of combat, on the first round where you can act, you can freely obtain an improvised weapon before the first turn.',
    [charMap.K, aptitudes[6]],
    2,
    [[tier1Talents[10]], [tier1Talents[11]]]
  ),
  new Talent(// 19
    'Ready',
    'Gain general advantage on party initiative',
    'You gain a general advantage on party initiative. This talent stacks.',
    [charMap.K, aptitudes[6]],
    2,
    [[tier1Talents[15]]]
  ),
  supportFromAffar,// 20
  new Talent(// 21
    'Swift Attack',
    'Deal additional hits with basic attacks',
    'When you succeed a standard attack, you hit an additional time for every 3 points of success.',
    [charMap.R, aptitudes[1]],
    2,
    []
  ),
  new Talent(// 22
    'I See You',
    'Increase dice damage from accurate shots',
    'The extra dice damage from accurate weapon fire is increased from 1d4 to 1d6.',
    [charMap.K, aptitudes[3]],
    2,
    [[tier1Talents[17]]]
  ),
  new Talent(// 23
    'Retcon',
    'Take back something you just said',
    'You may amend what you have just said in any conversation with an npm. Using this ability gives 1 mental fatigue. In some situations you may amend a prior statement for more mental fatigue.',
    [charMap.P, aptitudes[7]],
    2,
    [[{ ...skills[9], training: 'Professional' }], [{ ...skills[14], training: 'Professional' }]]
  ),
  new Talent(// 24
    'Flashback',
    'Return to a past conversation',
    'You may return to a conversation from the past that you remember to fill out a detail or make a request that you neglected. This can lead to whipping out a special requisition you\'ve been saving, but you may only get one item per session this way.',
    [charMap.P, aptitudes[8]],
    2,
    []
  ),
  new Talent(// 25
    'Size Up',
    'See the characteristics of npcs',
    'You may make a standard scrutiny test to obtain the characteristic scores of npcs. On success, you see the M score. Then for every 2 points of success you see in this order: E, Per, K, Ref, Int, Acc, Will. A harder test is made for npcs that are not humaniod.',
    [charMap.K, aptitudes[7]],
    2,
    [[skills[21]]]
  )
]
