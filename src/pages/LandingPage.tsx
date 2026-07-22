import { Link } from 'react-router-dom'
import heroBackground from '../assets/images/bg.png'
import featureCourseImage from '../assets/images/ft2.png'
import featurePackageImage from '../assets/images/real2.png'
import heroTicketImage from '../assets/images/ft22.png'
import '../styles/landing-mobile.css'
import '../styles/landing-compact.css'

function LandingPage() {
  return (
    <div className="landing-app-shell">
      <main className="landing-app">
        <section className="app-hero">
          <img className="app-hero-background" src={heroBackground} alt="수원 KT위즈파크와 수원화성의 야경" />
          <img className="app-hero-background app-hero-background--stadium" src={heroBackground} alt="" aria-hidden="true" />
          <img className="app-hero-background app-hero-background--fortress" src={heroBackground} alt="" aria-hidden="true" />
          <div className="app-stars" aria-hidden="true" />
          <div className="app-moon" aria-hidden="true" />
          <div className="app-skyline" aria-hidden="true" />
          <div className="app-stadium" aria-hidden="true">
            <div className="stadium-flags"><i /><i /><i /></div>
            <div className="stadium-roof" />
            <div className="stadium-body"><strong>kt wiz</strong></div>
          </div>
          <div className="app-field" aria-hidden="true"><i /></div>
          <img className="app-hero-ticket-image" src={heroTicketImage} alt="KT WIZ 야구 경기 티켓" />

          <header className="app-brand">
            <strong>NE<span>X</span>T INNING</strong>
            <p>경기가 끝난 뒤,<br />수원에서 시작되는 오늘의 다음 이닝.</p>
          </header>

          <div className="app-hero-copy">
            <h1>오늘의 직관을<br /><em>수원</em>에서 완성하세요</h1>
            <p>경기 일정과 취향에 맞는 맞춤 코스부터<br />행궁동 공방 체험까지 한 번에!</p>
          </div>
        </section>

        <section className="app-feature-list" aria-label="NEXT INNING 주요 기능">
          <article className="app-feature-card app-feature-card--course">
            <div className="app-feature-copy">
              <div className="app-feature-label"><b>기능 1</b></div>
              <h2>경기 전후 맞춤 로컬 코스</h2>
              <p>경기 일정, 응원팀, 동행, 머무는 시간을 기반으로<br />오늘의 수원 코스를 추천해드립니다.</p>
            </div>

            <div className="mini-route-map mini-route-map--ticket">
              <img src={featureCourseImage} alt="수원 맞춤 코스 안내" />
            </div>

            <Link className="app-feature-button app-feature-button--course" to="/ticket/upload">
              코스 추천 시작하기 <span aria-hidden="true">›</span>
            </Link>
          </article>

          <article className="app-feature-card app-feature-card--package">
            <div className="app-feature-copy">
              <div className="app-feature-label"><b>기능 2</b></div>
              <h2>직관 기억 굿즈 공방</h2>
              <p>행궁동 공방 체험 패키지를 미리 예약하고<br />특별한 직관 추억을 만들어보세요.</p>
            </div>

            <div className="mini-route-map mini-route-map--ticket">
              <img src={featurePackageImage} alt="행궁동 공방 굿즈 패키지" />
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

      </main>
    </div>
  )
}

export default LandingPage
