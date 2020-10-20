import React from 'react'
import { Container, Row, Col, Input, Table } from 'reactstrap'

const fibCache = {}
const fibTotalCache = {}

const fibonacci = num => (
  !(+num > 0) ? 0 : +num === 1 ? 1 : num >= 1000 ? Infinity :
    fibCache[`${num}`] || (
      fibCache[`${num}`] = fibonacci(num - 1) + fibonacci(num - 2),
      fibCache[`${num}`]
    )
)

const fibonacciTotal = num => (
  !(+num > 0) ? 0 : num >= 1000 ? Infinity :
    fibTotalCache[`${num}`] || (
      fibTotalCache[`${num}`] = fibonacci(num) + fibonacciTotal(num - 1),
      fibTotalCache[`${num}`]
    )
)

export default props => {

  const { stats, apts, changeStat, changeApt, charList, aptList, numberc, numbernc } = props

  const makeCharAptList = charType => item => <div key={item.name}>
    <b>{item.name}</b>{' '}<input
      type="checkbox"
      checked={apts[item.name]}
      onChange={changeApt(item.name, charType)}
    />
  </div>

  const totalChpSpent = charList.map(char => +stats[char.name]).reduce((total, value) => (
    total + fibonacciTotal(value)
  ), 0)

  return <>
    <Container>
      <Row>
        <Col>
          <h2>Character Input</h2>
        </Col>
        <Col>
          <h5>Total Chp Invested: {totalChpSpent}</h5>
        </Col>
      </Row>
      <Row>
        <h6><i>
          This is not your character sheet. Data input here will not persist beyond page refesh.
    </i></h6>
      </Row>
      <Row>
        <Col>
          <h6><i>
            The following values are used for dice rolling logic.
    </i></h6>
          <Table dark>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Invested</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {charList.map(char => <tr key={char.name}>
                <td><b>{char.name}</b></td>
                <td>
                  <Input
                    type="number"
                    value={stats[char.name]}
                    onChange={changeStat(char.name)}
                  />
                </td>
                <td>{fibonacciTotal(+stats[char.name] + (apts[char.name] ? -1 : 0))}</td>
                <td>{fibonacci(+stats[char.name] + (apts[char.name] ? 0 : 1))}</td>
              </tr>)}
              <tr>
                <td><b>Physical Fatigue</b></td>
                <td>
                  <Input
                    type="number"
                    value={stats.physFatigue}
                    onChange={changeStat('physFatigue')}
                  />
                </td>
              </tr>
              <tr>
                <td><b>Mental Fatigue</b></td>
                <td>
                  <Input
                    type="number"
                    value={stats.menFatigue}
                    onChange={changeStat('menFatigue')}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <div>
            <h3>Aptitude Input</h3>
            <h6>Characteristic {3 - numberc ? `(Remaining: ${3 - numberc})` : ''}</h6>
            {charList.map(makeCharAptList('c'))}
            <h6>Non-Characteristic {4 - numbernc ? `(Remaining: ${4 - numbernc})` : ''}</h6>
            {aptList.map(makeCharAptList('nc'))}
          </div>
        </Col>
      </Row>
    </Container>
  </>
}
