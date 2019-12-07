
export class Test {

  constructor(difficulty, hDescr, hAry, sDescr, sAry, lDescr, lAry) {
    this.constructor.apply(this, difficulty, hDescr, hAry, sDescr, sAry, lDescr, lAry)
  }

  static apply (funcObj, difficulty, hDescr, hAry, sDescr, sAry, lDescr, lAry) {
    funcObj.difficulty = {
      hDescr,
      hAry,
      sDescr,
      sAry,
      lDescr,
      lAry
    }
    funcObj.name = difficulty
  }
}

export const tests = [
  new Test('Infallible', '1d4-4', [4], '2d2-4', [2, 2], '', []),
  new Test('Trivial', '1d6-6', [6], '2d3-6', [3, 3], '3d2-6', [2, 2, 2]),
  new Test('Easy', '1d8-8', [8], '2d4-8', [4, 4], '3d3-9', [3, 3, 3]),
  new Test('Common', '1d10-10', [10], '2d5-10', [5, 5], '3d3-9', [3, 3, 3]),
  new Test('Challenging', '1d12-12', [12], '2d6-12', [6, 6], '3d4-12', [4, 4, 4]),
  new Test('Standard', '1d16-16', [16], '2d8-16', [8, 8], '3d5-15', [5, 5, 5]),
  new Test('Difficult', '1d20-20', [20], '2d10-20', [10, 10], '3d6-18', [6, 6, 6]),
  new Test('Brutal', '1d24-24', [24], '2d12-24', [12, 12], '3d8-24', [8, 8, 8]),
  new Test('Hopeless', '1d32-32', [32], '2d16-32', [16, 16], '3d10-30', [10, 10, 10]),
  new Test('Impossible', '1d40-40', [40], '2d20-40', [20, 20], '3d12-36', [12, 12, 12]),
  new Test('Ludicrous', '1d50-50', [50], '2d25-50', [25, 25], '3d16-48', [16, 16, 16])
]
