import { invitation } from '../data/invitation'
import { Greek } from './Ornaments'

export default function Guestbook() {
  const { guestbook } = invitation
  if (!guestbook) return null

  return (
    <section className="guestbook">
      <span className="punch-right" />
      <div className="section-eyebrow">芳名錄</div>
      <h2 className="section-title">{guestbook.title}</h2>

      <p className="guestbook-body">{guestbook.body}</p>

      <div className="cloud-divider">
        <Greek className="greek-line" />
      </div>
    </section>
  )
}
