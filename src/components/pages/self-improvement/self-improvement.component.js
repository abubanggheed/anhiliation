
import React from 'react'
import { Button, Table } from 'reactstrap'
import { skillCosts } from '../../../data/skill'
import { talentCosts } from '../../../data/all-talents'
import SkillsTable from '../../skill-table/skill-table.container'
import Tier0Table from '../../talent-tables/tier0/tier0.container'
import Tier1Table from '../../talent-tables/tier1/tier1.container'
import Tier2Table from '../../talent-tables/tier2/tier2.container'
import Tier3Table from '../../talent-tables/tier3/tier3.container'

export default props => {

  const makeHeader = (par, text) => <h4>
    <Button color="secondary" onClick={props.toggleParagraph(par)}>{text}</Button>
  </h4>

  return <>
    <h3>Self Improvement</h3>
    {makeHeader('eBazaar', 'The Experience Bazaar')}
    {props.pars.eBazaar && <>
      <p>
        You accumulate two kinds of immaterial currency to manage your maturity of compliance.
        Characteristic points are spent to improve your very characteristics.
        Experience is spent on skills and talents.
        It is extremely difficult and impractical to get a specific characteristic to a toweringly high score since the upgrades must be purchased in order.
      </p>
      <p>
        Talents and skills are restricted in other ways.
        Skills come in sets of three levels. To purchase a level of a skill, you must already be trained in the previous level.
        Talents do not have such a rigorous order.
        Although most talents have prerequisites that must be obtained before hand, they can be collected as you desire them.
      </p>
      <p>
        The main restriction on talents and skills is that they have high prerequisite ranks.
        Talents are classified in four tiers that affect both the cost of the talent, and the minimum rank required to purchase them.
      </p>
      <p>
        As someone of low rank, your primary source of available skills and talents comes from your career path.
        The path for your specific career may only contain some of the total skills and talents, but the rank threshold is far lower, allowing early purchasing.
      </p>
    </>}
    {makeHeader('chpCosts', 'Chp Costs')}
    {props.pars.chpCosts && <>
      <p>
        To increase one of your characteristics to the next level, you must spend an amount of chp equal to the chp you payed for the last upgrade as well as the chp for the previous upgrade.
        Levels 1 and 2 each cost 1.
        If you prefer, the nth upgrade costs the nth value of the Fibonacci series in chp to obtain.
        If you have the aptitude, level 1 costs 0 chp instead.
      </p>
      <Table dark>
        <tbody>
          <tr>
            <th>Level</th><td>1</td><td>2</td><td>3</td><td>4</td>
            <td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
          </tr>
          <tr>
            <th>Regular</th><td>1</td><td>1</td><td>2</td><td>3</td>
            <td>5</td><td>8</td><td>13</td><td>21</td><td>34</td><td>55</td>
          </tr>
          <tr>
            <th>With Aptitude</th><td>0</td><td>1</td><td>1</td><td>2</td>
            <td>3</td><td>5</td><td>8</td><td>13</td><td>21</td><td>34</td>
          </tr>
        </tbody>
      </Table>
    </>}
    {makeHeader('expCosts', 'Exp Costs')}
    {props.pars.expCosts && <>
      <p>
        Unlike characteristics, skills and talents can consider up to three relevant aptitudes.
        Skills and talents that align with your aptitudes save you exp to be spent on others.
        This does not mean it is best to ignore skills and talents you have to aptitudes for altogether.
    </p>
      <p><b>The Cost of Skill Trainings</b></p>
      <Table dark>
        <tbody>
          <tr><th>No Aptitudes</th><td>{skillCosts[0]}</td></tr>
          <tr><th>One Aptitude</th><td>{skillCosts[1]}</td></tr>
          <tr><th>Two Aptitudes</th><td>{skillCosts[2]}</td></tr>
          <tr><th>Three Aptitudes</th><td>{skillCosts[3]}</td></tr>
        </tbody>
      </Table>
      <p>
        Being trained in a skill allows you to use it normally.
        If a skill is a non-specialized skill that anyone should be able to attempt without training, you may use it without training, but then you only use half your characteristic score rounded down.
        You may train a skill up to 3 times.
        For the second and third time, add a basic bonus to your skill test of +2 and +4 respectively.
      </p>
      <p><b>The Cost of Talents</b></p>
      <Table dark>
        <thead>
          <tr><th></th><th>Tier 0</th><th>Tier 1</th><th>Tier 2</th><th>Tier 3</th></tr>
        </thead>
        <tbody>
          {['No Aptitudes', 'One Aptitude', 'Two Aptitudes', 'Three Aptitudes'].map((row, index) => <tr key={row}>
            <th>{row}</th>
            <td>{talentCosts.tier0[index]}</td>
            <td>{talentCosts.tier1[index]}</td>
            <td>{talentCosts.tier2[index]}</td>
            <td>{talentCosts.tier3[index]}</td>
          </tr>)}
        </tbody>
      </Table>
      <p>
        Tier 0 talents are those that are either meant to be taken several times over your life, or offer minute and situational bonuses.
        As you go up the tiers, you find more powerful talents.
      </p>
    </>}
    {makeHeader('skills', 'Skills')}
    {props.pars.skills && <>
      <p>
        There are two types of skills, basic skill and advanced skills.
        You may use basic skills without purchasing any training but may only add half your relevant characteristic rounded down.
        Advanced skills require some amount of training to attempt.
      </p>
      <SkillsTable />
      <p><b>Social Skill Breakdown</b></p>
      <p>
        It is sometimes difficult to pin down which social skill to use, or for that matter which social skill you are using.
        Here is an example of the differences between the various social skills.
      </p>
      <p>Charm: “Do this for me. I need you.”</p>
      <p>Command: “Do it! Now!”</p>
      <p>Commerce: “Do this for me an I will make it up to you.”</p>
      <p>Deceive: “Doing this for me is in your best interests.”</p>
      <p>Intimidate: “Do this for me or deal with the consequences.”</p>
    </>}
    {makeHeader('tier0', 'Talents (Tier 0)')}
    {props.pars.tier0 && <>
      <Tier0Table />
    </>}
    {makeHeader('tier1', 'Talents (Tier 1)')}
    {props.pars.tier1 && <>
      <Tier1Table />
    </>}
    {makeHeader('tier2', 'Talents (Tier 2)')}
    {props.pars.tier2 && <>
      <Tier2Table />
    </>}
    {makeHeader('tier3', 'Talents (Tier 3)')}
    {props.pars.tier3 && <>
      <Tier3Table />
    </>}
  </>
}
