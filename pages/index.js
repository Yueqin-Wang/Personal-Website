import Link from 'next/link'
import { useRouter } from 'next/router'
import SiteLayout from '../components/SiteLayout'
import { makePageStaticProps } from '../lib/siteContent'

export const getStaticProps = makePageStaticProps('home')

function ActionButton({ href, label, variant }) {
  const className = variant === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary'
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')

  if (isExternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

function resolveAssetPath(basePath, src) {
  if (!src) {
    return src
  }

  return src.startsWith('http') ? src : `${basePath}${src}`
}

export default function Home({ site, pageContent }) {
  const router = useRouter()
  const profileImageSrc = resolveAssetPath(router.basePath, pageContent.profileImage.src)

  return (
    <SiteLayout title={pageContent.title} subtitle={pageContent.subtitle} site={site}>
      <section className="card hero-grid">
        <div className="hero-copy">
          <p className="section-eyebrow">{pageContent.hero.sectionTitle}</p>
          {pageContent.hero.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="tag-row" aria-label="Research topics">
            {pageContent.hero.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="cta-row">
            {pageContent.ctaButtons.map((button) => (
              <ActionButton key={`${button.href}-${button.label}`} {...button} />
            ))}
          </div>
        </div>

        <div className="hero-side">
          <figure className="profile-visual">
            <img
              src={profileImageSrc}
              alt={pageContent.profileImage.alt}
              className="profile-image"
            />
            <figcaption className="profile-caption">
              <p className="section-eyebrow">{pageContent.profileImage.eyebrow}</p>
              <p>{pageContent.profileImage.caption}</p>
            </figcaption>
          </figure>

          <div className="meta-panel">
            <h2>Quick View</h2>
            <div className="meta-list">
              {pageContent.metaItems.map((item) => (
                <p key={item.label}>
                  <span>{item.label}</span>
                  {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-title-row">
          <h2>{pageContent.highlightsTitle}</h2>
        </div>
        <div className="highlight-grid">
          {pageContent.highlights.map((item) => (
            <article className="card highlight-card" key={item.title}>
              <p className="section-eyebrow">{item.title}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-heading">
          <div className="section-title-row">
            <h2>{pageContent.campusGalleryTitle}</h2>
          </div>
          <p className="section-intro">{pageContent.campusGalleryIntro}</p>
        </div>
        <div className="campus-grid">
          {pageContent.campusGallery.map((item) => (
            <article className="campus-card" key={item.institution}>
              <div className="campus-image-wrap">
                <img
                  src={resolveAssetPath(router.basePath, item.imageSrc)}
                  alt={item.imageAlt}
                  className="campus-image"
                />
              </div>
              <div className="campus-body">
                <p className="paper-meta">{item.period}</p>
                <h3>{item.institution}</h3>
                <p className="campus-role">{item.role}</p>
                <p>{item.description}</p>
                <p className="photo-credit">
                  Photo:{' '}
                  <a href={item.creditHref} className="text-link" target="_blank" rel="noreferrer">
                    {item.creditLabel}
                  </a>{' '}
                  · {item.licenseLabel}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-title-row">
          <h2>{pageContent.featuredResearchTitle}</h2>
          <Link href="/research" className="text-link">
            Browse all research
          </Link>
        </div>
        <div className="feature-grid">
          {pageContent.featuredResearch.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="paper-meta">{item.meta}</p>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>{pageContent.linksTitle}</h2>
        <div className="link-groups">
          {pageContent.linkGroups.map((group) => (
            <div className="link-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="link-list">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-link" target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
