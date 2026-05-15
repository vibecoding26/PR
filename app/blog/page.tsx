import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'what-is-aeo',
    title: 'What is AEO and why every founder needs to understand it in 2025',
    excerpt: 'AI search engines like ChatGPT and Perplexity are changing how people find information. Here\'s how to optimize your content for them.',
    date: 'May 15, 2025',
    category: 'AEO',
    readTime: 6,
  },
  {
    slug: 'pr-articles-ai-search',
    title: 'How PR articles help startups rank in AI search engines',
    excerpt: 'Media coverage is no longer just about credibility. It\'s a critical SEO and AEO strategy. Here\'s why.',
    date: 'May 12, 2025',
    category: 'PR Strategy',
    readTime: 5,
  },
  {
    slug: 'authority-journey',
    title: 'The 7-stage authority journey: how media credibility is built over time',
    excerpt: 'Building lasting authority isn\'t one-off articles. It\'s a systematic journey through positioning, launch, progress, and thought leadership.',
    date: 'May 8, 2025',
    category: 'Authority Building',
    readTime: 8,
  },
  {
    slug: 'startup-pr-mistakes',
    title: 'Startup PR mistakes that cost founders media opportunities',
    excerpt: 'We\'ve seen these happen dozens of times. Here are the most common PR mistakes startups make—and how to avoid them.',
    date: 'May 1, 2025',
    category: 'Startup PR',
    readTime: 7,
  },
  {
    slug: 'seo-vs-aeo-vs-pr',
    title: 'SEO vs AEO vs PR content: what each does and when to use them',
    excerpt: 'Confused about the difference? Here\'s a clear breakdown of each strategy, their strengths, and how to combine them.',
    date: 'April 28, 2025',
    category: 'Content Strategy',
    readTime: 6,
  },
];

export default function BlogPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#0A0A0A] pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-6">
            PR Insights & <span className="text-gradient">Media Strategy</span>
          </h1>
          <p className="text-white/40 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Learn how modern founders build authority through media placement, AI-powered content, and strategic thinking. Updated 3x per week.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-[#0A0A0A] px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Featured Post (First) */}
          {blogPosts.length > 0 && (
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <div className="bg-[#111111] border border-[#C9A84C]/10 rounded-2xl overflow-hidden hover:border-[#C9A84C]/30 transition-colors mb-16 cursor-pointer group">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#C9A84C]/15 text-[#C9A84C] rounded-full text-xs font-bold">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-white/40 text-xs">{blogPosts[0].date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#C9A84C] transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-white/60 text-lg mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-6 text-white/50 text-sm">
                    <span>{blogPosts[0].readTime} min read</span>
                    <span className="text-[#C9A84C] font-semibold">Read article →</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-[#111111] border border-[#C9A84C]/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-colors cursor-pointer group h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-[#C9A84C]/15 text-[#C9A84C] rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                    <span className="text-white/40 text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-white/50 text-xs pt-4 border-t border-[#C9A84C]/5">
                    <span>{post.readTime} min read</span>
                    <span className="text-[#C9A84C] font-semibold">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-16 px-4 border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to apply these insights to your brand?</h2>
          <button className="shine bg-[#C9A84C] hover:bg-[#E8C878] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_20px_rgba(201,168,76,0.4)]">
            Start Building Authority
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
