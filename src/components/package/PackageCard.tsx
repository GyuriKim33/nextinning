import { Link } from 'react-router-dom'

export interface PackageItem {
  id: string
  icon: 'keyring' | 'perfume' | 'pottery'
  badge: string
  audiences: ('couple' | 'friends' | 'family')[]
  title: string
  description: string
  duration: string
  price: string
  includes: string[]
  tone: 'purple' | 'pink' | 'green'
}

interface PackageCardProps {
  item: PackageItem
}

function PackageCard({ item }: PackageCardProps) {
  return (
    <article className={`package-card package-card--${item.tone}`}>
      <div className={`package-illustration package-illustration--${item.icon}`} aria-hidden="true">
        <i /><i /><i />
      </div>

      <div className="package-card-info">
        <span className="package-badge">{item.badge}</span>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="package-meta">
          <div><span className="meta-symbol">◷</span><p><small>소요 시간</small><strong>{item.duration}</strong></p></div>
          <div><span className="meta-symbol">₩</span><p><small>가격</small><strong>{item.price}</strong></p></div>
        </div>
      </div>

      <div className="package-includes">
        <strong>포함 내역</strong>
        {item.includes.map((included, index) => <span key={included}><i aria-hidden="true">{index + 1}</i>{included}</span>)}
      </div>

      <Link className="package-detail-link" to={`/packages/${item.id}`}>
        자세히 보기 <span aria-hidden="true">›</span>
      </Link>
    </article>
  )
}

export default PackageCard
