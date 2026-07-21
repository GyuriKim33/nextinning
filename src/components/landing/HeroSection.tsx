import { Link } from 'react-router-dom'
import PassCard from './PassCard'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-glow hero-glow--left" aria-hidden="true" />
      <div className="hero-glow hero-glow--right" aria-hidden="true" />
      <div className="castle-silhouette" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="stadium-lights" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="field-glow" aria-hidden="true" />

      <header className="hero-header">
        <div className="brand">
          <span className="brand-name">NE<span>X</span>T INNING</span>
          <span className="brand-tagline">
            경기가 끝난 뒤, 수원에서 시작되는 오늘의 다음 이닝.
          </span>
        </div>

        <div className="header-actions">
          <nav className="desktop-nav" aria-label="주요 메뉴">
            <a href="#today-course">오늘의 코스</a>
            <a href="#packages">직관 패키지</a>
            <a href="#my-pass">나의 PASS</a>
          </nav>
          <button className="menu-button" type="button" aria-label="메뉴 열기">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">수원 직관 맞춤 코스 &amp; 체험 패키지</p>
          <h1>
            오늘의 직관을
            <br />
            <strong>수원</strong>에서
            <br />
            완성하세요
          </h1>
          <p className="hero-description">
            티켓을 등록하면 경기 일정과 동행,
            <br />
            경기 결과에 맞춰 수원에서만 가능한
            <br />
            경기 전후 코스를 추천해드려요.
          </p>

          <Link className="hero-cta" to="/ticket/upload">
            <span className="scan-icon" aria-hidden="true">
              <i />
            </span>
            내 티켓으로 PASS 만들기
          </Link>
          <p className="hero-helper">
            <span aria-hidden="true">◷</span>
            사진 한 장이면 10초 만에 추천받을 수 있어요.
          </p>
        </div>

        <div className="pass-card-stage">
          <PassCard />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
