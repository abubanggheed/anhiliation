import React from 'react'
import { Button } from 'reactstrap'

export default props => {

  const makeHeader = (par, text) => <h4>
    <Button color="secondary" onClick={props.toggleParagraph(par)}>{text}</Button>
  </h4>

  return <>
    <h3>Material Possessions</h3>
    {makeHeader('armor', 'Armor')}
    {props.pars.armor && <>
      <p>
        Armor fulfills 3 essential needs.
        First and foremost, it provides armor protection (AP) which is the most common form of absorption and thus will keep your wounds from going down too fast.
        Secondly, it provides holsters to store weapons, grenades, and ammunition that they can be toted around with you as you explore on foot.
        Thirdly, they are a place to install important gear, such as energy shields, spells, and more.
        Armor that does well in all three categories is both rare and expensive.
        There is sometimes a trade off.
        You will not find a suit of armor that provides both a jump pack and a place to stash a heavy weapon.
      </p>
      <p>
        Armor comes with a few downsides.
        Heavy armor may restrict movement if you're not strong enough to handle it.
        Armor that is too restrictive can give you a disadvantage in grapple.
        It is important to take careful stock of armor, both yours and your opponents'.
        The gear your bring to battle dramatically changes what tactics you should use.
      </p>
      <p><b>AP</b>: Armor Protection. Adds directly to your absorption.</p>
      <p><b>Armor Special Abilities</b></p>
      <p>
        <b>Rigid</b>: The armor's rigid and heavy structure restricts movement in extremely close quarters.
        You get a general disadvantage on all tests involving grappling and mosh pits, including the test to evade the grapple attempt.
        You also get this general disadvantage on grappling like tests such as the test to resist snare.
      </p>
      <p>
        <b>Volatile (AdB, C)</b>: The armor is a dangerous model that risks explosions on intensive fire.
        When this armor is hit by an explosive or energy type attack that deals more than its AP in damage, there is a 5% chance that there is an explosion dealing AdB damage over a radius of C meters.
        Once this explosion occurs, all of the tech on the armor is destroyed.
      </p>
      <p>
        <b>Shield Volatile</b>: Same as volatile, but is only in effect when an energy shield is equipped.
      </p>
      <p>
        <b>Super Charged</b>: Shields equipped to this armor have double the recharge.
      </p>
      <p>
        <b>Extra Battery</b>: Shields equipped to this armor have + 50% capacity.
      </p>
      <p>
        <b>Conduit</b>: You get a general advantage to all spell use tests for spells attached to this armor, but whenever you use one of these spells, any spell used against you is made with a general advantage until your next turn.
      </p>
      <p>
        <b>Unsealed</b>: The AP provided by this armor does not apply to energy damage.
      </p>
      <p>
        <b>Many Layered</b>: The effectiveness of penetration is halved against this armor.
        This rounds in your (the wearer's) favor.
      </p>
      <p>
        <b>Powered (X)</b>: Increase your strength score by X.
      </p>
      <p>
        <b>Insulated</b>: The damage dealt to you by energy weapons is halved.
      </p>
      <p>
        <b>Encapsulating</b>: You face is hidden behind a thick visor.
        You act more on sensors than your senses.
        This serves to mentally remove you from the action.
        You gain a general advantage on tests to resist pinning, but a general disadvantage on personal initiative tests.
      </p>
      <p>
        <b>Kavren Boosters</b>: A Kavren wearing this armor is able to fly.
      </p>
      <p>
        <b>Heavy</b>: You cannot swim, glide or fly while wearing this armor.
      </p>
    </>}
    {makeHeader('melee', 'Melee Weapons')}
    {props.pars.melee && <>
      <p>
        Although it is possible to get around with improvised weapons, or unarmed attacks, most fighters prefer something more substantial in a hand to hand fight, especially if your opponent is wearing armor.
        All fighters must consider melee, since it takes specialized training to use most ranged weapons in hand to hand combat.
        Furthermore, melee weapons are an inexhaustible resource as they do not consume ammunition, and are the favored kind of killing among creatures.
      </p>
      <p>
        Several fighters simply attach a bayonet to their favorite gun and call it a day.
        Others take their close quarters options far more seriously.
      </p>
      <p>
        <b>Dam</b>: Base dice damage.
      </p>
      <p>
        <b>Hands</b>: Hands. The number of hands required to use this weapon.
        A small melee weapon takes 1 hand, whereas a large melee weapon takes 2.
        A one handed melee weapon adds your half S score to damage rolls.
        A two handed melee weapon adds your S score.
      </p>
      <p>
        <b>Pen</b>: Penetration. When calculating damage, first reduce your opponent's absorption by the penetration of your weapon down to a minimum of 0.
      </p>
      <p>
        <b>Class</b>: Indicates the training required to wield this weapon effectively.
        This should usually be “melee.”
      </p>
      <p>
        <b>Type</b>: Indicates the type of damage the weapon deals.
      </p>
      <p><b>Special Abilities</b></p>
      <p>
        <b>Balanced</b>: This weapon's fine make and craft gives you the edge in prolonged hand to hand duels.
        You gain a general advantage to parrying tests made using this weapon.
      </p>
      <p>
        <b>Flexible</b>: This weapon's odd shape makes it difficult to predict.
        Your opponent gains a general disadvantage on all reaction tests to avoid attacks made with this weapon.
      </p>
      <p>
        <b>Concussive (X)</b>: When you strike someone with this weapon, they make a standard E test with a basic penalty of X.
        On failure they are stunned for a round, and following rounds for every additional 3 points of failure (starting at -4).
        If they took more than their S score in damage, they are knocked prone.
      </p>
      <p>
        <b>Cover (X)</b>: You may hide behind this weapon as cover X.
        You may make non-opposed parry tests against ranged attack to do so.
        So long as your opponents are firing at you from a single direction, you may keep this cover and advance or retreat.
        However, you may not run or charge while using this weapon as cover.
        Remember that cover will eventually be destroyed.
      </p>
      <p>
        <b>Razor Sharp</b>: When you hit with this weapon, if your success score was at least 3, you may reduce your score by 3.
        If you do, double your penetration for this attack.
      </p>
      <p>
        <b>Toxic (X)</b>: When you score at least 1 hit that deals damage against a target, they make a standard E test with a basic penalty of X.
        For each point of failure, they take 1d4 toxic damage that ignores absorption.
        If they survive the encounter, they continue to suffer from narrative toxic effects until treated.
      </p>
      <p>
        <b>Unbalanced</b>: This weapon was not made for the cut and thrust of prolonged melee.
        You are at a general disadvantage on parry tests using this weapon.
      </p>
      <p>
        <b>Unwieldly</b>: Whoever designed this weapon clearly focused on the offense.
        You cannot parry with this weapon.
        You cannot get the bonus from the Lightning Attack talent for attacks using this weapon.
      </p>
      <p>
        You may forgo traditional weapons, and use either your unarmed prowess, or whatever object is on hand.
      </p>
      <p>
        <b>Unarmed</b>: You unarmed attack deals 1d6 dice damage and counts as a 1 handed weapon.
        You can only parry other unarmed or improvised weapon attacks when unarmed.
      </p>
      <p>
        <b>Improvised Weapons</b>: Improvised weapons deal 1d8 dice damage and may be either 1 handed or 2 handed weapons.
        They also count as unbalanced.
      </p>
    </>}
    {makeHeader('ranged', 'Ranged Weapons')}
    {props.pars.ranged && <>
      <p>
        Ranged weapons are the core of any arsenal.
        The greater the distance you can put between you and that which will kill you the better.
        Trying to solve all your problems by getting up close and personal will quickly get you killed.
        Do yourself a favor and bring one of these to a fight.
      </p>
      <p>
        <b>Dam</b>: Damage provided by weapon.
      </p>
      <p>
        <b>Hands</b>: Hands. The number of hands required to use this weapon.
        A small ranged weapon takes 1 hand, whereas a large ranged weapon takes 2.
      </p>
      <p>
        <b>Pen</b>: Penetration provided by weapon.
      </p>
      <p>
        <b>Class</b>: Indicates the training required to wield this weapon effectively.
      </p>
      <p>
        <b>Type</b>: Indicates the type of damage this weapon deals.
      </p>
      <p>
        <b>Amo</b>: Indicates the type of ammunition the weapon consumes.
      </p>
      <p>
        <b>RoF</b>: Rate of fire.
        This tells you how many bullets you use for your single shot, semi auto, or full auto/suppressing fire attacks in that order.
      </p>
      <p>
        <b>Range</b>: You know what this is.
      </p>
      <p>
        <b>Clip</b>: How many bullets you may extrude before having to reload.
      </p>
      <p><b>Special Abilities</b></p>
      <p>
        <b>Fine</b>: If you apply a melee attachment to this weapon, it becomes balanced.
      </p>
      <p>
        <b>Clunky</b>: You cannot apply a melee attachment to this weapon.
        You can still use it as an improvised weapon in melee.
      </p>
      <p>
        <b>Accurate (X)</b>: An aim action with this weapon decreases the difficulty of your next attack with it by 2 levels instead of 1.
        When doing an aimed single shot, the hit deals an additional 1d4 damage for every 3 points of success up to Xd4.
      </p>
      <p>
        <b>Focus</b>: This weapon gains multiple hits by focusing a continuous beam or stream against your target. You cannot do suppressive
        fire with this weapon, but may gain the extra damage from Accurate on semi auto and full auto attacks.
      </p>
      <p>
        <b>Concussive (X)</b>: When you hit someone with this weapon, they make a standard E test with a basic penalty of X.
        On failure they are stunned for a round, and following rounds for every additional 3 points of failure (starting at -4).
        If they took more than their S score in damage, they are knocked prone.
      </p>
      <p>
        <b>Flame</b>: When you score at least 1 hit against a target, they make a personal initiative test (exposure).
        If they fail, they catch on fire.
      </p>
      <p>
        <b>Toxic (X)</b>: When you score at least 1 hit that deals damage against a target, they make a standard E test with a basic penalty of X.
        For each point of failure, they take 1d4 toxic damage that ignores absorption.
        If they survive the encounter, they continue to suffer from narrative toxic effects until treated.
      </p>
      <p>
        <b>Radioactive (X)</b>: When you score at least 1 hit against a target, they make a standard E test with a basic penalty of X.
        For each point of failure, they take 1d4 radiation damage that ignores absorption.
        If they survive the encounter, they continue to suffer from the effects of radiation sickness until treated.
      </p>
      <p>
        <b>Indirect</b>: The flight path of this weapon follows a parabolic arch, and so ignores most cover.
      </p>
      <p>
        <b>Cone</b>: This weapon fires in a cone shape. Although the shooter can only aim at 1 target, other people in the affected area get hit.
      </p>
      <p>
        <b>Scatter</b>: When this weapon misses, the bullets hit a location a number of meters away equal to the final score in a random direction.
      </p>
      <p>
        <b>Inaccurate</b>: There is no bonus derived from aiming this weapon.
      </p>
      <p>
        <b>Smoke (X)</b>: When this weapon lands, it creates a cloud of smoke of an X meter radius.
      </p>
      <p>
        <b>Snare (X)</b>: When you hit someone with this weapon, they must make a personal initiative test with a basic penalty of X.
        If they fail, they are ensnared.
        They may escape with a follow up standard S or Ref test applying the same penalty.
        Until then, they are considered helpless.
      </p>
      <p>
        <b>Unreliable</b>: This weapon can jam on any type of ranged attack.
      </p>
      <p>
        Please note that the Flame, Toxic, and Radioactive property are more likely to come from ammunition instead of the weapon itself.
      </p>
    </>}
    {makeHeader('amo', 'Ammunition')}
    {props.pars.amo && <>
      <p>
        Damage, penetration, and abilities for ranged weapon are split between the weapon and the ammunition.
        Each of these add together to give you the full killing force of your money's worth.
    </p>
      <p>
        <b>Type</b>: The type of ammunition. For small rounds fire, this could be light pellets, medium pellets,
      heavy pellets, light rounds, medium rounds, heavy rounds, jumbo rounds, batteries, fluids, grenades, shells or rockets.
      For giant cannons and turrets and exotic firearms the shells are usually specialized to that exact weapon.
    </p>
      <p>
        <b>Dam</b>: Damage provided by ammunition.
      </p>
      <p>
        <b>Pen</b>: Penetration. When calculating damage, first reduce your opponent's absorption by the penetration of your weapon down to a minimum of 0.
      </p>
      <p><b>Special Abilities</b></p>
      <p>
        <b>Blast (X)</b>: When this weapon hits it's target, it explodes of an area with a radius of X meters.
        Anyone hit by a blast weapon must make a standard acrobatics test with a basic penalty of X or be knocked prone.
      </p>
      <p>
        <b>Concussive (X)</b>: When you hit someone with this weapon, they make a standard E test with a basic penalty of X.
        On failure they are stunned for a round, and following rounds for every additional 3 points of failure (starting at -4).
        If they took more than their S score in damage, they are knocked prone.
      </p>
      <p>
        <b>Flame</b>: When you score at least 1 hit against a target, they make a personal initiative test (exposure).
        If they fail, they catch on fire.
      </p>
      <p>
        <b>Toxic (X)</b>: When you score at least 1 hit that deals damage against a target, they make a standard E test with a basic penalty of X.
        For each point of failure, they take 1d4 toxic damage that ignores absorption.
        If they survive the encounter, they continue to suffer from narrative toxic effects until treated.
        Acids and toxins are mechanically equivalent even though they are completely different things.
      </p>
      <p>
        <b>Radioactive (X)</b>: When you score at least 1 hit against a target, they make a standard E test with a basic penalty of X.
        For each point of failure, they take 1d4 radiation damage that ignores absorption.
        If they survive the encounter, they continue to suffer from the effects of radiation sickness until treated.
      </p>
      <p>
        <b>Indirect</b>: The flight path of this weapon follows a parabolic arch, and so ignores most cover.
      </p>
      <p>
        <b>Cone</b>: This weapon fires in a cone shape. Although the shooter can only aim at 1 target, other people in the affected area get hit.
      </p>
      <p>
        <b>Dispenser</b>: This ammunition has a capsule like structure for fluids. You may fill it with any fluid, or sufficiently small solid.
        If the filling is also ammunition, the bullet gains the special abilities of the fuild. If that special ability is an x ability, the rounds get half x rounded up.
        Light ammunition get 1 less x, and heavy ammunition get up to 1 more x. Usually, you can fill 8 dispenser rounds per shot of fluid.
      </p>
      <p>
        <b>Inaccurate</b>: There is no bonus derived from aiming this weapon.
      </p>
      <p>
        <b>Smoke (X)</b>: When this weapon lands, it creates a cloud of smoke of an X meter radius.
      </p>
      <p>
        <b>Snare (X)</b>: When you hit someone with this weapon, they must make a personal initiative test with a basic penalty of X.
        If they fail, they are ensnared.
        They may escape with a follow up standard S or Ref test applying the same penalty.
        Until then, they are considered helpless.
      </p>
      <p>
        <b>Unreliable</b>: This weapon jams on the second lowest attack role.
      </p>
      <p>
        <b>Convert(t)</b>: This weapon using this ammo converts its damage type to t.
      </p>
    </>}
  </>
}
