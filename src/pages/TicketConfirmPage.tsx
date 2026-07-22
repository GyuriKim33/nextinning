import { useNavigate } from 'react-router-dom'
import ktWizLogo from '../assets/images/ktwiz.png'
import lotteLogo from '../assets/images/lotte.png'
import '../styles/ticket-confirm.css'

const ticketDetails = [
  { label: '경기 날짜', value: '2026.07.24', icon: 'calendar' },
  { label: '경기 시작 시간', value: '18:30', icon: 'clock' },
  { label: '홈팀', value: 'KT WIZ', icon: 'home' },
  { label: '원정팀', value: 'LOTTE GIANTS', icon: 'away' },
] as const

function TicketConfirmPage() {
  const navigate = useNavigate()

  return (
    <div className="confirm-shell">
      <section className="confirm-page">
        <header className="confirm-header">
          <button type="button" aria-label="뒤로가기" onClick={() => navigate(-1)}>
            ←
          </button>
          <span aria-hidden="true" />
        </header>

        <div className="confirm-content">
          <div className="confirm-heading">
            <span className="confirm-check" aria-hidden="true">✓</span>
            <h1>티켓 정보를 확인해주세요</h1>
            <p>티켓에서 인식한 경기 정보를 확인해주세요.</p>
          </div>

          <article className="game-ticket-card">
            <div className="game-ticket-topline">
              <span>MATCH INFORMATION</span>
              <span className="recognition-badge"><i /> 인식 완료</span>
            </div>

            <div className="game-matchup">
              <div className="confirm-team confirm-team--home">
                <img src={ktWizLogo} alt="KT WIZ" />
              </div>
              <div className="confirm-versus"><span>VS</span></div>
              <div className="confirm-team confirm-team--away">
                <img src={lotteLogo} alt="LOTTE GIANTS" />
              </div>
            </div>

            <div className="game-ticket-divider" aria-hidden="true" />

            <dl className="ticket-detail-list">
              {ticketDetails.map((detail) => (
                <div key={detail.label}>
                  <dt><span className={`detail-symbol detail-symbol--${detail.icon}`} aria-hidden="true" />{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>

        <button className="confirm-next-button" type="button" onClick={() => navigate('/preferences')}>
          다음
        </button>
      </section>
    </div>
  )
}

export default TicketConfirmPage
