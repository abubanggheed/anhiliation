
import { Asset, Test } from '../models'
import { charMap } from '../characteristic'

export class GrappleAction {

  constructor(name, desc, char, variance, role, diff, opDiff) {
    this.constructor.apply(this, name, desc, char, variance, role, diff, opDiff)
  }

  static apply (funcObj, name, desc, char, variance, role, diff, opDiff) {
    Asset.apply(funcObj, name, desc)
    Test.apply(funcObj, char, variance)
    funcObj.role = role
    funcObj.diff = diff
    funcObj.opDiff = opDiff
  }
}

export const grappleActions = [
  new GrappleAction(
    'Break Free',
    'Make a hth opposed M test. If you win, you exit this grapple. This action cannot be taken if you are prone.',
    charMap.M,
    'Standard',
    'Grappled',
    'Standard',
    'Standard'
  ),
  new GrappleAction(
    'Flail',
    'Make a standard attack as unarmed weapon. If your opponent evades this attack, they end the grapple.',
    charMap.R,
    'High',
    'Grappled',
    'Brutal',
    '-'
  ),
  new GrappleAction(
    'Grapple',
    'Attempt to grapple someone else that is next to you. This means letting go of your current opponent unless you are a professional wrestler.',
    charMap.R,
    'Standard',
    'Grappler',
    'Standard',
    '-'
  ),
  new GrappleAction(
    'Move',
    'Make a hth opposed M test. If you win you may move yourself and your opponent a number of meters away equal to the result up to your base movement speed meters away.',
    charMap.M,
    'Low',
    'Grappler',
    'Standard',
    'Standard'
  ),
  new GrappleAction(
    'Personal Shield',
    'As an evasion to an attack from another opponent, you may put your grappled opponent between yourself and the attack so that they take the hits. This requires a talent to use.',
    charMap.M,
    'High',
    'Grappler',
    'Standard',
    'Standard'
  ),
  new GrappleAction(
    'Pin',
    'Make a hth opposed M test. If you win, your opponent becomes pinned.',
    charMap.M,
    'High',
    'Grappler',
    'Standard',
    'Standard'
  ),
  new GrappleAction(
    'Ready',
    'Ready an item for use. You may ready one of your opponent\'s items if you wish.',
    undefined,
    '-',
    'Grappler',
    '-',
    '-'
  ),
  new GrappleAction(
    'Slip Free',
    'Make a hth Ref test opposed by M. If you win, exit the grapple.',
    charMap.R,
    'Standard',
    'Grappled',
    'Standard',
    'Standard'
  ),
  new GrappleAction(
    'Smackdown',
    'Make a hth opposed M test. If you win, slam your opponent down prone on the ground dealing 1 unarmed hit ignoring armor.',
    charMap.M,
    'Standard',
    'Grappler',
    'Standard',
    'Standard'
  ),
  new GrappleAction(
    'Stand',
    'Make a hth opposed M test. If you win, stand from being prone. As the grappler you can stand without making the test, but may make the test to force your opponent to stand.',
    charMap.M,
    'Low',
    'Either',
    'Standard',
    'Standard'
  ),
  new GrappleAction(
    'Take Control',
    'Make a hth opposed M test. If you win, you become the grappler.',
    charMap.M,
    'Low',
    'Grappled',
    'Standard',
    'Standard'
  ),
  new GrappleAction(
    'Throw',
    'Make a hth opposed M test. If you win, throw your opponent a short distance away, dealing 1 unarmed hit ignoring armor. This ends the grapple. If your opponent is prone, increase the difficulty of your test by 1 step. This is useful for countering the latch on talent.',
    charMap.M,
    'High',
    'Grappler',
    'Standard',
    'Standard'
  ),
  new GrappleAction(
    'Use Item',
    'Use the item you have readied.',
    undefined,
    '-',
    'Grappler',
    '-',
    '-'
  ),
  new GrappleAction(
    'Wallop',
    'Make a standard attack as unarmed weapon. Grappled opponents cannot make evasions.',
    charMap.R,
    'Standard',
    'Grappler',
    'Challenging',
    '-'
  )
]
