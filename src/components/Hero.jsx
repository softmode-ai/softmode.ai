import clayIntelligent from '/assets/images/clay-intelligent.svg'
import heroImg from '/assets/images/hero.png'

export default function Hero() {
  return (
    <section id="s-hero" className="two-col">
      <div>
        <img className="section-img section-img--left section-img--text" src={clayIntelligent}
          alt="Clay is a very intelligent material" />
        <p className="caption">A new programming language for AI</p>
      </div>
      <img className="section-img" src={heroImg} alt="Clay sculpture" />
    </section>
  )
}
