import { invitation } from '../data/invitation'

function formatKoreanTime(date) {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const ampm = hour < 12 ? '오전' : '오후'
  const h12 = hour % 12 || 12
  return minute === 0
    ? `${ampm} ${h12}시`
    : `${ampm} ${h12}시 ${minute}분`
}

function HeartMark({ day }) {
  return (
    <div className="today-marker" aria-hidden="true">
      <svg className="heart-shape" viewBox="0 0 32 29">
        <path
          d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          fill="currentColor"
        />
      </svg>
      <span className="day-num">{day}</span>
    </div>
  )
}

function Calendar({ dateISO }) {
  const target = new Date(dateISO)
  const year = target.getFullYear()
  const month = target.getMonth()
  const targetDay = target.getDate()
  const timeText = formatKoreanTime(target)

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
              {week.map((d, di) => {
                if (d === targetDay) {
                  return (
                    <td key={di} className="today">
                      <HeartMark day={d} />
                      <div className="day-time">{timeText}</div>
                    </td>
                  )
                }
                const cls = di === 0 && d ? 'sun' : !d ? 'muted' : ''
                return (
                  <td key={di} className={cls}>
                    {d || ''}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function getDday(dateISO) {
  const target = new Date(dateISO)
  const now = new Date()
  const ms = target.getTime() - now.setHours(0, 0, 0, 0)
  return Math.ceil(ms / (1000 * 60 * 60 * 24))
}

function DdayBlock() {
  const { wedding, groom, bride } = invitation
  const dday = getDday(wedding.dateISO)

  const target = new Date(wedding.dateISO)
  const yyyy = target.getFullYear()
  const mm = String(target.getMonth() + 1).padStart(2, '0')
  const dd = String(target.getDate()).padStart(2, '0')
  const weekdayKo = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][target.getDay()]

  let message
  if (dday > 0) {
    message = (
      <>
        {groom.name} <span className="heart">♥</span> {bride.name} 결혼식이{' '}
        <span className="dday-num">{dday}</span>일 남았습니다.
      </>
    )
  } else if (dday === 0) {
    message = (
      <>
        {groom.name} <span className="heart">♥</span> {bride.name} 결혼식이{' '}
        <span className="dday-num">오늘</span>입니다.
      </>
    )
  } else {
    message = (
      <>
        {groom.name} <span className="heart">♥</span> {bride.name} 결혼식이 잘
        끝났습니다.
      </>
    )
  }

  return (
    <div className="dday-block">
      <div className="dday-date">
        {yyyy}.{mm}.{dd} {weekdayKo}.
      </div>
      <div className="dday-message">{message}</div>
    </div>
  )
}

export default function EventInfo() {
  const { wedding } = invitation

  return (
    <section className="info">
      <span className="punch-right" />
      <div className="section-eyebrow">禮式</div>
      <h2 className="section-title">예식 안내</h2>

      <div className="info-card">
        <div className="info-date-big">2026. 09. 13</div>
        <div className="info-date-sub">SUNDAY · 12:00</div>
        <div className="info-venue">{wedding.venueName}</div>
        <div className="info-venue-detail">{wedding.venueDetail}</div>
        <div className="info-address">{wedding.address}</div>
      </div>

      <Calendar dateISO={wedding.dateISO} />

      <DdayBlock />
    </section>
  )
}
