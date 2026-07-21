interface OptionCardProps {
  icon: string
  title: string
  description: string
  selected: boolean
  onSelect: () => void
  accent?: 'green' | 'purple'
}

function OptionCard({ icon, title, description, selected, onSelect, accent = 'green' }: OptionCardProps) {
  return (
    <button className={`route-option ${selected ? 'is-selected' : ''} route-option--${accent}`} type="button" role="radio" aria-checked={selected} onClick={onSelect}>
      <span className="route-option-icon" aria-hidden="true">{icon}</span>
      <strong>{title}</strong>
      <small>{description}</small>
      <span className="route-option-check" aria-hidden="true">✓</span>
    </button>
  )
}

export default OptionCard
