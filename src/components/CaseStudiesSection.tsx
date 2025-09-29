export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "E-commerce Platform Optimization",
      industry: "E-commerce",
      results: "+340% Traffic Increase",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      metrics: {
        traffic: "+340%",
        conversions: "+180%",
        revenue: "+250%"
      }
    },
    {
      title: "SaaS Startup Growth",
      industry: "SaaS",
      results: "+420% Organic Traffic",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      metrics: {
        traffic: "+420%",
        leads: "+320%",
        signups: "+280%"
      }
    },
    {
      title: "B2B Service Provider",
      industry: "B2B Services",
      results: "+280% Lead Generation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      metrics: {
        traffic: "+280%",
        leads: "+350%",
        demos: "+220%"
      }
    }
  ];

  return (
    <section id="case-studies" className="case-studies-section">
      <div className="case-studies-container">
        <h2 className="case-studies-title">Case Studies</h2>
        <p className="case-studies-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-header">
                <div className="case-study-industry">{study.industry}</div>
                <div className="case-study-results">{study.results}</div>
              </div>
              
              <h3 className="case-study-title">{study.title}</h3>
              <p className="case-study-description">{study.description}</p>
              
              <div className="case-study-metrics">
                <div className="metric">
                  <span className="metric-label">Traffic</span>
                  <span className="metric-value">{study.metrics.traffic}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Leads</span>
                  <span className="metric-value">{study.metrics.leads}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Revenue</span>
                  <span className="metric-value">{study.metrics.revenue || study.metrics.signups || study.metrics.demos}</span>
                </div>
              </div>
              
              <div className="case-study-footer">
                <span className="case-study-status">TBD - Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
