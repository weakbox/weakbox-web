export default function SiteFooter() {
  return (
    <div className="font-heading flex flex-col items-center justify-center gap-4 p-4 text-xs text-gray-800 lg:p-8">
      <div className="flex flex-row items-center gap-4">
        <a
          className="transition-colors duration-100 hover:text-gray-400"
          href="https://www.linkedin.com/in/weakbox/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="transition-colors duration-100 hover:text-gray-400"
          href="https://github.com/weakbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="transition-colors duration-100 hover:text-gray-400"
          href="https://soundcloud.com/weakbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soundcloud
        </a>
        <a
          className="transition-colors duration-100 hover:text-gray-400"
          href="mailto:connor@weakbox.com"
        >
          Contact
        </a>
      </div>
      <p>© 2025 Connor McLeod</p>
    </div>
  );
}
