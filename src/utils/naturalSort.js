// 파일명에서 숫자 시퀀스만 추출해 튜플로 비교하는 자연 정렬 비교 함수.
//   "1.jpg"     -> [1]
//   "1-1.jpg"   -> [1, 1]
//   "1-10.jpg"  -> [1, 10]
//   "2-1.jpg"   -> [2, 1]
// 짧은 튜플이 먼저: [1] < [1, 1] 이므로 "1.jpg" 가 "1-1.jpg" 보다 앞.
function key(s) {
  return (s.match(/\d+/g) || []).map(Number)
}

export function compareNatural(a, b) {
  const ka = key(a)
  const kb = key(b)
  const len = Math.max(ka.length, kb.length)
  for (let i = 0; i < len; i++) {
    const x = i < ka.length ? ka[i] : -1
    const y = i < kb.length ? kb[i] : -1
    if (x !== y) return x - y
  }
  return a.localeCompare(b)
}
