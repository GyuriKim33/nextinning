import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OptionCard from '../components/recommendation/OptionCard'
import RouteStep from '../components/recommendation/RouteStep'
import ktWizLogo from '../assets/images/ktwiz.png'
import lotteLogo from '../assets/images/lotte.png'
import '../styles/result.css'

const localOptions = [
  { value: 'food', icon: '🍴', title: '식사하기', description: '현지 맛집에서 든든한 저녁' },
  { value: 'cafe', icon: '☕', title: '카페 가기', description: '감성 카페에서 휴식과 디저트' },
  { value: 'karaoke', icon: '🎤', title: '노래방 가기', description: '신나게 한 곡 부르며 스트레스 풀기' },
] as const

const workshopOptions = [
  { value: 'keyring', icon: '🔑', title: '키링 만들기', description: '오늘의 직관을 담은 기념 키링' },
  { value: 'perfume', icon: '🌸', title: '향수 만들기', description: '우리만의 향으로 추억 남기기' },
  { value: 'pottery', icon: '🏺', title: '도자기 체험', description: '직접 빚고 꾸미는 나만의 작품' },
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
          <h1><strong>짜릿한 역전승!</strong></h1>
          <p className="result-description">
            부산에서 수원까지 응원 와주셔서 감사합니다.<br />
            이 기분, 야구장에서 끝내기엔 아쉽지 않나요?<br />
            승리의 기운을 안고 수원의 다음 이닝을 시작해보세요!
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
                <div><img src={ktWizLogo} alt="KT WIZ" /><small>KT WIZ</small></div>
                <b>VS</b>
                <div><img src={lotteLogo} alt="LOTTE GIANTS" /><small>LOTTE</small></div>
              </div>
              <div className="victory-pass__score" aria-label="KT 4 대 롯데 5">
                <strong>4</strong><span>:</span><strong className="is-winner">5</strong>
              </div>
              <div className="victory-pass__result-tags"><span>짜릿한 역전승!</span><span>한 점 차 승리!</span></div>
              <p>승리의 기운을 안고<br />수원의 <em>다음 이닝</em>을 시작해보세요!</p>
            </div>
          </article>
        </section>

        <section className="route-card" aria-labelledby="route-title">
          <div className="route-card-heading">
            <p>추천</p>
            <h2 id="route-title">승리의 기운을 이어가세요!</h2>
            <span>오늘의 승리를 수원의 소비와 체험,<br />야경으로 오래 기억해보세요.</span>
          </div>

          <div className="route-timeline">
            <RouteStep number={1} time="14:00~17:00" title="KT위즈파크 도착 & 경기 관람" description="주말 낮 경기! 신나게 응원해요." visual="stadium">
              <span className="game-time-badge">경기 시간 14:00~17:00</span>
            </RouteStep>

            <RouteStep number={2} time="17:10" title="조원동·영화동에서 중간 소비" description={<>위즈파크에서 도보 10~15분 거리!<br />구도심의 맛집과 즐길 거리를 만나보세요.</>} visual="old-town" featured>
              <div className="route-option-box route-option-box--local">
                <p>원하는 코스를 선택해보세요! <span>(하나 선택)</span></p>
                <div className="route-options" role="radiogroup" aria-label="중간 소비 코스 선택">
                  {localOptions.map((option) => (
                    <OptionCard key={option.value} {...option} selected={selectedLocalOption === option.value} onSelect={() => setSelectedLocalOption(option.value)} />
                  ))}
                </div>
                <div className="walking-info"><span aria-hidden="true">♟</span> 위즈파크 → 조원동·영화동 도보 10분</div>
              </div>
            </RouteStep>

            <RouteStep number={3} time="18:30" title="행궁동으로 이동" description={<>구도심을 지나 행궁동으로!<br />도보 10~12분 소요</>} visual="walk">
              <div className="inline-route-info"><span aria-hidden="true">♟</span> 조원동·영화동 → 행궁동 도보 10~12분</div>
            </RouteStep>

            <RouteStep number={4} time="18:45" title="행궁동 공방 & 데이트" description="직접 만드는 굿즈로 오늘의 직관을 추억하세요." visual="workshop">
              <div className="route-option-box route-option-box--workshop">
                <p>원하는 체험을 선택해보세요! <span>(하나 선택)</span></p>
                <div className="route-options" role="radiogroup" aria-label="공방 체험 선택">
                  {workshopOptions.map((option) => (
                    <OptionCard key={option.value} {...option} selected={selectedWorkshopOption === option.value} onSelect={() => setSelectedWorkshopOption(option.value)} accent="purple" />
                  ))}
                </div>
              </div>
            </RouteStep>

            <RouteStep number={5} time="20:15" title="방화수류정 야경 산책" description={<>수원의 아름다운 야경으로<br />오늘의 데이트를 마무리하세요.</>} visual="night" last />
          </div>

          <div className="route-summary">
            <div><span className="summary-icon">◷</span><p><small>총 소요시간(예상)</small><strong>3시간 20분</strong></p></div>
            <div><span className="summary-icon summary-icon--wallet">▭</span><p><small>예상 비용</small><strong>52,000원</strong></p></div>
          </div>
        </section>

        <div className="result-actions">
          <button className="result-action result-action--map" type="button" onClick={() => window.alert('지도 기능은 준비 중입니다.')}><span>◇</span>전체 코스 지도 보기</button>
          <button className="result-action result-action--package" type="button" onClick={() => navigate('/packages')}><span>♙</span>공방 패키지 예약하기</button>
          <button className={`result-action result-action--save ${isSaved ? 'is-saved' : ''}`} type="button" onClick={savePass}><span>{isSaved ? '✓' : '▱'}</span>{isSaved ? '저장 완료' : 'PASS 저장하기'}</button>
        </div>
      </main>
    </div>
  )
}

export default ResultPage
