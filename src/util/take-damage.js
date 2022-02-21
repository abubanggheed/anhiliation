
export const takeDamage = (damage, pen, hits, abs, charges, deflection) => {
  let effAbs = abs - pen
  effAbs = effAbs < 0 ? 0 : effAbs
  let advDam = damage / hits
  let chargesUsed = +charges < +hits ? +charges : +hits
  let deflected = chargesUsed * deflection
  let damageToDeflect = advDam * chargesUsed
  deflected = (deflected > damageToDeflect ? damageToDeflect : deflected)
  let damageToTake = ~~(damage - deflected)
  let taken = ~~(damageToTake / (effAbs + 1))
  return {
    chargesUsed,
    deflected,
    taken,
    absorbed: damageToTake - taken
  }
}
