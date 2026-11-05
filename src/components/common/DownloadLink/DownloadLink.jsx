import './DownloadLink.css';

/** Tile linking to a PDF in /public/downloads. */
export default function DownloadLink({ file, label }) {
  return (
    <div className="col-lg-4 col-md-6">
      <a
        href={encodeURI(`/downloads/${file}`)}
        target="_blank"
        rel="noreferrer"
        className="download-file"
      >
        {label}
      </a>
    </div>
  );
}
