

export const nameAddOn = (asset, addOn) => ({
  ...asset,
  name: asset.name + addOn
})

export const prereqAddOn = (skill, level = 2, addOn = '') => ({
  ...skill,
  name: skill.name + addOn + ` + ${level}`,
  printPrereqs: () => skill.name + addOn + (level - 2 ? ` + ${level - 2}` : '')
})
