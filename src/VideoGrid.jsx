import "./VideoGrid.css";
export default function VideoGrid({ videoData }) {
  return (
    <div className="video-grid">
      {videoData.map((e, index) => (
        <div className="video-card">
          <img src={e.items.snippet.thumbnails.high.url} alt="" />
          <p className="video-title">{e.items.snippet.title}</p>{" "}
          <p className="video-title">{e.items.snippet.channelTitle}</p>
          <div className="video-statistics">
            <span>👁️ {e.items.statistics.viewCount}</span>
            <span>👍 {e.items.statistics.likeCount}</span>
            <span>💬 {e.items.statistics.commentCount}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
