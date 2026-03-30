import { useRouter } from 'next/router'
import SiteLayout from '../components/SiteLayout'
import { makePageStaticProps } from '../lib/siteContent'

export const getStaticProps = makePageStaticProps('resume')

export default function Resume({ site, pageContent }) {
  const router = useRouter()
  const downloadHref = `${router.basePath}${pageContent.downloadHref}`

  return (
    <SiteLayout title={pageContent.title} subtitle={pageContent.subtitle} site={site}>
      <section className="card hero-grid">
        <div className="hero-copy">
          <p className="section-eyebrow">{pageContent.profileTitle}</p>
          <p>{pageContent.summary}</p>
          <div className="cta-row">
            <a
              href={downloadHref}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              download
            >
              {pageContent.downloadLabel}
            </a>
          </div>
        </div>

        <div className="meta-panel">
          <h2>Profile</h2>
          <div className="meta-list">
            {pageContent.profileItems.map((item) => (
              <p key={item.label}>
                <span>{item.label}</span>
                {item.value}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="card">
        <div className="section-title-row">
          <h2>{pageContent.educationTitle}</h2>
        </div>
        <div className="timeline">
          {pageContent.education.map((item) => (
            <div className="timeline-item" key={`${item.time}-${item.institution}`}>
              <p className="time">{item.time}</p>
              <div>
                <h3>{item.institution}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>{pageContent.fieldsTitle}</h2>
        <div className="tag-row">
          {pageContent.fields.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className="page-grid">
        <section className="card">
          <h2>{pageContent.honorsTitle}</h2>
          <ul className="clean-list">
            {pageContent.honors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>{pageContent.skillsTitle}</h2>
          <ul className="clean-list">
            {pageContent.skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="card">
        <h2>{pageContent.experienceTitle}</h2>
        <ul className="clean-list">
          {pageContent.experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>{pageContent.conferenceTitle}</h2>
        <ul className="clean-list">
          {pageContent.conferenceItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  )
}
