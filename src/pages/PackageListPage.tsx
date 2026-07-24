import { useNavigate } from 'react-router-dom'
import PackageCard from '../components/package/PackageCard'
import type { PackageItem } from '../components/package/PackageCard'
import '../styles/packages.css'

const packages: PackageItem[] = [
  {
    number: 1,
    tone: 'green',
    price: '49,900원',
    title: '응원 굿즈 패키지',
    titleIcon: '⚾',
    description: <>행궁동 공방에서 우리 팀 굿즈를 만들고, 영화동 맛집에서 승리의 기쁨을 나눠요!</>,
    workshop: {
      label: '① 행궁동 공방 체험',
      title: '응원팀 굿즈 키링 만들기',
      description: <>야구공, 배트, 구단 캐릭터,<br />유니폼 키링 중 선택!</>,
      visual: 'goods',
    },
    local: {
      label: '② 인근 맛집 · 영화동',
      title: '든든한 한 끼',
      description: <>승리의 기운을 이어갈<br />영화동 로컬 맛집!</>,
      visual: 'meal',
    },
    duration: '약 2시간',
    audience: '커플 · 친구 · 가족',
    included: '공방 체험 + 식당 1곳',
    path: '/packages/goods',
  },
  {
    number: 2,
    tone: 'purple',
    price: '49,900원',
    title: '직관 기억 패키지',
    titleIcon: '🏺',
    description: <>오늘의 경기 날짜와 응원 문구를 담은 도자기를 만들고,<br />조원동 감성 카페에서 여유를 즐겨요!</>,
    workshop: {
      label: '① 행궁동 공방 체험',
      title: '직관 기억 도자기 만들기',
      description: <>오늘의 경기 날짜와<br />응원 문구를 새겨요!</>,
      visual: 'pottery',
    },
    local: {
      label: '② 인근 카페 · 조원동',
      title: '감성 카페 타임',
      description: <>조원동의 분위기 좋은<br />카페에서 휴식!</>,
      visual: 'cafe',
    },
    duration: '약 2시간',
    audience: '커플 · 친구',
    included: '공방 체험 + 카페 1곳',
    path: '/packages/pottery',
  },
]

function PackageListPage() {
  const navigate = useNavigate()

  return (
    <div className="packages-shell">
      <main className="packages-page">
        <header className="packages-header">
          <button type="button" aria-label="뒤로가기" onClick={() => navigate(-1)}>←</button>
          <h1><span>행궁동</span> 공방 패키지</h1>
          <p>경기 후 행궁동 공방 체험과 인근 맛집·카페를 함께 즐겨보세요!</p>
        </header>

        <section className="package-list" aria-label="행궁동 지역 연계 패키지">
          {packages.map((item) => <PackageCard key={item.number} item={item} />)}
        </section>

        <p className="packages-footnote">
          <span className="packages-footnote-icon" aria-hidden="true">i</span>
          <span className="packages-footnote-copy">
            선택 후 예약 확정 단계에서 시간과 세부 내용을 확인할 수 있어요.
            <em>(MVP에서는 미지원)</em>
          </span>
        </p>
      </main>
    </div>
  )
}

export default PackageListPage
