export default function QuickActions() {
  return (
    <div className="quick">
      <div className="wrap">
        <div className="grid">
          <a href="#contact">
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4.5" width="18" height="16" rx="2" />
                <path d="M3 9h18M8 2.5v4M16 2.5v4" />
              </svg>
            </span>
            <span>
              <b>Book online</b>
              <span className="sub">Pick a time that suits you</span>
            </span>
          </a>
          <a href="tel:+917200849216">
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 18v4a16 16 0 0 1-15-18Z" />
              </svg>
            </span>
            <span>
              <b>Call us</b>
              <span className="sub">7200849216</span>
            </span>
          </a>
          <a href="https://wa.me/917200849216" target="_blank" rel="noopener noreferrer">
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.8-2.8-1.2-4.6-4.1-4.7-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.2.2-.3.4-.1.7.5.8 1 1.3 1.7 1.8.3.2.5.2.7 0l.6-.8c.2-.2.3-.2.6-.1l1.9.9c.2.1.4.2.4.4.1.2.1.8-.1 1.1Z" />
              </svg>
            </span>
            <span>
              <b>WhatsApp</b>
              <span className="sub">Chat with us now</span>
            </span>
          </a>
          <a href="#contact">
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <span>
              <b>Find us</b>
              <span className="sub">Get directions</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
