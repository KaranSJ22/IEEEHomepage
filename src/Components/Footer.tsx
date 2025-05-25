function Footer() {
  return (
    <>
      <footer>
        <style>{`
          :root {
            --dark-background: #05060f;
            --body-normal: rgba(200,212,234,.78);
            --body-loud: #c7d3ea;
            --body-muted: #c7d3eaa3;
          }

          footer {
            background: var(--dark-background);
            color: var(--body-normal);
            padding: 1rem 1.5rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 14px;
            line-height: 1.4;
            bottom: 0;
            left: 0;
            width: 100%;
            box-shadow: 0 -2px 8px rgba(0,0,0,0.5);
            z-index: 1000;
            box-sizing: border-box;
          }

          footer h2, footer h3 {
            color: var(--body-loud);
            margin-bottom: 0.5rem;
          }

          footer a, footer span {
            color: var(--body-normal);
            text-decoration: none;
            transition: color 0.2s ease;
          }

          footer a:hover {
            color: var(--body-loud);
          }

          footer img {
            display: inline-block;
            max-width: 100%;
          }

          .footer-logo {
            margin-top: 0.5rem;
            width: 100px;
          }

          .footer-container {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 1.5rem;
          }

          .footer-section {
            min-width: 140px;
            flex: 1 1 150px;
          }

          .social-icons {
            display: flex;
            gap: 1rem;
            margin-bottom: 0.75rem;
          }

          .social-icons a img {
            width: 24px;
            height: 24px;
            filter: brightness(0) invert(1);
          }

          .email-contact {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 13px;
            color: var(--body-muted);
          }

          .email-contact img {
            width: 18px;
            height: 18px;
          }

          hr {
            border: none;
            border-top: 1px solid var(--body-muted);
            margin: 1.5rem 0;
            opacity: 0.4;
          }

          .footer-bottom {
            text-align: center;
            font-size: 12px;
            color: var(--body-muted);
          }

          @media (max-width: 600px) {
            .footer-container {
              flex-direction: column;
              gap: 1rem;
            }
            .footer-section {
              flex: none;
            }
          }
        `}</style>

        <div className="footer-container">
          <div className="footer-section">
            <h2>IEEE RIT</h2>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#">Faculty</a><br />
            <a href="#">Gallery</a><br />
            <a href="#">Contact Us</a>
          </div>

          <div className="footer-section">
            <h3>Follow Us On</h3>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" />
              </a>
              <a href="#" aria-label="X">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="X" />
              </a>
            </div>
            <div className="email-contact">
              <span>support@IEEE.com</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>© Copyright 2025 IEEE RIT - All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;
