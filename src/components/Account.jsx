import { useState } from 'react'
import { invitation } from '../data/invitation'

function AccountGroup({ label, accounts, onCopy }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        className={`acc-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{label} 측 마음 전하실 곳</span>
        <span className="arrow">▾</span>
      </button>
      {open && (
        <div className="acc-list">
          {accounts.map((a, i) => (
            <div className="acc-row" key={i}>
              <div>
                <div className="meta">
                  {a.bank} · {a.holder}
                </div>
                <div className="num">{a.number}</div>
              </div>
              <CopyButton text={a.number} onCopy={onCopy} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

function CopyButton({ text, onCopy }) {
  const [copied, setCopied] = useState(false)

  async function handle() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
      } else {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'fixed'
        ta.style.left = '-9999px'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      onCopy?.()
      setTimeout(() => setCopied(false), 1500)
    } catch {
      onCopy?.('복사에 실패했어요')
    }
  }

  return (
    <button
      type="button"
      className={`copy-btn ${copied ? 'copied' : ''}`}
      onClick={handle}
    >
      {copied ? 'COPIED' : 'COPY'}
    </button>
  )
}

export default function Account({ onCopy }) {
  const { groom, bride } = invitation
  return (
    <section className="account">
      <span className="punch-right" />
      <div className="section-eyebrow">CONGRATULATIONS</div>
      <h2 className="section-title">마음 전하실 곳</h2>

      <p className="account-intro">
        {`참석이 어려우신 분들을 위해
계좌번호로 마음을 전해주실 수 있습니다.`}
      </p>

      <AccountGroup label="신랑" accounts={groom.accounts} onCopy={onCopy} />
      <AccountGroup label="신부" accounts={bride.accounts} onCopy={onCopy} />
    </section>
  )
}
