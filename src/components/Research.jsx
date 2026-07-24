import inputImg from '/assets/images/01-input.png'
import materialImg from '/assets/images/02-material.png'
import outputImg from '/assets/images/03-output.png'

const cards = [
  {
    id: 'research-input',
    heading: 'INPUT',
    title: 'Semantic Interaction Through Shape',
    img: inputImg,
    alt: 'Input illustration',
    text: 'Exploring how much meaning can be communicated to AI through shape.',
  },
  {
    id: 'research-material',
    heading: 'MATERIAL',
    title: 'Advanced Clay-Based Material Systems',
    img: materialImg,
    alt: 'Material illustration',
    text: 'Investigating self-healing, conductive, and polymer/silicone-based materials that embed electronics while remaining easy to shape.',
  },
  {
    id: 'research-output',
    heading: 'OUTPUT',
    title: 'Simulated Shape-Changing Material Output',
    img: outputImg,
    alt: 'Output illustration',
    text: 'Using haptic feedback to explore the user experience of interacting with a hypothetical shape-changing clay capable of representing AI-generated forms. We use simulation to probe materials that do not exist yet.',
  },
]

export default function Research() {
  return (
    <section id="s-research" className="two-col">
      <div className="research-copy">
        <h2>Research Framework</h2>
        <p className="caption">Softmode investigates clay as an input modality, a functional material system, and an embodied output medium for human-AI interaction.</p>
      </div>
      <div className="research-cards">
        {cards.map((card) => (
          <article key={card.id} id={card.id} className="research-card">
            <h3>{card.heading}</h3>
            <p className="research-title">{card.title}</p>
            <img className="research-card-img" src={card.img} alt={card.alt} />
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
