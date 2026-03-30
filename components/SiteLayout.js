import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const defaultNavItems = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/resume', label: 'CV' },
]

export default function SiteLayout({ title, subtitle, site, children }) {
  const router = useRouter()
  const navigation = site?.navigation?.length ? site.navigation : defaultNavItems
  const kicker = site?.kicker ?? 'Personal Academic Website'
  const footerName = site?.footerName ?? title
  const footerLastUpdated = site?.footerLastUpdated
  const pageTitle = footerName === title ? title : `${title} | ${footerName}`
  const pageDescription = subtitle ?? kicker

  return (
    <div className="site-shell">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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

        <main className="content-stack">{children}</main>

        <footer className="site-footer">
          <p>
            Copyright {new Date().getFullYear()} {footerName}
            {footerLastUpdated ? ` | Last updated: ${footerLastUpdated}` : ''}
          </p>
        </footer>
      </div>
    </div>
  )
}
