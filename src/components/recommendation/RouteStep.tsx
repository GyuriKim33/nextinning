import type { ReactNode } from 'react'

interface RouteStepProps {
  number: number
  time: string
  title: string
  description: ReactNode
  visual: 'stadium' | 'old-town' | 'walk' | 'workshop' | 'night'
  featured?: boolean
  last?: boolean
  children?: ReactNode
}

function RouteStep({ number, time, title, description, visual, featured = false, last = false, children }: RouteStepProps) {
  return (
    <article className={`route-step ${featured ? 'route-step--featured' : ''} ${last ? 'route-step--last' : ''}`}>
      <div className="route-marker">
        <span>{number}</span>
        <time>{time}</time>
      </div>
      <div className="route-step-content">
        <div className="route-step-copy">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={`route-visual route-visual--${visual}`} aria-hidden="true"><i /><i /><i /></div>
        {children}
      </div>
    </article>
  )
}

export default RouteStep
