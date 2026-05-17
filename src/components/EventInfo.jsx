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

  const weekdays = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="calendar">
      <div className="cal-head">
        {year}. {String(month + 1).padStart(2, '0')}
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

export default function EventInfo() {
  const { wedding } = invitation
  return (
    <section className="info">
      <div className="section-title">WHEN &amp; WHERE</div>
      <h2 className="section-subtitle">예식 안내</h2>

      <div className="info-card">
        <div className="info-date-big">{wedding.displayDate.split(' ').slice(0, 3).join(' ')}</div>
        <div className="info-date-sub">{wedding.displayDate.split(' ').slice(3).join(' ')}</div>
        <div className="divider"><span>·</span></div>
        <div className="info-venue">{wedding.venueName}</div>
        <div className="info-venue-detail">{wedding.venueDetail}</div>
        <div className="info-address">{wedding.address}</div>
      </div>

      <Calendar dateISO={wedding.dateISO} />
    </section>
  )
}
