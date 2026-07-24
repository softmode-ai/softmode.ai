import instagramSvg from '/assets/images/instagram.svg'

const links = [
  { href: '#', label: 'Home' },
  { href: '#s-research', label: 'Research' },
  { href: '#s-team', label: 'Team' },
  { href: '#s-featured', label: 'In the field' },
  { href: '#s-experiments', label: 'Collaborate' },
  { href: '#s-language', label: 'Partner' },
]

export default function Nav() {
  return (
    <nav>
      <span className="brand">CL[AI]</span>
      <ul>
        {links.map((link) => (
          <li key={link.href}><a href={link.href}>{link.label}</a></li>
        ))}
        <li>
          <a href="https://www.instagram.com/softmode.ai" target="_blank" rel="noopener" aria-label="Instagram">
            <img src={instagramSvg} width="20" height="20" alt="Instagram" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
