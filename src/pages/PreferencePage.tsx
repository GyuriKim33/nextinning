import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ktWizLogo from '../assets/images/ktwiz.png'
import lotteLogo from '../assets/images/lotte.png'
import '../styles/preference.css'

const questions = [
  {
    title: '누구를 응원하나요?',
    description: '직관에서 가장 중요한 한 가지!',
    options: [
      { value: 'kt', label: 'KT WIZ', icon: 'KT', tone: 'wiz' },
      { value: 'lotte', label: 'LOTTE GIANTS', icon: 'LOTTE', tone: 'giants' },
    ],
  },
  {
    title: '누구와 함께 왔나요?',
    description: '함께한 사람에 따라 코스가 달라져요.',
    options: [
      { value: 'solo', label: '혼자', icon: '🧍', tone: 'solo' },
      { value: 'couple', label: '연인', icon: '💑', tone: 'couple' },
      { value: 'friends', label: '친구', icon: '🧑‍🤝‍🧑', tone: 'friends' },
      { value: 'family', label: '가족', icon: '👪', tone: 'family' },
    ],
  },
  {
    title: '수원에서 얼마나\n머물 수 있나요?',
    description: '머무는 시간에 맞춰 코스를 추천해드려요.',
    options: [
      { value: '1h', label: '1시간', subLabel: '가볍게 즐기기', icon: '', tone: 'time' },
      { value: '2-3h', label: '2~3시간', subLabel: '알차게 즐기기', icon: '', tone: 'time-blue' },
      { value: 'half-day', label: '반나절', subLabel: '여유롭게 즐기기', icon: '☀', tone: 'sun' },
      { value: 'overnight', label: '1박', subLabel: '하루를 온전히 즐기기', icon: '☾', tone: 'night' },
    ],
  },
] as const

function PreferencePage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<(string | null)[]>([null, null, null])

  const question = questions[step]
  const selectedValue = answers[step]

  const selectOption = (value: string) => {
    setAnswers((current) => current.map((answer, index) => index === step ? value : answer))
  }

  const handleBack = () => {
    if (step > 0) {
      setStep((current) => current - 1)
      return
    }
    navigate(-1)
  }

  const handleNext = () => {
    if (!selectedValue) return
    if (step === questions.length - 1) {
      navigate('/result')
      return
    }
    setStep((current) => current + 1)
  }

  return (
    <div className="preference-shell">
      <section className="preference-page">
        <header className="preference-header">
          <button type="button" aria-label="뒤로가기" onClick={handleBack}>←</button>
          <ol className="step-indicator" aria-label={`총 3단계 중 ${step + 1}단계`}>
            {questions.map((_, index) => (
              <li key={index} className={index === step ? 'is-current' : index < step ? 'is-complete' : ''}>
                <span>{index + 1}</span>
              </li>
            ))}
          </ol>
          <span className="preference-header-spacer" aria-hidden="true" />
        </header>

        <div className="question-panel" key={step}>
          <div className="question-heading">
            <span>QUESTION {step + 1}</span>
            <h1>{question.title}</h1>
            <p>{question.description}</p>
          </div>

          <div className={`option-grid option-grid--step-${step + 1}`} role="radiogroup" aria-label={question.title}>
            {question.options.map((option) => {
              const isSelected = option.value === selectedValue
              return (
                <button
                  className={`preference-option ${isSelected ? 'is-selected' : ''}`}
                  key={option.value}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => selectOption(option.value)}
                >
                  <span className={`option-visual option-visual--${option.tone}`} aria-hidden="true">
                    {option.value === 'kt' ? <img src={ktWizLogo} alt="" /> : option.value === 'lotte' ? <img src={lotteLogo} alt="" /> : option.icon}
                  </span>
                  <strong>{option.label}</strong>
                  {'subLabel' in option && <small>{option.subLabel}</small>}
                  <span className="selected-check" aria-hidden="true">✓</span>
                </button>
              )
            })}
          </div>
        </div>

        <p className="preference-mvp-notice">
          ※ 현재는 MVP 시연 버전으로, 선택한 조건과 관계없이 동일한 추천 코스가 제공됩니다.
        </p>

        <button className="preference-next-button" type="button" disabled={!selectedValue} onClick={handleNext}>
          {step === questions.length - 1 ? (
            <><span className="pass-button-icon" aria-hidden="true" />내 직관 PASS 만들기</>
          ) : '다음'}
        </button>
      </section>
    </div>
  )
}

export default PreferencePage
