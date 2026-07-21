import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ticket-upload.css'

function TicketUploadPage() {
  const navigate = useNavigate()
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isScanning, setIsScanning] = useState(false)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const moveToConfirm = () => navigate('/ticket/confirm')

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.[0] || isScanning) return

    setIsScanning(true)
    timerRef.current = setTimeout(moveToConfirm, 2000)
  }

  return (
    <div className="ticket-upload-shell">
      <section className="ticket-upload-page" aria-busy={isScanning}>
        <header className="ticket-upload-header">
          <button
            className="ticket-back-button"
            type="button"
            aria-label="뒤로가기"
            onClick={() => navigate(-1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <h1>티켓 등록</h1>
          <span className="header-spacer" aria-hidden="true" />
        </header>

        <div className="ticket-upload-content">
          <p className="ticket-upload-intro">
            오늘의 <strong>PASS</strong>를 만들기 위해
            <br />
            경기 티켓을 등록해주세요.
          </p>

          <div className="upload-card">
            <div className="ticket-camera-visual" aria-hidden="true">
              <div className="ticket-shape">
                <span className="ticket-fold" />
                <span className="camera-icon">
                  <i />
                </span>
              </div>
              <i className="spark spark--one">+</i>
              <i className="spark spark--two">+</i>
              <i className="spark spark--three">◆</i>
            </div>

            <h2>티켓을 업로드하세요</h2>
            <p>PNG / JPG</p>

            <label className="photo-select-button">
              <span className="photo-icon" aria-hidden="true" />
              사진 선택
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleFileChange}
                disabled={isScanning}
              />
            </label>
          </div>

          <div className="upload-divider" aria-hidden="true">
            <span>또는</span>
          </div>

          <button
            className="manual-entry-button"
            type="button"
            onClick={moveToConfirm}
            disabled={isScanning}
          >
            <span className="pencil-icon" aria-hidden="true" />
            직접 입력
          </button>
        </div>

        <button
          className="ticket-next-button"
          type="button"
          onClick={moveToConfirm}
          disabled={isScanning}
        >
          다음
        </button>

        {isScanning && (
          <div className="ticket-scanning" role="status" aria-live="polite">
            <span className="scanning-spinner" aria-hidden="true" />
            <strong>티켓을 인식하는 중...</strong>
            <p>잠시만 기다려주세요.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default TicketUploadPage
