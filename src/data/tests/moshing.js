
import { Asset, Test } from '../models'
import { charMap } from '../characteristic'

export class MoshAction {

  constructor(name, desc, char, variance, minRatio, diff1, diff2, diff3, diff4, diff5) {
    this.constructor.apply(this, name, desc, char, variance, minRatio, diff1, diff2, diff3, diff4, diff5)
  }

  static apply (funcObj, name, desc, char, variance, minRatio, diff1, diff2, diff3, diff4, diff5) {
    Asset.apply(funcObj, name, desc)
    Test.apply(funcObj, char, variance)
    funcObj.minRatio = minRatio
    funcObj.diff1 = diff1
    funcObj.diff2 = diff2
    funcObj.diff3 = diff3
    funcObj.diff4 = diff4
    funcObj.diff5 = diff5
  }
}

export const moshActions = [
  new MoshAction(
    'Pummel',
    'Make an unarmed standard attack or and improvised weapon standard attack. Any hit that you get hits a random opponent in the mosh pit. If you happen to have a melee weapon on hand, that weapon counts as an improvised weapon in the pit. Using a two handed weapon in this scenario gives you a general disadvantage to this test.',
    charMap.R,
    'Standard',
    'None',
    'Standard',
    'Standard',
    'Standard',
    'Standard',
    'Standard'
  ),
  new MoshAction(
    'Break Out',
    'Attempt to force your way out of the pit with brute strength. If you succeed this test, you may exit the mosh pit. Remember that leaving the pit puts your allies in a more dire situation.',
    charMap.M,
    'Standard',
    'None',
    'Hopeless',
    'Difficult',
    'Standard',
    'Common',
    'Easy'
  ),
  new MoshAction(
    'Escape',
    'Attempt to slip out of the pit. If you succeed this test, you may exit the mosh pit. But again, your allies will have a harder time for it.',
    charMap.R,
    'High',
    'None',
    'Hopeless',
    'Difficult',
    'Standard',
    'Common',
    'Easy'
  ),
  new MoshAction(
    'Cast into the Pit',
    'Attempt to bring another opponent close to the pit into the pit. This Ref test may be evaded. If you succeed, the targeted opponent joins the pit.',
    charMap.R,
    'Standard',
    '1 - 2',
    '-',
    'Brutal',
    'Difficult',
    'Standard',
    'Standard'
  ),
  new MoshAction(
    'Rescue',
    'Grab a character and hoist them over your shoulder. If you succeed you are carrying that person and may make a free Break Out attempt. When you exit the pit, the hoisted character comes with you. While holding someone, any actions you take other than Break Out gain a general disadvantage. If the character does not want to be carried, they may oppose your rescue attempt with a nf M test that is the same difficulty as the rescue attempt to a maximum of standard difficulty. While on your shoulder they cannot act, but may make an opposed hth standard M test against you to resume their moshing.',
    charMap.M,
    'Standard',
    'None',
    'Brutal',
    'Difficult',
    'Standard',
    'Challenging',
    'Common'
  ),
  new MoshAction(
    'Ring Out',
    'Grab someone and throw them out of the pit. They may oppose with a nf standard M test.  If you succeed, they may make a standard acrobatics test to land on their feet. If they fail, they land prone and take your choice of 1d6 + 1 damage ignoring armor or one unarmed hit ignore armor negated by cat fall.',
    charMap.M,
    'Standard',
    '1 - 2',
    '-',
    'Difficult',
    'Standard',
    'Standard',
    'Standard'
  )
] 
