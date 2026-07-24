import teamImg from '/assets/images/team.jpg'

const members = [
  { name: 'Hanji Xu', url: 'https://www.linkedin.com/in/zhiheng-hanji-xu' },
  { name: 'Rajvi Patil', url: 'https://www.linkedin.com/in/rajvi-patil-791960232' },
  { name: 'Thomas Knoepffler', url: 'https://www.linkedin.com/in/thomknoe' },
  { name: 'Margaux Reynolds', url: 'https://www.linkedin.com/in/margaux-reynolds-30291b77' },
  { name: 'Pedro Sacramento', url: 'https://www.linkedin.com/in/pedro-sacramento-1b99b05b' },
]

export default function Team() {
  return (
    <section id="s-team" className="two-col">
      <div className="team-list">
        <h2>Team</h2>
        <ul>
          {members.map((m) => (
            <li key={m.name}>
              <a href={m.url} target="_blank" rel="noopener">{m.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <img className="section-img" src={teamImg} alt="CLAI team" />
    </section>
  )
}
