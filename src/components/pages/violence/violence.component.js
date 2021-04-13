import React from 'react'
import { Button } from 'reactstrap'
import CombatActions from '../../combat-table/combat-table.container'
import GrappleTable from '../../grappling-table/grappling-table.container'
import MoshTable from '../../moshing-table/moshing-table.container'
import RangeTable from '../../range-table/range-table.component'

export default props => {

  const makeHeader = (par, text) => <h4>
    <Button color="secondary" onClick={props.toggleParagraph(par)}>{text}</Button>
  </h4>

  return <>
    <h3>Violence</h3>
    {makeHeader('time', 'Time')}
    {props.pars.time && <>
      <p>
        When in combat, events that happen simultaneously instead occur in series.
        But this linear projection of the time spent in combat is an illusion no one can see.
        The laws use this illusion, while the experience occurs in the usual forward moving illusion where everyone is panicking in parallel.
        This creates a few causality problems, but no one has noticed yet.
      </p>
      <p>
        <b>Personal Initiative</b>: A personal initiative role is given by 2d8 + your half Ref score.
        This is a test that reflects the twitchiness of your parallel nervous system and is rolled on occasion.
      </p>
      <p>
        <b>Party Initiative</b>: This reflects the general experience of a party, and how well they respond to a sudden threat.
        When combat begins. Each represented faction roles a party initiative, given by 2d10 + rank.
        If there is a mix of ranks, party initiative uses your rank for your party, and the highest rank present for other parties under normal circumstances.
        Characters take their turns in order of party initiative.
        This means you and your friends all act as a unit.
      </p>
      <p>
        <b>Party Initiative Modifiers</b>: One or more parties may get a bonus to their initiative depending on how they engage.
        If one party exceeds the others initiative by at least 15, they start combat with a free ambush round where their opponents have no actions nor reactions.
      </p>
      <p>
        <b>Rounds</b>: This linear projection is organized in rounds of combat.
        Each round lasts 6 seconds, and within it the fighters may take their actions, and use their reactions.
      </p>
      <p>
        <b>Actions</b>: An action consumes time, and consists of an act that you take.
        </p>
      <ul>
        <li>Free: consumes no time</li>
        <li>Half: consumes half of your round</li>
        <li>Full: consumes the entire round</li>
        <li>Extended: consumes more than a round</li>
      </ul>
      <p>
        Full and extended actions may be split free across multiple rounds with the understanding that you may need to abort them if the situation changes.
      </p>
      <p>
        <b>Reactions</b>: These represent your ability to respond immediately to events happening on the battlefield such as someone pointing a gun at you, or your friend being grappled.
      </p>
      <p>
        <b>Action Types</b>: Actions are categorized by type. These are:
        </p>
      <ul>
        <li>Attack: aggression</li>
        <li>Move: mobility</li>
        <li>Concentration: do something complicated</li>
        <li>Grapple: grappling</li>
        <li>Mosh: moshing</li>
        <li>Misc: something else</li>
      </ul>
      <p>
        You may only do one action per round that is an Attack action, though talents like Dual Wield and Brawler let you break that rule.
        Similarly you may only do one Grapple action per round and one Mosh action per round unless your talents state otherwise.
        There are no such restrictions on the rest.
      </p>
      <p>
        <b>Movement Speed</b>: Your base movement speed is by default, your half Ref score to a minimum of 1 meter.
      </p>
    </>}
    {makeHeader('combat', 'Combat Actions and Reactions')}
    {props.pars.combat && <>
      <p>
        Here is the table of actions and reactions.
        Entries marked with “Yes” for Talent require a certain talent to use:
      </p>
      <CombatActions
        actions={props.combat}
      />
    </>}
    {makeHeader('grappling', 'Grappling')}
    {props.pars.grappling && <>
      <p>
        Grappling is an alternative way in which to win a fight.
        It comes in handy if you find your opponent's armor too thick, or their weapons too dangerous.
        Sometimes the solution is to tackle them and punch it out.
        In a grapple, there are four places to be.
      </p>
      <ul>
        <li>Grappler: the one in charge of the grapple.</li>
        <li>Assistor: someone cograppling with the grappler.</li>
        <li>Grappled: the one being grappled.</li>
        <li>Intervener: someone trying to break up the grapple.</li>
      </ul>
      <p>
        Here is a table of grappling actions:
      </p>
      <GrappleTable
        actions={props.grappling}
      />
      <p>
        Each of these tests take the entire round, and only one can be made per grapple per round.
        The grappler gets a 1 general advantage on their tests for each assistor they have.
        The grappled gets 1 general advantage for each intervener they have.
        Assistor and intervener bonuses cancel each other out, so either the grappler or the grappled will have advantages.
      </p>
    </>}
    {makeHeader('moshing', 'Mosh Pits')}
    {props.pars.moshing && <>
      <p>
        If there are more than 6 people of the same size involved in the same grapple, the grapple ends and turns into a mosh pit.
        In mosh pits, your ability to act effectively depends on the ratio of sheer body count you have on the opposing side.
        You cannot make physical reactions in mosh pits, or for that matter do anything except deal with the pile of flailing bodies in which you are a part.
        It is unwise to take on an angry mob by yourself.
        You will be clobberated profusely.
        If you don't like those odds, keep on your high horse.
      </p>
      <MoshTable
        actions={props.moshing}
      />
    </>}
    {makeHeader('modifiers', 'Combat Modifiers')}
    {props.pars.modifiers && <>
      <p>
        There are several factors that effect your immediate capacity for violence.
        Some of these factors are common place enough to be listed here so that there is a good reference on how to treat them.
      </p>
      <p>
        <b>Cover</b>: For any ranged attack that goes through your cover, increase your absorption by an amount that depends on the quality of your cover.
        Reactions that change your position take you out of cover.
      </p>
      <p>
        <b>Difficult Terrain</b>: Gain some number of general disadvantages on melee attacks and evasions.
        The more arduous the terrain, the more disadvantages.
      </p>
      <p>
        <b>Engaged</b>: You are in melee with someone.
        Your ranged attacks against your melee opponent suffer from penalties laid out in the ranges table.
        If you make a ranged attack against anyone else, you forfeit your ability to make reactions to actions your melee opponent performs.
      </p>
      <p>
        <b>Grappled</b>: You cannot take any physical actions or reactions except the grappling actions.
      </p>
      <p>
        <b>Grappling</b>: You cannot take any physical actions except the grappling actions without abandoning your grapple.
        Increase the difficulty of any evasion test you take unless you abandon the grapple.
      </p>
      <p>
        <b>Jammed</b>: You weapon is stuck and cannot fire until you unjam it.
        When making a ranged attack, if you roll all 1s, make a dice roll of opposite variance and difficulty, and if you also get all 1s on that, your weapon jams.
      </p>
      <p>
        <b>Melee</b>: The target you are shooting at is in a melee or worse.
        Before reactions are chosen and applied, if your score is less than 2, you hit a random character in that melee, otherwise reduce your score by 2.
        Using anything other that single shots will hit random targets in that melee.
      </p>
      <p>
        <b>Obscured Vision</b>: Increase the difficulty of all melee attacks and evasions by 1 step and the difficulty of all ranged attacks by 2 steps.
      </p>
      <p>
        <b>On Fire</b>: Each turn you take 1d12 damage that ignores absorption.
      </p>
      <p>
        <b>Pinned</b>: Increase the difficulty of all (grapple) actions that you take by 1 step.
      </p>
      <p>
        <b>Pinning</b>: You cannot bring yourself to venture out into the storm of bullets that are whizzing around you.
        You must stay in cover and cannot make tactical advances.
        If you are not in cover, your turn must be dedicated to seeking cover.
      </p>
      <p>
        <b>Prone</b>: Decrease the difficulty of all melee attacks or grapple actions made against you by 1 step.
      </p>
      <p>
        <b>Stunned</b>: You loose a half action every round until you are no longer stunned.
      </p>
      <p>
        <Button color="link" onClick={props.toggleParagraph('ranges')}>Range</Button>: The closer you are to a target, the easier it is to hit them. At a certain point, it is far more feasible to switch to the bayonet:
      </p>
      {props.pars.ranges && <>
        <RangeTable />
        <p>
          These are all the difficulty of a single shot attack.
          Other tests with other difficulties and variances adjust their tests based on range by the same steps.
          Regardless of how far away they are, you cannot shoot someone when you don't have any idea where they are.
        </p>
      </>}
      <p>
        <b>Size</b>: Stature comes with advantages and disadvantage of its own.
        Being larger that your opponents means you cannot be grappled by them, and may ignore mosh pits.
        On the other hand, you are much easier to be hit by a ranged weapon.
        Size is abstracted by a number. A normal humanoid is considered size 4.
        For every point of size larger an opponent is from your own, decrease the difficulty of all ranged attacks by 1 step.
        For each point of size smaller, increase that difficulty by a step.
      </p>
      <p>
        If you are two points of size larger than your opponent, you cannot be grappled by them, and ignore their mosh pits.
      </p>
    </>}
    {makeHeader('damage', 'Damage')}
    {props.pars.damage && <>
      <p>
        <b>Taking a Hit</b>: For each hit, after considering absorption and penetration, the damage is taken from your wounds.
        If you reach 0 wounds, you become incapacitated and all further damage, including from that hit turns into critical damage.
      </p>
      <p>
        <b>Critical Damage</b>: If you exceed more than twice your E score in critical damage you die.
        This is a special privilege to you and other important people.
        Most will die after running out of wounds.
        For each round where you have critical damage, you take an additional point of critical damage until stabilized.
        Once stabilized, if you already have more than your E score in critical damage, you must be treated with a follow up extended ER test within a day or die.
      </p>
      <p>
        <b>Stabilized</b>: Stabilizing an ally is a standard medical test using first aid to stop immanent death.
        This test gains a general disadvantage for every 6 critical damage your ally has.
        If you succeed by less than 2, your ally is not stabilized, but does not take damage the next round.
      </p>
      <p>
        <b>ER Test</b>: This is a lengthy medical procedure that cannot be done in the middle of combat.
        The difficulty of this test depends on the facilities and tools available.
      </p>
      <p>
        <b>Healing Wounds</b>: Normally, your wounds recover at a rate of rank per day.
      </p>
      <p>
        <b>Healing Critical Damage</b>: Critical damage heals at a rate of 1 per every 2 weeks.
        While you have unhealed critical damage, your wounds recover at a rate of 1 per week.
      </p>
      <p>
        <b>Healing Characteristic Damage</b>: Any characteristic damage normally heals at a rate of 1 per week.
      </p>
      <p>
        <b>E Damage</b>: Whenever you take E characteristic damage, reduce your max and current wounds by the same number to match your new max wounds.
        If this effect would reduce your current wounds to 0 or less, it stops at 1 wound.
        You still get a heart attack from having 0 E.
      </p>
    </>}
  </>
}
