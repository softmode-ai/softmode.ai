import topologyImg from '/assets/images/curvature-density-topology.png'

export default function Form() {
  return (
    <section id="s-form" className="two-col">
      <div>
        <h2>What if form became code</h2>
      </div>
      <div className="image-wrap">
        <img className="section-img" src={topologyImg}
          alt="Clay form with curvature, density and topology annotations" />
      </div>
    </section>
  )
}
