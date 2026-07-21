function PassCard() {
  return (
    <div className="pass-stack" aria-label="NEXT INNING 추천 패스 예시">
      <div className="pass-card-back" aria-hidden="true" />
      <article className="pass-card">
        <header className="pass-card-header">
          <p className="pass-brand">NEXT INNING</p>
          <p className="pass-script">Your next experience in Suwon</p>
        </header>

        <div className="matchup">
          <div className="team-badge team-badge--wiz">
            <span>KT</span>
            <strong>WIZ</strong>
          </div>
          <span className="versus">VS</span>
          <div className="team-badge team-badge--lotte">
            <span>LOTTE</span>
            <strong>GIANTS</strong>
          </div>
        </div>

        <div className="match-info">
          <strong>07.24 THU · 18:30</strong>
          <span>수원 KT위즈파크</span>
        </div>

        <div className="ticket-divider" aria-hidden="true" />

        <div className="pass-details">
          <div className="pass-detail">
            <span className="detail-icon" aria-hidden="true">⚑</span>
            <p><strong>AWAY FAN</strong><span>원정팬</span></p>
          </div>
          <div className="pass-detail">
            <span className="detail-icon detail-icon--heart" aria-hidden="true">♥</span>
            <p><strong>COUPLE</strong><span>연인과 함께</span></p>
          </div>
          <div className="pass-detail">
            <span className="detail-icon detail-icon--clock" aria-hidden="true">◷</span>
            <p><strong>2~3시간 코스</strong><span>경기 후 여유롭게 즐기기</span></p>
          </div>
        </div>

        <div className="pass-stamp" aria-hidden="true">
          <span>NEXT INNING</span>
          <small>Suwon Memory</small>
        </div>
        <div className="barcode" aria-hidden="true" />
      </article>
    </div>
  )
}

export default PassCard
