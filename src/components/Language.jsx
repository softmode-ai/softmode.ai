import notInterfaceImg from '/assets/images/this-is-not-interface.svg'

export default function Language() {
  return (
    <section id="s-language" className="two-col">
      <div>
        <img className="section-img section-img--left section-img--text" src={notInterfaceImg}
          alt="This is not an interface — this is a language" />
      </div>
      <div className="right">
        <div className="cta-pair">
          <div className="cta-block">
            <p className="cta-label">Mission</p>
            <p>Build the first material programming system.</p>
          </div>
        </div>
        <a className="cta cta--full" href="mailto:hi@softmode.ai">Become a partner</a>
      </div>
    </section>
  )
}
