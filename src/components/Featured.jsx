import claiImg from '/assets/images/clai.jpg'

export default function Featured() {
  return (
    <section id="s-featured" className="two-col">
      <div>
        <h2>In the field</h2>
        <p className="caption">Winner of the Tenstorrent Prize at MIT Hardmode Hackathon. Sponsored by Anthropic to exhibit at
          Code with Claude San Francisco 2026.</p>
      </div>
      <div className="video-thumb-wrap">
        <a href="https://www.youtube.com/watch?v=Ed4tlTvBUUI" target="_blank" rel="noopener" className="video-thumb-link">
          <img className="section-img featured-photo" src={claiImg} alt="CLAI at MIT Hardmode" />
          <span className="video-play-btn" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </a>
        <a href="https://www.youtube.com/watch?v=Ed4tlTvBUUI" target="_blank" rel="noopener" className="video-watch-link">
          <span className="video-watch-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          Watch the presentation
        </a>
      </div>
      <div className="featured-logos">
        <div className="featured-badge">
          <a href="https://hardmode.media.mit.edu/" target="_blank" rel="noopener" className="featured-name">MIT Hardmode
            Hackathon</a>
          <p>Sponsor prize winner</p>
        </div>
        <div className="featured-badge">
          <a href="https://claude.com/code-with-claude" target="_blank" rel="noopener" className="featured-name">Code with
            Claude Conference</a>
          <p>Exhibiting at</p>
        </div>
      </div>
    </section>
  )
}
