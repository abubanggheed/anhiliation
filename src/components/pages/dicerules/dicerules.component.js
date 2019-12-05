import React from 'react'
import { Button } from 'reactstrap'
import { characteristics } from '../../../data/characteristic'

export default props => {

  const toggleParagraph = par => () => {
    props.dispatch({
      type: 'RULES_DICE',
      payload: par
    })
  }

  return <>
    <h3>Dice Rules</h3>
    <h4><Button color="secondary" onClick={toggleParagraph('theCharTest')}>Characteristic Tests</Button></h4>
    {props.pars.theCharTest && <>
      <h5><Button color="info" onClick={toggleParagraph('charTest')}>The Characteristic Test</Button></h5>
      {props.pars.charTest && <p>
        All characteristic tests include a roll.
        These are usually straightforward, e.g. 2d8 – 16 + WS + 6.
        Here the + 6 is a basic modifier on the tests.
        These straight modifiers are the most common things to see in a characteristic test, but there are a few other ways to modify a test.
        </p>}
      <h5><Button color="info" onClick={toggleParagraph('mdTest')}>Mixed Dice Tests</Button></h5>
      {props.pars.mdTest && <p>
        Some tests involve more than one type of die in the roll.
        This would look like 2d6{'&'}1d10 – 22, that is roll 2 d6s and 1 d10 and add the results.
      </p>}
      <h5><Button color="info" onClick={toggleParagraph('gAdvantages')}>General Advantages and Disadvantages</Button></h5>
      {props.pars.gAdvantages && <p>
        You will be asked on a regular basis to roll more than the usual amount of dice, then drop some of results.
        If you see 3d6+ - 18, that means roll 4d6 then remove the d6 with the lowest result from the pile before subtracting 18.
        3d6- - 18 means roll 4d6, but instead remove the d6 with the highest result.
        The number of pluses and minuses indicate the number of extra dice to be rolled.
        e.g. 2d8--- - 16 means you roll 5d8 and drop the highest three.
        Adding a general advantage or disadvantage to a mixed dice test means choosing one of the types of dice and adding the modifier to that set of dice.
        If the rules don't specify on which set of dice the advantage or disadvantage would go, the character who causes the effect gets to chose.
      </p>}
      <h5><Button color="info" onClick={toggleParagraph('centerings')}>Centerings</Button></h5>
      {props.pars.centerings && <p>
        It is not impossible for a roll to have both an advantage and a disadvantage.
        This is called a centering. That is, 1 centering is a +- modifier on a test.
        Centerings make the result closer to the expected result, and are of benefit if you are likely to succeed a test, as they trend against outlying dice.
        They are also far more consequence on large dice.
        Centerings must be specified in order to happen.
        Usually, advantages and disadvantages cancel each other out.
        Note that 1 centering means 2 extra dice.
      </p>}
      <h5><Button color="info" onClick={toggleParagraph('strangeNumbers')}>Strange Numbers</Button></h5>
      {props.pars.strangeNumbers && <>
        <p>
          There are calls for dice rolls for numbers that are not available in physical dice.
          If you want to use physical dice, you can with modular arithmetic.
          For something like a die 3, you can roll a die 6 and take the result mod 3.
          That is, 4 becomes 1, 5 becomes 2, and 6 becomes three.
          To roll a die 100, roll two die 10, say that one is the 10s place and the other is the 1s place.
          Of course, the maximum result on the 10s place die is treated as 0.
        </p>
        <p>
          This second technique can be used to roll many sided dice without needing a die with that many sides.
          To roll a d64, roll 2 d8s and apply the same strategy as with the d100.
          More generally, to roll a die of value a*b, roll a die a and a die b, then the result is a*b + b, where the maximum result on the die a is instead 0.
          e.g. to roll a d24, make a d6 the 1s place and a d4 the 6s place.
          Then a roll of 4 and 5 respectively would equal a total of 5.
	    </p>
        <p>
          To make this work wit physical dice without resorting to a lot of re-rolls, all dice in these rules are some multiple of 2, 3, 4, and 5.
      </p>
      </>}
    </>}
    <h4><Button color="secondary" onClick={toggleParagraph('opposedTests')}>Opposed Tests</Button></h4>
    {props.pars.opposedTests && <>
      <p>
        The opposed test is where two or more characters make a characteristic test, then compare their results.
        These fall into 2 categories.
      </p>
      <h5><Button color="info" onClick={toggleParagraph('hthTest')}>Head-To-Head (hth)</Button></h5>
      {props.pars.hthTest && <p>
        In hth opposed tests, the final result of the test is the difference between the contender's results.
        If you get a result of -2 and your opponent gets -5, you have succeeded by 3 and your opponent has failed by this.
        This means you can succeed the test even if your fail the roll.
        Hth tests are usually mandatory for both parties, but in the case where they aren't, forgoing the tests gives you an automatic result of -1.
        Sometimes, the best course of action is to do nothing.
        If you forgo a hth test, but win anyway, you cannot take advantage of any counter-attack or other bonus that is related to that test.
        </p>}
      <h5><Button color="info" onClick={toggleParagraph('nfTest')}>No Fault (nf)</Button></h5>
      {props.pars.nfTest && <p>
        In nf opposed tests, someone cannot make a situation worse than it already is.
        In a nf test you cannot get a result less than -1.
        Otherwise, it is the same as an hth test.
          </p>}
      <h5><Button color="info" onClick={toggleParagraph('opposingATest')}>Opposing a Test</Button></h5>
      {props.pars.opposingATest && <p>
        In most opposed test, there is an initiator and a responder.
        The initiator makes (and passes) a test that the responder may oppose.
        The responder then makes their test as an hth or nf test against the initiator's result.
        If the rules do not specify whether a test is hth or nf, it is considered nf.
        In other scenarios, the two parties make their tests at the same time.
          </p>}
    </>}
    <h4><Button color="secondary" onClick={toggleParagraph('rulesOnCharacterstics')}>Rules On Characteristics</Button></h4>
    {props.pars.rulesOnCharacterstics && <>
      <p>Here are some rules on terms related to characteristics:</p>
      <p><b>Characteristic Score</b>: The total value of one of your characteristics.</p>
      <p><b>Base Characteristic Score</b>: The natural value of one of your characteristic ignoring any effects that modify it.</p>
      <p><b>Half Characteristic</b>: Half of your characteristic score rounded down.</p>
      <p>Characteristics may not be negative. If a characteristic falls to zero, it has a large <Button color="link" onClick={toggleParagraph('zeroEffects')}>debilitating effect</Button>.</p>
      {props.pars.zeroEffects && characteristics.map(char => <p key={char.abvr}>
      <b>{char.name}</b>:{` ${char.zeroEffect}`}
      </p>)}
      <p>
        Effects that permanently damage characteristics are rare.
        If your characteristic is reduced to zero, you automatically fail any test involving that characteristic, and remain debilitated until the characteristic heals to at least 1.
      </p>
      <p>
        This does mean, however, that valid characters must begin the game with a score of at least 1 in every characteristic.
        If you intent to start without a positive score in one of your characteristics, you must respend your chp to correct this.
      </p>
    </>}
  </>
}
