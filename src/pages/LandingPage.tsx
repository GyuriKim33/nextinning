import { Link } from 'react-router-dom'
import '../styles/landing-mobile.css'

function LandingPage() {
  return (
    <div className="landing-app-shell">
      <main className="landing-app">
        <section className="app-hero">
          <div className="app-stars" aria-hidden="true" />
          <div className="app-moon" aria-hidden="true" />
          <div className="app-skyline" aria-hidden="true" />
          <div className="app-stadium" aria-hidden="true">
            <div className="stadium-flags"><i /><i /><i /></div>
            <div className="stadium-roof" />
            <div className="stadium-body"><strong>kt wiz</strong></div>
          </div>
          <div className="app-field" aria-hidden="true"><i /></div>

          <header className="app-brand">
            <strong>NE<span>X</span>T INNING</strong>
            <p>경기가 끝난 뒤,<br />수원에서 시작되는 오늘의 다음 이닝.</p>
          </header>

          <div className="app-hero-copy">
            <h1>오늘의 직관을<br /><em>수원</em>에서<br />완성하세요</h1>
            <p>경기 일정과 취향에 맞는<br />맞춤 코스부터<br />행궁동 체험까지 한 번에.</p>
          </div>
        </section>

        <section className="app-feature-list" aria-label="NEXT INNING 주요 기능">
          <article className="app-feature-card app-feature-card--course">
            <div className="app-feature-copy">
              <div className="app-feature-label"><b>기능 1</b><span>주요 기능</span></div>
              <h2>맞춤 코스 추천받기</h2>
              <p>경기 일정,<br />응원팀, 동행, 머무는 시간을 기반으로</p>
              <p>오늘의 수원 PASS를 추천해드립니다.</p>
            </div>

            <div className="mini-route-map" aria-label="위즈파크에서 행궁동까지 이동 경로">
              <span className="mini-route-line" aria-hidden="true" />
              <div className="mini-pin" aria-hidden="true"><i /></div>
              <div className="mini-stadium" aria-hidden="true"><i /><strong>WIZ</strong></div>
              <div className="mini-hanok" aria-hidden="true"><i /></div>
              <small className="mini-label mini-label--park">위즈파크</small>
              <small className="mini-label mini-label--town">행궁동</small>
            </div>

            <Link className="app-feature-button app-feature-button--course" to="/ticket/upload">
              코스 추천 시작하기 <span aria-hidden="true">›</span>
            </Link>
          </article>

          <article className="app-feature-card app-feature-card--package">
            <div className="app-feature-copy">
              <div className="app-feature-label"><b>기능 2</b><span>서브 기능</span></div>
              <h2>공방 패키지 예약하기</h2>
              <p>행궁동 공방 체험 패키지를<br />미리 예약하고</p>
              <p>특별한 직관 추억을 만들어보세요.</p>
            </div>

            <div className="mini-crafts" aria-label="키링, 머그컵, 향수, 야구 유니폼 공방 체험">
              <div className="mini-craft mini-craft--keyring" aria-hidden="true"><i /></div>
              <div className="mini-craft mini-craft--mug" aria-hidden="true"><i /></div>
              <div className="mini-craft mini-craft--perfume" aria-hidden="true"><i /></div>
              <div className="mini-craft mini-craft--uniform" aria-hidden="true">WIZ</div>
            </div>

            <Link className="app-feature-button app-feature-button--package" to="/packages">
              패키지 둘러보기 <span aria-hidden="true">›</span>
            </Link>
          </article>
        </section>

        <nav className="app-bottom-nav" aria-label="하단 메뉴">
          <button type="button"><span className="nav-icon nav-icon--route" aria-hidden="true">⌑</span><small>오늘의 코스</small></button>
          <button type="button"><span className="nav-icon nav-icon--ticket" aria-hidden="true">▱</span><small>티켓 등록</small></button>
          <button type="button"><span className="nav-icon nav-icon--heart" aria-hidden="true">♡</span><small>저장한 PASS</small></button>
          <button type="button"><span className="nav-icon nav-icon--profile" aria-hidden="true">○</span><small>내 정보</small></button>
        </nav>

        <p className="location-notice"><span aria-hidden="true">⌖</span> 현재 위치를 기반으로 추천 코스가 제공됩니다.</p>
      </main>
    </div>
  )
}

export default LandingPage
