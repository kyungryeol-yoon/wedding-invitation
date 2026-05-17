import { invitation } from '../data/invitation'

export default function Greeting() {
  const { greeting, groom, bride } = invitation
  return (
    <section className="greeting">
      <div className="section-title">INVITATION</div>
      <h2 className="section-subtitle">{greeting.title}</h2>
      <p className="greeting-body">{greeting.body}</p>

      <div className="divider"><span>❀</span></div>

      <div className="parents">
        <div>
          <div className="role">
            {groom.father} · {groom.mother}
          </div>
        </div>
        <div className="of">의 장남</div>
        <div className="name">{groom.name}</div>

        <div>
          <div className="role">
            {bride.father} · {bride.mother}
          </div>
        </div>
        <div className="of">의 장녀</div>
        <div className="name">{bride.name}</div>
      </div>
    </section>
  )
}
