import { useEffect, useRef, useState } from 'react'
import { invitation } from '../data/invitation'

const SCRIPT_ID = 'naver-maps-script'

function loadNaverMapsScript(keyId) {
  return new Promise((resolve, reject) => {
    if (window.naver?.maps) {
      resolve()
      return
    }
    const existing = document.getElementById(SCRIPT_ID)
    if (existing) {
      existing.addEventListener('load', resolve)
      existing.addEventListener('error', reject)
      return
    }
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(keyId)}`
    script.async = true
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

const KEY_ID = import.meta.env.VITE_NAVER_MAP_CLIENT_ID

export default function NaverMap() {
  const { wedding } = invitation
  const containerRef = useRef(null)
  const [status, setStatus] = useState(KEY_ID ? 'loading' : 'no-key')

  useEffect(() => {
    if (!KEY_ID) return
    let cancelled = false
    loadNaverMapsScript(KEY_ID)
      .then(() => {
        if (cancelled || !containerRef.current) return
        const { naver } = window
        const center = new naver.maps.LatLng(wedding.lat, wedding.lng)

        const map = new naver.maps.Map(containerRef.current, {
          center,
          zoom: 16,
          minZoom: 13,
          maxZoom: 19,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT,
            style: naver.maps.ZoomControlStyle.SMALL,
          },
        })

        const marker = new naver.maps.Marker({
          position: center,
          map,
          title: wedding.venueName,
        })

        const infoWindow = new naver.maps.InfoWindow({
          content: `
            <div style="padding: 10px 14px; font-family: 'Pretendard','Apple SD Gothic Neo',sans-serif; line-height: 1.5; min-width: 180px;">
              <div style="color:#b8332a; font-size:11px; letter-spacing:0.18em; margin-bottom:4px; font-family:'Inter',sans-serif;">LOTTE WORLD WEDDING</div>
              <div style="color:#2c2620; font-weight:700; font-size:14px;">${wedding.venueName}</div>
              <div style="color:#5c534a; font-size:12px; margin-top:2px;">${wedding.venueDetail}</div>
            </div>`,
          borderColor: '#2c2620',
          borderWidth: 1,
          anchorSize: new naver.maps.Size(10, 10),
          pixelOffset: new naver.maps.Point(0, -4),
        })
        infoWindow.open(map, marker)

        naver.maps.Event.addListener(marker, 'click', () => {
          if (infoWindow.getMap()) infoWindow.close()
          else infoWindow.open(map, marker)
        })

        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [wedding])

  if (status === 'no-key') {
    return (
      <div className="map-embed">
        NAVER MAP · CLIENT KEY NOT CONFIGURED
      </div>
    )
  }
  if (status === 'error') {
    return (
      <div className="map-embed">
        NAVER MAP · LOAD FAILED
      </div>
    )
  }
  return (
    <div className="naver-map-wrap">
      <div ref={containerRef} className="naver-map" />
    </div>
  )
}
