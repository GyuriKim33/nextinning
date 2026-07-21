import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PackageCard from '../components/package/PackageCard'
import type { PackageItem } from '../components/package/PackageCard'
import '../styles/packages.css'

type PackageFilter = 'all' | 'couple' | 'friends' | 'family'

const filters: { value: PackageFilter; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'couple', label: '커플' },
  { value: 'friends', label: '친구' },
  { value: 'family', label: '가족' },
]

const packages: PackageItem[] = [
  {
    id: 'keyring',
    icon: 'keyring',
    badge: '♥ 커플 추천',
    audiences: ['couple'],
    title: '직관 키링 만들기 PASS',
    description: '오늘의 경기 날짜와 응원 문구를 담은 키링 만들기',
    duration: '60분',
    price: '29,000원',
    includes: ['키링 제작', '날짜 각인', '제휴 카페 할인'],
    tone: 'purple',
  },
  {
    id: 'perfume',
    icon: 'perfume',
    badge: '♥ 커플 추천',
    audiences: ['couple'],
    title: '우리만의 향수 PASS',
    description: '오늘의 직관을 향으로 기억하는 커플 체험',
    duration: '80분',
    price: '39,000원',
    includes: ['향수 제작', '라벨 커스텀', '포토스팟 안내'],
    tone: 'pink',
  },
  {
    id: 'pottery',
    icon: 'pottery',
    badge: '♣ 친구·가족 추천',
    audiences: ['friends', 'family'],
    title: '도자기 응원 굿즈 PASS',
    description: '응원 문구를 직접 새기는 도자기 체험',
    duration: '90분',
    price: '45,000원',
    includes: ['도자기 체험', '응원 문구 꾸미기', '완성품 배송'],
    tone: 'green',
  },
]

function PackageListPage() {
  const navigate = useNavigate()
  const [selectedFilter, setSelectedFilter] = useState<PackageFilter>('all')
  const visiblePackages = selectedFilter === 'all'
    ? packages
    : packages.filter((item) => item.audiences.includes(selectedFilter as 'couple' | 'friends' | 'family'))

  return (
    <div className="packages-shell">
      <main className="packages-page">
        <header className="packages-header">
          <button type="button" aria-label="뒤로가기" onClick={() => navigate(-1)}>←</button>
          <h1>직관 패키지</h1>
          <p>오늘의 직관을 직접 만들어 가져갈 수 있는<br />행궁동 체험 패키지를 골라보세요.</p>

          <div className="package-filters" role="group" aria-label="패키지 대상 필터">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={selectedFilter === filter.value ? 'is-active' : ''}
                type="button"
                aria-pressed={selectedFilter === filter.value}
                onClick={() => setSelectedFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </header>

        <section className="package-list" aria-live="polite">
          {visiblePackages.map((item) => <PackageCard key={item.id} item={item} />)}
        </section>

        <p className="packages-footnote"><span aria-hidden="true">✓</span> 모든 패키지는 위즈파크–행궁동 도보 이동 코스와 최적화되어 있어요!</p>
      </main>
    </div>
  )
}

export default PackageListPage
