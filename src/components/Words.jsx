import wordsImg from '/assets/images/intelligence-with-words.png'

export default function Words() {
  return (
    <section id="s-words" className="two-col">
      <div>
        <h2>We are still programming intelligence with words</h2>
        <p className="caption">Language constrains<br />Human intent.</p>
      </div>
      <img className="section-img" src={wordsImg} alt="Words dispersing into points" />
    </section>
  )
}
