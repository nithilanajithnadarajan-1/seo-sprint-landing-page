export function MonochromeBlog() {
  const blogPosts = [
    {
      id: '1',
      title: 'How to Execute a Complete SEO Sprint in 2 Weeks',
      excerpt: 'A systematic approach to on-page SEO optimization that delivers measurable results within a single day.',
      date: 'Sep 20, 2025',
      readTime: '8 min read',
      category: 'SEO Sprint'
    },
    {
      id: '2',
      title: 'Resource Pages That Actually Drive Traffic: A Data-Driven Approach',
      excerpt: 'Most resource pages are SEO graveyards. Here\'s how to create resource pages that search engines love and users actually engage with.',
      date: 'Sep 18, 2025',
      readTime: '12 min read',
      category: 'Resource Pages'
    },
    {
      id: '3',
      title: 'Unlinked Mentions: The Fastest Way to Reclaim Lost Link Equity',
      excerpt: 'How to systematically find and convert brand mentions into valuable backlinks using automated outreach and relationship building. A complete framework for monitoring, prioritizing, and converting mentions.',
      date: 'Sep 15, 2025',
      readTime: '6 min read',
      category: 'Unlinked Mentions'
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <header className="blog-header">
          <div className="blog-eyebrow">LATEST INSIGHTS</div>
          <h2 className="blog-title">Evidence-Based SEO Knowledge</h2>
          <p className="blog-subtitle">
            Real-world case studies, tactical guides, and data-driven insights.
          </p>
        </header>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
                <div className="blog-meta">
                  <time className="blog-date">{post.date}</time>
                  <span className="blog-divider">•</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
              </div>
              
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  <a href="#" className="blog-card-link">
                    {post.title}
                  </a>
                </h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
              </div>
              
              <div className="blog-card-footer">
                <a href="#" className="blog-read-more">
                  Read Article
                  <span className="blog-arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}