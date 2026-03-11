const CHANNEL_ID = "UCPj0sGrj03Dymk25ABXXpIQ";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

async function getLatestVideo() {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 300 } });
    const xml = await res.text();

    const videoIdMatch = xml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = xml.match(/<entry>[\s\S]*?<title>([^<]+)<\/title>/);

    return {
      videoId: videoIdMatch?.[1] ?? null,
      title: titleMatch?.[1] ?? "Latest Sermon",
    };
  } catch {
    return { videoId: null, title: "Latest Sermon" };
  }
}

export default async function LatestSermon() {
  const { videoId, title } = await getLatestVideo();

  return (
    <section className="bg-green-section py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Latest Sermon
          </h2>
          <div className="w-20 h-1 bg-white/60 mx-auto mb-4" />
          {videoId && (
            <p className="font-semibold text-lg text-white/90">{title}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-2xl">
            {videoId ? (
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full"
              />
            ) : (
              <div className="aspect-video w-full bg-primary-dark flex items-center justify-center rounded-xl">
                <p className="text-gray-400">Sermon video coming soon</p>
              </div>
            )}
          </div>
          <div className="lg:col-span-2">
            <p className="text-white/90 leading-relaxed mb-4">
              Watch Us Live on Sundays at 11 AM
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              Join others as we listen to the lively messages of Nick Manzie, a
              down-to-earth pastor who communicates God&apos;s truth in
              understandable and practical terms, as you apply the Bible to your
              own life.
            </p>
            <a
              href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded font-bold hover:bg-light transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
              </svg>
              View Past Sermons
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
