import { invitation } from '../data/invitation'
import { Greek } from './Ornaments'

function ParentRow({ parents, role, name }) {
  const parentText = parents.filter(Boolean).join(' · ')
  return (
    <>
      <div className="role">{parentText || ' '}</div>
      <div className="of">의 {role}</div>
      <div className="person-name">{name}</div>
    </>
  )
}

export default function Greeting() {
  const { greeting, groom, bride } = invitation
  return (
    <section className="greeting">
      <span className="punch-right" />
      <div className="section-eyebrow">{greeting.eyebrow}</div>
      <h2 className="section-title">{greeting.title}</h2>
      <p className="greeting-body">{greeting.body}</p>

      <div className="cloud-divider">
        <Greek className="greek-line" />
      </div>

      <div className="parents-block">
        <ParentRow parents={[groom.father, groom.mother]} role={groom.role} name={groom.name} />
        <ParentRow parents={[bride.father, bride.mother]} role={bride.role} name={bride.name} />
      </div>
    </section>
  )
}
