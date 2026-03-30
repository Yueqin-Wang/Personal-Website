import SiteLayout from '../components/SiteLayout'
import { makePageStaticProps } from '../lib/siteContent'

export const getStaticProps = makePageStaticProps('research')

function ResearchItem({ item }) {
  return (
    <div className="paper-item">
      <h3>
        {item.href ? (
          <a href={item.href} className="text-link" target="_blank" rel="noreferrer">
            {item.title}
          </a>
        ) : (
          item.title
        )}
      </h3>
      <p className="paper-meta">{item.meta}</p>
      <p>{item.summary}</p>
    </div>
  )
}

export default function Research({ site, pageContent }) {
  return (
    <SiteLayout title={pageContent.title} subtitle={pageContent.subtitle} site={site}>
      <section className="card">
        <h2>{pageContent.publishedTitle}</h2>
        {pageContent.publishedPapers.map((paper) => (
          <ResearchItem item={paper} key={paper.title} />
        ))}
      </section>

      <section className="card">
        <h2>{pageContent.workingTitle}</h2>
        {pageContent.workingPapers.map((paper) => (
          <ResearchItem item={paper} key={paper.title} />
        ))}
      </section>

      <section className="card">
        <h2>{pageContent.projectsTitle}</h2>
        <div className="timeline">
          {pageContent.projects.map((project) => (
            <div className="timeline-item" key={`${project.time}-${project.title}`}>
              <p className="time">{project.time}</p>
              <div>
                <h3>{project.title}</h3>
                <p className="paper-meta">{project.role}</p>
                <p>{project.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>{pageContent.conferencesTitle}</h2>
        <ul className="clean-list">
          {pageContent.conferences.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  )
}
