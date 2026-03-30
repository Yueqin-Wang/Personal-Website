import Link from 'next/link'
import { useRouter } from 'next/router'

const defaultNavItems = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/resume', label: 'CV' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteLayout({ title, subtitle, site, children }) {
  const router = useRouter()
  const navigation = site?.navigation?.length ? site.navigation : defaultNavItems
  const kicker = site?.kicker ?? 'Personal Academic Website'
  const footerName = site?.footerName ?? title
  const footerLastUpdated = site?.footerLastUpdated

  return (
    <div className="site-shell">
      <div className="bg-shape bg-shape-a" />
      <div className="bg-shape bg-shape-b" />
      <div className="container">
        <header className="site-header card">
          <div>
            <p className="kicker">{kicker}</p>
            <h1>{title}</h1>
            {subtitle ? <p className="subtitle">{subtitle}</p> : null}
          </div>
          <nav className="top-nav" aria-label="Main navigation">
            {navigation.map((item) => {
              const active = router.pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? 'nav-link is-active' : 'nav-link'}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} {footerName}
            {footerLastUpdated ? ` · Last updated: ${footerLastUpdated}` : ''}
          </p>
        </footer>
      </div>
    </div>
  )
}
