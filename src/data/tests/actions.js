
import { Asset, Test } from '../models'
import { charMap } from '../characteristic'

export class Action {
  constructor(name, desc, timing, type, char, difficulty, variance, talentRequired) {
    this.constructor.apply(this, name, desc, timing, type, char, difficulty, variance, talentRequired)
  }

  static apply( funcObj, name, desc, timing, type, char, difficulty, variance, talentRequired) {
    Asset.apply(funcObj, name, desc)
    Test.apply(funcObj, char, variance)
    funcObj.timing = timing
    funcObj.type = type
    funcObj.difficulty = difficulty
    funcObj.talentRequired = talentRequired
  }
}

export const combatActions = [
  new Action('Acquire Weapon',
  'Attempt to acquire an improvised weapon from your immediate surroundings. Obtaining a one handed improvised weapon takes a half action, a two handed weapon takes a full action. The difficulty of this test is often fairly low, but depends on your surroundings. A failure on this test usually means you cant find a weapon by you, but do spot one a short distance away.',
  'Varies',
  'Misc',
  charMap.K,
  'Varies',
  'High',
  false
  ),
  new Action('All Out Attack',
  'Make a melee attack that is far more likely to get a good score against your opponent. However, you forfeit your ability to make reactions until your next turn.',
  'Full',
  'Attack',
  charMap.R,
  'Common',
  'High',
  false
  ),
  new Action('Attack Of Opportunity',
  'If an opponent you are engaged in melee with moves away from you, you may spend a reaction to make this melee attack against them using whatever weapon you have on hand.',
  'Reaction',
  'Attack',
  charMap.R,
  'Difficult',
  'Standard',
  false
  ),
  new Action('Aim',
  'Spend a round focusing your sights on a target. Decrease the difficulty of the next ranged attack you make against that target by one step. If you use a move or use a reaction between aiming and taking the shot, you forfeit the aim bonus.',
  'Full',
  'Concentration',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Brace',
  'Set your weapon up to deal with the inevitable recoil from using it.',
  'Half',
  'Misc',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Brawler',
  'When the conditions are met, you may make this free unarmed attack against your opponent. If your opponent also has brawler, this is a hth opposed test instead. This attack cannot be evaded.',
  'Free',
  'Attack',
  charMap.R,
  'Standard',
  'Standard',
  true
  ),
  new Action('Charge',
  'Move up to 3 times your base movement speed towards an opponent. You count as charging that opponent. If you can reach them, you make the attack against them that round. You must be at least 3 meters away in order to begin a charge at a character. However, you may charge a closely gathered group of opponents and choose which one you attack when you actually get there. If an opponent is running away, you may instead move 6 times your base movement speed to run them down.',
  'Full',
  'Attack/Move',
  charMap.A,
  'Challenging',
  'Standard',
  false
  ),
  new Action('Counter Attack',
  'If your parry reduced an opponent\'s melee attack to a score of -2 or less, you may spend a reaction to make this attack. Counter attacks may not be counter attacked.',
  'Reaction',
  'Attack',
  charMap.R,
  'Standard',
  'Standard',
  true
  ),
  new Action('Counter Charge',
  'If an opponent would attack you with a charge attack or get within 3 meters of you, you may instead spend a reaction to meet them halfway in a mutual charge.',
  'Reaction',
  'Move',
  undefined,
  '-',
  '-',
  true
  ),
  new Action('Counter Shot',
  'After using a dive for cover on a ranged attack with a success of 6 or higher, you may spend an additional reaction to make a single shot attack against that opponent. This attack is considered to occur while you are diving for cover.',
  'Reaction',
  'Attack',
  charMap.A,
  'Standard',
  'Standard',
  true
  ),
  new Action('Defensive Stance',
  'Spend the entire round focusing on surviving until the next. Until your next turn, increase the difficulty of all attacks made against you by one step.',
  'Full',
  'Concentration',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Disengage',
  'Remove yourself from melee with care. This does not allow an attack of opportunity. (Hint: there is no need to disengage if your opponent used an all out attack.)',
  'Half',
  'Move',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Dive for Cover',
  'Make a R test. On success, move up to success meters to place yourself behind available cover. The attack you are trying to avoid still hits you, but the cover you found applies to that attack. You may use this reaction to avoid blasts altogether even if there is no cover around. If you move more than your base movement speed this way between your turns, this action takes you prone.',
  'Reaction',
  'Move',
  charMap.R,
  'Standard',
  'Standard',
  false
  ),
  new Action('Dodge',
  'This is an evasion. Duck and weave to avoid being hit. As an evasion, you may use this skill to oppose any melee attack or ranged attack involving a slow moving projectile made against you as an nf test.',
  'Reaction',
  'Move',
  charMap.R,
  'Difficult',
  'Standard',
  false
  ),
  new Action('Dog Pile',
  'If a grapple occurs within your base movement speed meters away, you may spend a reaction to jump in and enter that grapple.',
  'Reaction',
  'Attack/Move',
  undefined,
  '-',
  '-',
  true
  ),
  new Action('Draw',
  'Draw your holstered weapon, or pick up a dropped weapon lying at your feet.',
  'Half',
  'Misc',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Drop',
  'Drop what you are holding to free your hands.',
  'Free',
  'Misc',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Extinguish',
  'Put out the fire on yourself or someone next to you.',
  'Full',
  'Misc',
  charMap.R,
  'Standard',
  'Standard',
  false
  ),
  new Action('Full Auto Fire',
  'Hold down the trigger and unload ammunition into an opponent of your choice. This is similar to single shot, except on success, you may hit your target with an additional bullet fired for every 2 points of success. Weapons on full auto have a 5% chance of jamming.',
  'Full',
  'Attack',
  charMap.A,
  'Standard',
  'Standard',
  false
  ),
  new Action('Full Move',
  'Spend the entire round advancing to a position that you please.',
  'Full',
  'Move',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Grapple',
  'Attempt to grapple an opponent. This may be evaded like a normal attempt. If you succeed, you enter grapple with them in control of that grapple. You may not grapple opponents that are much larger than you are.',
  'Half',
  'Attack',
  charMap.R,
  'Standard',
  'Standard',
  false
  ),
  new Action('Half Move',
  'Spend half of the round moving to a better location.',
  'Half',
  'Move',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Latch On',
  'Make an acrobatics test to leap onto and cling to a vehicle that is passing by. The difficulty of this test depends on the size and speed of your target. If you succeed by at least 3, you do not go prone when latching on. If there is an enemy by where you are leaping, that enemy may spend a reaction to free grapple you.',
  'Full',
  'Move',
  charMap.R,
  'Varies',
  'Low',
  true
  ),
  new Action('Leap Back',
  'You may take this action after making a melee attack, even on failure. Make an acrobatics test. If you succeed, you may leap back a number of meters equal to your base movement speed.',
  'Free',
  'Move',
  charMap.R,
  'Standard',
  'Standard',
  true
  ),
  new Action('Mounted Dodge',
  'This is an evasion. When an opponent aims for the mount on which you ride you may oppose that attack with a nf ride test. The difficulty of the ride test depends on the size and speed of your mount. If they are aiming for you, you may use either a mounted dodge or a normal dodge.',
  'Reaction',
  'Move',
  charMap.R,
  'Difficult',
  'Standard',
  false
  ),
  new Action('Mutual Charge',
  'Both you and your opponent make charge attacks against each other. To determine which charge attack happens first, you each make a personal initiative roll, and whoever has the higher result has their charge attack happen first. Mutual charges happen when you charge an opponent that has been charging you, or through counter charges.',
  'Full',
  'Attack/Move',
  charMap.A,
  'Challenging',
  'Standard',
  false
  ),
  new Action('Overwatch',
  'Specify a direction. The next time an enemy appears, or emerges from cover in that direction (including to make an attack) you first make this attack against them. Overwatch attacks cannot be fully automatic fire.',
  'Full',
  'Attack',
  charMap.A,
  'Difficult',
  'High',
  true
  ),
  new Action('Parry',
  'This is an evasion. Intercept an attack mid swing. As an evasion, you may use this skill to oppose any melee attack made against you as an nf test.',
  'Reaction',
  'Misc',
  charMap.R,
  'Standard',
  'Standard',
  false
  ),
  new Action('Reload',
  'Put ammunition into your gun.',
  'Varies',
  'Concentration',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Run',
  'Move up to 6 times your base movement speed. Until your next turn, decrease the difficulty of all melee attacks made against you by 1 step.',
  'Full',
  'Move',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Semi Auto Burst',
  'Fire a burst of bullets at your opponent. This is similar to single shot, except on success, you may hit your target with an additional shot fired for every 3 points of success.',
  'Half',
  'Attack',
  charMap.A,
  'Standard',
  'Standard',
  false
  ),
  new Action('Single Shot',
  'Fire a single bullet at your opponent.',
  'Half',
  'Attack',
  charMap.A,
  'Standard',
  'Standard',
  false
  ),
  new Action('Snap Out of It',
  'Make a willpower test benefiting from Resistance (Fear) to undo most of the effects of a bad fear or pinning test.',
  'Free',
  'Concentration',
  charMap.W,
  'Difficult',
  'Low',
  false
  ),
  new Action('Stabilize',
  'Stop a character from dying by using first aid.',
  'Full',
  'Concentration',
  charMap.I,
  'Standard',
  'Standard',
  false
  ),
  new Action('Stand/Mount',
  'Stand up from prone, or mount onto an animal or vehicle.',
  'Half',
  'Move',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Standard Attack',
  'Attack an opponent with a melee weapon. Certain talents increase the number of hits you may get.',
  'Half',
  'Attack',
  charMap.R,
  'Standard',
  'Standard',
  false
  ),
  new Action('Suppressing Fire',
  'Send full auto fire in a direction of your choice. Opponents in that area must make a standard willpower test or become pinned. For every enemy affected, you may make the Brutal attack role to attempt to hit them with 1 bullet. If you have hit an enemy for every bullet you fired, stop making these attacks. Suppresive fire incurs a 5% change of jamming.',
  'Continuous',
  'Attack',
  charMap.A,
  'Brutal',
  'High',
  true
  ),
  new Action('Tactical Advance',
  'Move from one position of cover to another one up to your base movement speed meters in any direction. This triggers overwatch attacks.',
  'Full',
  'Move',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Throw',
  'Throw an item at a target of your choosing. This counts as a single shot attack using a range of your M score.',
  'Half',
  'Attack',
  charMap.A,
  'Standard',
  'Standard',
  false
  ),
  new Action('Unjam',
  'Remove the jamming from your weapon so that it can fire normally. You must be proficient in that type of weapon to do this.',
  'Full',
  'Concentration',
  undefined,
  '-',
  '-',
  false
  ),
  new Action('Use Spell',
  'Now we\'re talking. Spice up the battle with some magic. Then suffer the consequences.',
  'Varies',
  'Concentration',
  charMap.I,
  'Varies',
  'Varies',
  false
  ),
  new Action('Use Skill',
  'Use some skill that applies to your situation.',
  'Varies',
  'Varies',
  { abvr: 'Varies' },
  'Varies',
  'Varies',
  false
  )
]
