import { useState } from 'react'
import { invitation } from '../data/invitation'
import NaverMap from './NaverMap'

function NaverIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#03C75A" />
      <path
        d="M9 6.5 H12 L15 12.6 V6.5 H17 V17.5 H14 L11 11.4 V17.5 H9 Z"
        fill="#ffffff"
      />
    </svg>
  )
}

function KakaoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#FEE500" />
      <path
        d="M12 6.4 C7.6 6.4 4 9.1 4 12.5 C4 14.7 5.4 16.6 7.5 17.7 L6.7 20.7 C6.6 21 7 21.2 7.2 21.1 L10.8 18.6 C11.2 18.6 11.6 18.7 12 18.7 C16.4 18.7 20 16 20 12.5 C20 9.1 16.4 6.4 12 6.4 Z"
        fill="#3A1D1D"
      />
    </svg>
  )
}

function DirectionRoute({ route }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="dir-route">
      <button
        type="button"
        className={`dir-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="dir-toggle-text">
          <span className="dir-toggle-label">{route.label}</span>
          <span className="dir-toggle-title">{route.title}</span>
        </span>
        <span className="arrow">▾</span>
      </button>

      {open && (
        <div className="dir-body">
          {route.alert && (
            <div className="dir-alert" role="note">
              <div className="dir-alert-title">{route.alert.title}</div>
              <p className="dir-alert-body">{route.alert.body}</p>
            </div>
          )}
          {route.lead && <p className="dir-lead">{route.lead}</p>}
          <ol className="dir-steps">
            {route.steps.map((step, i) => (
              <li className="dir-step" key={i}>
                <div className="dir-step-head">
                  <span className="dir-step-num">{i + 1}</span>
                  <span className="dir-step-text">
                    {step.text}
                    {step.sub && <span className="dir-step-sub">{step.sub}</span>}
                  </span>
                </div>
                {step.imgs.length > 0 && (
                  <div className={`dir-step-imgs count-${step.imgs.length}`}>
                    {step.imgs.map((src) => (
                      <img
                        key={src}
                        className="dir-step-img"
                        src={src}
                        alt={`${route.title} ${i + 1}단계 — ${step.text}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>
          {route.notes.length > 0 && (
            <div className="dir-notes">
              {route.notes.map((note) => (
                <p
                  key={note}
                  className={`dir-note ${note.startsWith('※') ? 'warn' : ''}`}
                >
                  {note}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function MapSection() {
  const { wedding, directions } = invitation
  return (
    <section className="map">
      <span className="punch-right" />
      <div className="section-eyebrow">案內</div>
      <h2 className="section-title">오시는 길</h2>

      <NaverMap />

      <div className="map-buttons">
        <a
          href={wedding.naverMapUrl}
          target="_blank"
          rel="noreferrer"
          className="brand-btn brand-naver"
          aria-label="네이버 지도에서 보기"
        >
          <NaverIcon />
          <span>네이버 지도</span>
        </a>
        <a
          href={wedding.kakaoMapUrl}
          target="_blank"
          rel="noreferrer"
          className="brand-btn brand-kakao"
          aria-label="카카오맵에서 보기"
        >
          <KakaoIcon />
          <span>카카오맵</span>
        </a>
      </div>

      <div className="map-info">
        <div className="map-info-row">
          <div className="map-info-label">지하철</div>
          <div className="map-info-body">
            2호선 · 8호선 <b>잠실역 4번 출구</b>
          </div>
        </div>
        <div className="map-info-row">
          <div className="map-info-label">버스</div>
          <div className="map-info-body">
            간선 <b>301 · 341</b> / 광역 <b>1007</b><br />
            공항 <b>6705A · 6200 · N6703</b>(인천) <span className="muted">· 김포는 환승 필요</span><br />
            <span className="muted">잠실역.롯데월드 정류장 하차</span>
          </div>
        </div>
        <div className="map-info-row">
          <div className="map-info-label">도보</div>
          <div className="map-info-body">
            잠실역 4번 출구에서 <b>지상 · 지하</b> 두 경로 모두 연결되며,
            엘리베이터로 3층 <b>롯데월드 민속박물관 전통혼례장</b>으로 오시면 됩니다.<br />
            <span className="note">
              길을 물으실 때는 &lsquo;3층&rsquo;보다 <b>&lsquo;롯데월드 민속박물관 전통혼례장&rsquo;</b>으로
              말씀해 주시면 안내받기 쉽습니다.
            </span><br />
            <span className="note">아래 상세 경로를 참고해 주세요.</span>
          </div>
        </div>
        <div className="map-info-row">
          <div className="map-info-label">주차</div>
          <div className="map-info-body">
            롯데월드 <b>지하주차장</b> · <b>옥외지상주차장</b> 이용 가능<br />
            <span className="note">
              주차 2시간 무료 — 주차확인은 피로연회장 <b>&lsquo;주막&rsquo; 카운터</b>에서 하셔야 합니다.
            </span><br />
            <span className="note">
              ※ 예식일은 <b>롯데마트 휴무일</b>이라 마트 3층 연결통로가 막힙니다.
              아래 상세 경로대로 오시면 됩니다.
            </span><br />
            <span className="note">
              ※ <b>롯데월드타워 · 롯데월드몰</b> 주차장은 무료주차가 적용되지 않습니다.
            </span>
          </div>
        </div>
        <div className="map-info-row">
          <div className="map-info-label">ATM</div>
          <div className="map-info-body">
            <b>신한은행</b> ATM 지하 1층<br />
            <b>KB국민은행</b> ATM 1층
          </div>
        </div>
        <div className="map-info-row">
          <div className="map-info-label">참고</div>
          <div className="map-info-body note">
            혼례 시간대(오전~정오)는 주차장과 출입 동선이 혼잡할 수 있습니다.
            여유 있게 출발 부탁드립니다.
          </div>
        </div>
      </div>

      {directions.length > 0 && (
        <div className="directions">
          <div className="dir-heading">상세 경로 안내</div>
          {directions.map((route) => (
            <DirectionRoute key={route.key} route={route} />
          ))}
        </div>
      )}
    </section>
  )
}
