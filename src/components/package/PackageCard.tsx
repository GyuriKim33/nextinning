import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import baseballBat from '../../assets/images/bat.png'

type PackageVisual = 'goods' | 'meal' | 'pottery' | 'cafe'

interface PackagePart {
  label: string
  title: string
  description: ReactNode
  visual: PackageVisual
}

export interface PackageItem {
  number: number
  tone: 'green' | 'purple'
  price: string
  title: string
  titleIcon: string
  description: ReactNode
  workshop: PackagePart
  local: PackagePart
  duration: string
  audience: string
  included: string
  path: string
}

interface PackageCardProps {
  item: PackageItem
}

function PackageVisual({ type }: { type: PackageVisual }) {
  const content = {
    goods: <><span>⚾</span><img className="package-baseball-bat" src={baseballBat} alt="" /><span>👕</span></>,
    meal: <><span>🍗</span><span>🍲</span></>,
    pottery: <><span className="package-pottery-copy">2026.07.24<br />LOTTE<br />FIGHTING!</span><span>🏺</span><span>🖌️</span></>,
    cafe: <><span>☕</span><span>🍰</span></>,
  }[type]

  return <div className={`package-scene package-scene--${type}`} aria-hidden="true">{content}</div>
}

function PackageCard({ item }: PackageCardProps) {
  return (
    <article className={`package-card package-card--${item.tone}`}>
      <header className="package-card-header">
        <div className="package-card-labels"><b>추천</b><span>PACKAGE {item.number}</span></div>
        <strong className="package-price">{item.price}</strong>
        <h2>{item.title} <span aria-hidden="true">{item.titleIcon}</span></h2>
        <p>{item.description}</p>
      </header>

      <div className="package-combination">
        <section className="package-part">
          <span className="package-part-label">{item.workshop.label}</span>
          <h3>{item.workshop.title}</h3>
          <p>{item.workshop.description}</p>
          <PackageVisual type={item.workshop.visual} />
        </section>

        <span className="package-plus" aria-label="그리고">+</span>

        <section className="package-part">
          <span className="package-part-label">{item.local.label}</span>
          <h3>{item.local.title}</h3>
          <p>{item.local.description}</p>
          <PackageVisual type={item.local.visual} />
        </section>
      </div>

      <div className="package-summary">
        <div><span aria-hidden="true">◷</span><p><small>총 소요 시간</small><strong>{item.duration}</strong></p></div>
        <div><span aria-hidden="true">♟</span><p><small>추천 대상</small><strong>{item.audience}</strong></p></div>
        <div><span aria-hidden="true">□</span><p><small>포함 내역</small><strong>{item.included}</strong></p></div>
      </div>

      <Link className="package-detail-link" to={item.path}>
        패키지 자세히 보기 <span aria-hidden="true">›</span>
      </Link>
    </article>
  )
}

export default PackageCard
