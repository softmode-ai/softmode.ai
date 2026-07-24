import materialLanguage from '/assets/images/material-language.png'

export default function Clai() {
  return (
    <section id="s-clai">
      <div>
        <h2>CL[AI]</h2>
        <p className="caption">A material<br />programming language</p>
        <p className="caption caption--upper">The object<br />becomes<br />the prompt</p>
      </div>
      <img className="section-img" src={materialLanguage}
        alt="Clay object transforming into digital outputs" />
    </section>
  )
}
