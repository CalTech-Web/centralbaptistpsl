const CHANNEL_ID = "UCPj0sGrj03Dymk25ABXXpIQ";
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

async function getLiveOrLatestSermon(): Promise<{
  videoId: string | null;
  title: string;
  isLive: boolean;
}> {
  // If no API key, fall back to RSS feed
  if (!YOUTUBE_API_KEY) {
    return { ...(await getLatestVideoFromRSS()), isLive: false };
  }

  try {
    // 1. Check for an active live stream
    const liveRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&maxResults=1&key=${YOUTUBE_API_KEY}`,
      { next: { revalidate: 60 } }
    );
    const liveData = await liveRes.json();

    if (liveData.items?.length > 0) {
      const item = liveData.items[0];
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        isLive: true,
      };
    }

    // 2. No live stream — get the most recent completed live stream
    const completedRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&order=date&maxResults=1&key=${YOUTUBE_API_KEY}`,
      { next: { revalidate: 60 } }
    );
    const completedData = await completedRes.json();

    if (completedData.items?.length > 0) {
      const item = completedData.items[0];
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        isLive: false,
      };
    }

    // 3. No completed lives either — fall back to RSS
    return { ...(await getLatestVideoFromRSS()), isLive: false };
  } catch {
    // API failed — fall back to RSS
    return { ...(await getLatestVideoFromRSS()), isLive: false };
  }
}

async function getLatestVideoFromRSS() {
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
  const { videoId, title, isLive } = await getLiveOrLatestSermon();

  return (
    <section className="bg-green-section py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            {isLive ? "Live Now" : "Latest Sermon"}
          </h2>
          <div className="w-20 h-1 bg-white/60 mx-auto mb-4" />
          {isLive && (
            <span className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full" />
              LIVE
            </span>
          )}
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
                src={`https://www.youtube.com/embed/${videoId}${isLive ? "?autoplay=1" : ""}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full"
              />
            ) : (
              <div className="aspect-video w-full bg-primary-light flex items-center justify-center rounded-xl">
                <p className="text-white/70">Sermon video coming soon</p>
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
              href="https://www.youtube.com/@CBCPSL/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded font-bold hover:bg-light transition-colors duration-200 btn-interact"
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
