
import { Talent } from './talent'
import { characteristics } from './characteristic'
import { aptitudes } from './aptitude'

export const tier0Costs = [14, 12, 10, 8]

export const tier0Talents = [
  new Talent(// 0|0
    'Ambidextrous',
    'Ignore penalties for using your off hand',
    'You take no penalties for using weapons or other items with your weak hand.',
    [characteristics[0], aptitudes[3], aptitudes[0]],
    0,
    []
  ),
  new Talent(// 1|1
    'Brawler',
    'May be able to do an unarmed attack on parry',
    'Whether on the offense or defense, whenever an opposed melee attack is defended exactly (totaling -1 for the attacker) by an evasion, you may make a free unarmed melee attack that can not be evaded. If your opponent also has brawler, you make a hth opposed Acc test of 2d8-16 to determine who gets to attempt the attack.',
    [characteristics[0], aptitudes[1], aptitudes[2]],
    0,
    []
  ),
  new Talent(// 2|2
    'Back Spring',
    'Stand immediately',
    'You may stand from prone as a free action.',
    [characteristics[3], aptitudes[3]],
    0,
    []
  ),
  new Talent(// 3|3
    'Catfall',
    'Reduce damage and noise from falling',
    'The height you can fall from safely or silently is doubled.',
    [characteristics[3], aptitudes[3]],
    0,
    []
  ),
  new Talent(// 4|4
    'Night Fighter',
    'Act normally in poor lighting or obscured vision',
    'You are unaffected by poor lighting or vision when making reactions or attacks.',
    [characteristics[5], aptitudes[6]],
    0,
    []
  ),
  new Talent(// 5|5
    'Resistance',
    'Gain a bonus on resisting ill effects',
    'You gain a +2 basic bonus on tests to resist negative effect from a specific hazard. You may take this talent any number of times, each time for a different hazard. The common hazards are: fear, mind control, feedback, toxin, radiation, exposure, concussive, and starvation. The relevant characteristic aptitude is T or Will depending whether the hazard inflicts physical or mental trauma.',
    [aptitudes[2]],
    0,
    [],
    [[characteristics[2], characteristics[6]]]
  ),
  new Talent(// 6|6
    'Spell Training',
    'Learn how to guard against feedback from a spell',
    'You are able to resist feedback for a given spell normally, and only take 1 mental fatigue when you cast it. You may take this talent any number of times, each time specifying a different spell. You must possess the spell in order to train in it. Whenever you take this talent, you gain 1d4 insanity points. From learning how to handle the feedback signature.',
    [characteristics[6], aptitudes[4]],
    0,
    []
  ),
  new Talent(// 7|7
    'Subdue',
    'May attack normally in melee while avoiding killing blows',
    'So long as you are using a blunted weapon, you may deal non-lethal damage without taking any penalties.',
    [characteristics[0], aptitudes[1]],
    0,
    []
  ),
  new Talent(// 8|8
    'Weapon Proficiency',
    'May use a specific class of weapon without penalties',
    'You are considered trained in a certain class of weapon and may use it without penalty. If you use a weapon without training, the reload time is tripled, and any attack gains 1 general disadvantage. You may take this talent any number of times, once for each class or weapon. The common classes of weapons are: Unarmed, Improvised, Pistol, Melee, Infantry, Heavy, Turret,  Artillery, and Specific. Weapons that are exotic enough such as gun-chaku require their own proficiency.',
    [characteristics[0], aptitudes[1]],
    0,
    []
  )
]
