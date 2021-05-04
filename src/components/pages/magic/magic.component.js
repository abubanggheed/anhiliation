import React from 'react'
import { Button, Table } from 'reactstrap'

export default props => {

  const makeHeader = (par, text) => <h4>
    <Button color="secondary" onClick={props.toggleParagraph(par)}>{text}</Button>
  </h4>


  return <>
    <h3>Magic and Consequences</h3>
    {makeHeader('fear', 'Fear')}
    {props.pars.fear && <>
      <p>
        Some enemies or situations of simply terrifying.
        Such enemies have a fear difficulty.
        When you encounter an opponent with a fear difficulty, you must make a standard variance Will test of that difficulty.
        If you fail, roll a d20, add the amount of failure, and apply the effect of the following table:
      </p>
      <Table dark>
        <thead>
          <tr>
            <th>Result</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1 - 6</td><td>You gasp in freight, but steel your nerves. You may only take a half action on your next turn, but may otherwise act normally</td></tr>
          <tr><td>7 - 10</td><td>The gruesome scene takes its effect on you. You shake uncontrollably until snapping out of it. You get a general disadvantage to all tests</td></tr>
          <tr><td>11 - 14</td><td>Reeling with shock, you back away, and cannot willingly approach the source of your fear. You get a general disadvantage to all tests until the end of the encounter. +1 insanity</td></tr>
          <tr><td>15 - 18</td><td>You are frozen in terror, staring with wide eyes at the source of your fear. You stand still until successfully snapping out of it. Then you get a general disadvantage all tests until end of encounter. +1d5 insanity +1 Mental Fatigue</td></tr>
          <tr><td>19 - 22</td><td>Broken in terror, you flee from the source of the fear. Once a safe distance away, you continue running until snapping out of it. If prevented from fleeing, you may only take a half action per turn, and get 2 general disadvantages to all tests until end of encounter. +1d5 insanity +1 Mental Fatigue</td></tr>
          <tr><td>23 - 26</td><td>You faint on your feet, falling unconscious for 1d5 rounds. Once you regain consciousness, you get a general disadvantage to all tests until end of encounter. +1d5 insanity +1 Mental Fatigue</td></tr>
          <tr><td>27 - 30</td><td>Overcome by fear, you fall to your knees at retch for 1d5 rounds. After you are finished vomiting, you may only take half actions until the end of the encounter. +1d10 insanity +1 Mental Fatigue, +1 Physical Fatigue</td></tr>
          <tr><td>31 - 34</td><td>You laugh with hysteria, attacking the closest target with standard attacks and one general disadvantage to hit. This effect lasts until you snap out of it, or are rendered incapacitated. +1d10 insanity +2 Mental Fatigue</td></tr>
          <tr><td>35 - 39</td><td>You fall prone, weeping, playing, and clawing at your armor for 1d5+1 rounds. Afterwards, you get 2 general disadvantages to all tests until the end of the encounter. +1d10 insanity +2 Mental Fatigue</td></tr>
          <tr><td>40 - 42</td><td>Your mind snaps. You fall unconscious for 1d5 hours, and cannot be roused. +1d10+2 insanity</td></tr>
          <tr><td>{'> 42'}</td><td>Your heart threatens to stop from the terror. Make a standard endurance test or die. If you live, you fall unconscious for 1d5 hours and cannot be roused. +2d10 insanity</td></tr>
        </tbody>
      </Table>
      <p>
        <b>Casual Fear</b>: Generally speaking, it is far more terrifying seeing somethings charging hungrily at you in the wild than sitting around at the zoo.
        Fear difficulties only apply if they are your opponent in a combat, and then only if it is clear that they are aware of your presence.
        There are a few, though, who's very presence is terrifying, and arouse their fear tests by their presence alone.
        If a creature has both types of fear, the combat fear difficulty applies in combat, and requires a fresh test.
      </p>
      <p>
        <b>Fear and Insanity</b>: Good news. For every 20 insanity you have, reduce all fear difficulties by 1 step.
      </p>
      <p>
        <b>Snapping Out of It</b>:Remember that you can always take the snap out of it action in combat.
        This clears any lingering effect of fear or pinning that is troubling you.
        You can attempt this test once per round on your turn.
      </p>
    </>}
    {makeHeader('spellUse', 'Spell Use and Feedback')}
    {props.pars.spellUse && <>
      <p>
        Magic represents an insurmountable frontier of knowledge, a solution to every problem, and a decisive edge to any contention.
        Yet it has far from taken over the world.
        On the contrary, magic tends to be isolated to a small number of individuals, and even then limited further to a small number of uses.
        There are a few very good reason for why magic has the modest place it does.
      </p>
      <ol>
        <li>
          Magic Theory is hard. Academics have been trying to find patterns in spell design for centuries, but still haven't reach any consistent conclusions.
          Spell development happens mostly through guided trial and error.
          It takes months of research for teams of highly qualified researchers to produce a spell that has a notable effect.
          The effect itself is usually not the one the researchers where trying to achieve.
          Thus every spell creation effort is followed up by an equally arduous research project to determine the full effects of the spell they created.
        </li>
        <li>
          Feedback. Every time a spell is cast, the caster must endure what some have called “concentrated emotional pain” as the spell takes effect.
          This is more commonly known as feedback, and it quickly exhausts the caster and often threatens their mental health.
          Academics have yet to find a way to casts spells autonomously, and thus spells remain in the hands of those who are willing to suffer for it.
        </li>
      </ol>
      <p>
        Despite these challenges, magic is still the ace in the hole of anyone carrying a spell.
      </p>
      <p>
        <b>Using Magic</b>: Spells are special gear that are carried around like weapons or grenades.
        Any time you take the Spell Use action, you may use one of your spells.
        The time and difficulty of using a spell varies.
        After the spell has gone into effect, you deal with the feedback.
      </p>
      <p>
        <b>Feedback</b>: All spells require a Will based test to resist feedback.
        For each point of failure on this test, you gain that many insanity points.
        Then regardless of how you did on the test, you take a level of mental fatigue.
      </p>
      <p>
        <b>Spell Training</b>: The feedback rules above assume you are trained in the spell you are using.
        You do not need the training to use the spell.
        However, if you use a spell you are not trained in, you automatically roll the lowest possible dice result on your Will test to resist feedback, and gain 2 levels of mental fatigue.
      </p>
      <p>
        <b>Feedback Shock</b>: Suffering from too much feedback in the same battle or other event will cause a mental breakdown, and significantly impair your ability to act in a civil manner.
        This is tracked by the accumulative amount of insanity points gained by failed feedback resistance tests.
      </p>
      <Table dark>
        <thead>
          <tr>
            <th>Insanity Gained</th>
            <th>Shock</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>6- 7</td><td>Aversion</td><td>You must pass a standard Will test before using a spell</td></tr>
          <tr><td>8</td><td>Seizure</td><td>You fall prone a writhe around for 2d6 rounds</td></tr>
          <tr><td>9</td><td>Frenzy</td><td>Everyone around you becomes an enemy, and you attack the closest character for 1d6 rounds</td></tr>
          <tr><td>10</td><td>Recession</td><td>You drop what your holding and wander forward with complete oblivion to your surroundings for 2d4 rounds</td></tr>
          <tr><td>{'> 10'}</td><td>Coma</td><td>You fall unconscious for the next 1d4 hours</td></tr>
        </tbody>
      </Table>
    </>}
    {makeHeader('insanity', 'The Insanity Track')}
    {props.pars.insanity && <>
      <p>
        Over time, you will accrue a large and delightful characteristic known as insanity.
        Insanity roughly tracks your slow but steady progress towards terminal insanity.
        You start at 0. When you reach 100 it's all over for you.
      </p>
      <p>
        <b>Disorders</b>: At certain thresholds you gain disorders, and whatever disorders you have increase in strength by a step.
        Disorders occasionally affect the way in which you act.
        You can always try to suppress the effect of a disorder with a high variance Will test, but the test becomes more difficult as the disorder becomes advanced.
      </p>
      <Table dark>
        <thead>
          <tr>
            <th>Threshold</th><th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>40</td><td>First Disorder</td></tr>
          <tr><td>60</td><td>Second Disorder</td></tr>
          <tr><td>80</td><td>Third Disorder</td></tr>
          <tr><td>100</td><td>Terminal Insanity</td></tr>
        </tbody>
      </Table>
      <p>
        If your insanity reduces below one of the thresholds, you reverse your disorders.
        Once you cross that threshold again, the new disorder you had previously returns.
        The difficulty of resisting disorders is shown below.
      </p>
      <Table dark>
        <thead>
          <tr><th>Disorder State</th><th>Difficulty</th></tr>
        </thead>
        <tbody>
          <tr><td>Diminutive</td><td>Common</td></tr>
          <tr><td>Acute</td><td>Challenging</td></tr>
          <tr><td>Advanced</td><td>Standard</td></tr>
        </tbody>
      </Table>
      <p>
        The easiest way to accumulate insanity is from reckless spell use.
        You can also get it from encountering terrifying situations or from narrative effects.
      </p>
    </>}
  </>
}
