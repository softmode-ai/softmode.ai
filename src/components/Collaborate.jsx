import thumbnailImg from '/experiments/train-the-language/thubmnail.png'

export default function Collaborate() {
  return (
    <section id="s-experiments" className="two-col">
      <div>
        <h2>Collaborate</h2>
        <p className="caption">Contribute to training our models.</p>
        <div className="experiments-grid">
          <a href="/experiments/train-the-language/" className="experiment-card">
            <span className="experiment-label">Contribute</span>
            <h3 className="experiment-title">Train the Language</h3>
            <p className="experiment-desc">Sculpt a form. Tag its meaning. Your contribution trains CL[AI] to understand
              how form translates to feeling.</p>
            <span className="experiment-cta">Start collaborating &rarr;</span>
          </a>
        </div>
      </div>
      <img className="section-img experiments-img" src={thumbnailImg}
        alt="CL[AI] collaborate — material form" />
    </section>
  )
}
