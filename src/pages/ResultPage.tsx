import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OptionCard from '../components/recommendation/OptionCard'
import ktWizLogo from '../assets/images/ktwiz.png'
import lotteLogo from '../assets/images/lotte.png'
import '../styles/result.css'

const localOptions = [
  { value: 'food', icon: '🍴', title: '식사하기', description: '현지 맛집에서 든든한 저녁' },
  { value: 'cafe', icon: '☕', title: '카페 가기', description: '감성 카페에서 휴식과 디저트' },
  { value: 'karaoke', icon: '🎤', title: '노래방 가기', description: '신나게 한 곡 부르며 스트레스 풀기' },
] as const

const workshopOptions = [
  { value: 'keyring', icon: '🎨', title: '공방 체험', description: '나만의 굿즈 만들기' },
  { value: 'cafe', icon: '☕', title: '행궁동\n카페·맛집', description: '감성 공간에서 힐링' },
  { value: 'night', icon: '🌙', title: '방화수류정\n야경 산책', description: '수원만의 야경 즐기기' },
  { value: 'photo', icon: '📷', title: '수원화성\n포토스팟', description: '성곽에서 인생샷' },
] as const

function ResultPage() {
  const navigate = useNavigate()
  const [selectedLocalOption, setSelectedLocalOption] = useState('food')
  const [selectedWorkshopOption, setSelectedWorkshopOption] = useState('keyring')
  const [isSaved, setIsSaved] = useState(() => localStorage.getItem('savedPass') === 'true')

  const savePass = () => {
    localStorage.setItem('savedPass', 'true')
    setIsSaved(true)
  }

  return (
    <div className="result-shell">
      <main className="result-page">
        <section className="result-hero">
          <button className="result-back" type="button" aria-label="뒤로가기" onClick={() => navigate(-1)}>←</button>
          <div className="result-confetti" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>
          <h1>🎉 <strong>짜릿한 역전승!</strong> 🎉</h1>
          <p className="result-description">
            부산에서 수원까지 응원 와주셔서 감사합니다.<br />
            이 기분, 야구장에서 끝내기엔 아쉽지 않나요?
          </p>

          <article className="victory-pass" aria-label="원정 커플의 주말 나들이 VICTORY PASS">
            <div className="victory-pass__identity">
              <p>TODAY'S NEXT INNING</p>
              <h2>VICTORY<br />PASS</h2>
              <strong>원정 커플의 주말 나들이</strong>
              <span>NEXT INNING</span>
            </div>
            <div className="victory-pass__result">
              <span className="victory-pass__badge">경기 결과</span>
              <div className="victory-pass__teams">
                <div><img src={ktWizLogo} alt="KT WIZ" /></div>
                <b>VS</b>
                <div><img src={lotteLogo} alt="LOTTE GIANTS" /></div>
              </div>
              <div className="victory-pass__score" aria-label="KT 4 대 롯데 5">
                <strong>4</strong><span>:</span><strong className="is-winner">5</strong>
              </div>
              <p>승리의 기운을 안고<br />수원의 <em>다음 이닝</em>을 시작해보세요!</p>
            </div>
          </article>
        </section>

        <section className="route-card" aria-labelledby="route-title">
          <div className="route-card-heading">
            <div>
              <h2 id="route-title">승리의 기운을 이어가세요!</h2>
            </div>
            <button className={`route-save-button ${isSaved ? 'is-saved' : ''}`} type="button" onClick={savePass} aria-label="PASS 저장">
              {isSaved ? '✓' : '♡'}<small>{isSaved ? '저장됨' : '저장'}</small>
            </button>
          </div>

          <div className="journey-timeline">
            <article className="journey-step">
              <div className="journey-marker"><b>1</b><span>출발</span></div>
              <div className="journey-content journey-content--start">
                <div className="journey-copy">
                  <h3><mark>KT위즈파크</mark>에서 출발</h3>
                  <p>승리의 여운을 안고,<br />수원의 다음 이닝을 시작해보세요.</p>
                </div>
                <div className="journey-stadium" aria-label="KT위즈파크 경기장 일러스트"><i /><i /><strong>KT WIZ</strong></div>
                <div className="journey-walk"><span aria-hidden="true">🚶</span><strong>약 10분 도보</strong><i /></div>
              </div>
            </article>

            <article className="journey-step">
              <div className="journey-marker"><b>2</b></div>
              <div className="journey-content">
                <div className="journey-copy">
                  <h3><mark>조원동·영화동</mark>에서 소비하기</h3>
                  <p>위즈파크 근처 맛집과 즐길 거리를 만나보세요.</p>
                </div>
                <div className="route-option-box route-option-box--local">
                  <p>원하는 코스를 선택해보세요! <span>(하나 선택)</span></p>
                  <div className="route-options" role="radiogroup" aria-label="중간 소비 코스 선택">
                    {localOptions.map((option) => (
                      <OptionCard key={option.value} {...option} selected={selectedLocalOption === option.value} onSelect={() => setSelectedLocalOption(option.value)} />
                    ))}
                  </div>
                </div>
                <div className="journey-walk"><span aria-hidden="true">🚶</span><strong>약 10분 도보</strong><i /></div>
              </div>
            </article>

            <article className="journey-step journey-step--last">
              <div className="journey-marker"><b>3</b></div>
              <div className="journey-content">
                <div className="journey-copy">
                  <h3><mark>행궁동</mark>에서 즐기기</h3>
                  <p className="journey-copy-single-line">수원의 명소와 감성 공간을 마음껏 즐겨보세요.</p>
                </div>
                <div className="route-option-box route-option-box--destination">
                  <p>원하는 코스를 선택해보세요! <span>(하나 선택)</span></p>
                  <div className="route-options destination-options" role="radiogroup" aria-label="행궁동 코스 선택">
                    {workshopOptions.map((option) => (
                      <OptionCard key={option.value} {...option} selected={selectedWorkshopOption === option.value} onSelect={() => setSelectedWorkshopOption(option.value)} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="route-summary">
            <div><span className="summary-icon">◷</span><p><small>총 소요시간(예상)</small><strong>3시간 20분</strong></p></div>
            <div><span className="summary-icon summary-icon--wallet">▭</span><p><small>예상 비용</small><strong>52,000원</strong></p></div>
          </div>
        </section>

        <div className="result-actions">
          <button className="result-action result-action--map" type="button" onClick={() => window.alert('지도 기능은 준비 중입니다.')}><span>⌖</span>지도로 코스 한눈에 보기</button>
          <button className="result-action result-action--package" type="button" onClick={() => navigate('/packages')}><span>▣</span>이 코스로 패키지 예약하기</button>
        </div>
      </main>
    </div>
  )
}

export default ResultPage
