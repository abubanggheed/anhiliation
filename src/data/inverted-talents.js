
import { Talent } from './talent'
import { characteristics } from './characteristic'
import { aptitudes } from './aptitude'
import { tier0Talents } from './tier0-talents'

export const supportFromAffar = new Talent(
  'Support From Afar',
  'Shoot into melee without penalty',
  'When shooting into a melee that is not your own, you do not suffer from the usual penalties.',
  [characteristics[0], aptitudes[3]],
  2,
  []
)

export const improvisedFighter = new Talent(
  'Improvised Fighter',
  'Improvised Weapons do more damage and can be used to parry normally',
  'Improvised weapons that you pick up now do 1d10 damage and can parry without penalty.',
  [characteristics[0], aptitudes[1]],
  1,
  [[{ ...tier0Talents[8], name: tier0Talents[8].name + ' (Improvised)'}]]
)

export const enterTheImprovised = new Talent(
  'Enter the Improvised',
  'Your improvised weapons gain additional perks',
  'Your improvised weapons deal 1d12 damage and count as being balanced and flexible. You may use improvised weapons in grapple as if they were unarmed attacks.',
  [characteristics[0], aptitudes[3], aptitudes[2]],
  3,
  [[improvisedFighter]]
)
