import { invitation } from '../data/invitation'

function Calendar({ dateISO }) {
  const target = new Date(dateISO)
  const year = target.getFullYear()
  const month = target.getMonth()
  const targetDay = target.getDate()

  const first = new Date(year, month, 1)
  const startWeekday = first.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  const weeks = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))

  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  return (
    <div className="calendar">
      <div className="cal-head">
        {String(year)}.{String(month + 1).padStart(2, '0')}
      </div>
      <table>
        <thead>
          <tr>
            {weekdays.map((w) => (
              <th key={w}>{w}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>
              {week.map((d, di) => (
                <td
                  key={di}
                  className={
                    d === targetDay
                      ? 'today'
                      : di === 0 && d
                        ? 'sun'
                        : !d
                          ? 'muted'
                          : ''
                  }
                >
                  {d || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function useDday(dateISO) {
  const target = new Date(dateISO)
  const now = new Date()
  const ms = target.getTime() - now.setHours(0, 0, 0, 0)
  return Math.ceil(ms / (1000 * 60 * 60 * 24))
}

export default function EventInfo() {
  const { wedding } = invitation
  const dday = useDday(wedding.dateISO)

  return (
    <section className="info">
      <span className="punch-right" />
      <div className="section-eyebrow">WHEN &amp; WHERE</div>
      <h2 className="section-title">예식 안내</h2>

      <div className="info-card">
        <div className="info-date-big">2026. 09. 13</div>
        <div className="info-date-sub">SUNDAY · 12:00</div>
        <div className="info-venue">{wedding.venueName}</div>
        <div className="info-venue-detail">{wedding.venueDetail}</div>
        <div className="info-address">{wedding.address}</div>
      </div>

      <Calendar dateISO={wedding.dateISO} />

      {dday > 0 && (
        <div className="dday">
          THE WEDDING DAY  <span className="dday-num">D-{dday}</span>
        </div>
      )}
      {dday === 0 && (
        <div className="dday">
          <span className="dday-num">D - DAY</span>
        </div>
      )}
    </section>
  )
}
