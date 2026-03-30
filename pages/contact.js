import SiteLayout from '../components/SiteLayout'
import { makePageStaticProps } from '../lib/siteContent'

export const getStaticProps = makePageStaticProps('contact')

export default function Contact({ site, pageContent }) {
  return (
    <SiteLayout title={pageContent.title} subtitle={pageContent.subtitle} site={site}>
      <section className="card contact-grid">
        <div>
          <h2>{pageContent.primaryContactTitle}</h2>
          <p>
            Email:{' '}
            <a href={`mailto:${pageContent.email}`} className="text-link">
              {pageContent.email}
            </a>
          </p>
          <p>Research Areas: {pageContent.researchAreas}</p>
          <p>Location: {pageContent.location}</p>
        </div>
        <div>
          <h2>{pageContent.paperLinksTitle}</h2>
          <ul className="clean-list">
            {pageContent.paperLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  )
}
