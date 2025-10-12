import { HeroProps } from '@/types';

export default function Hero({
  title = 'DARSHAN',
  tagline = 'Centre de bien-être et d\'hydrothérapie',
  videoSrc = '/videos/hero-background.webm',
  showServices = true,
  showLocation = true,
}: HeroProps) {
  return (
    <section className="hero">
      {/* Video Background */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        <source src={videoSrc} type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-welcome">
        <img
          src="/images/logo.svg"
          alt="Darshan"
          className="hero-logo"
        />
        <h1 className="hero-title">
          {title}
        </h1>
        <p className="hero-tagline">
          {tagline}
        </p>

        {showServices && (
          <div className="hero-services">
            <div className="hero-service-item">
              <i className="fas fa-water" />
              <span>Hydrothérapie du côlon</span>
            </div>
            <div className="hero-service-item">
              <i className="fas fa-hands" />
              <span>Massages ayurvédiques</span>
            </div>
            <div className="hero-service-item">
              <i className="fas fa-om" />
              <span>Méditation tantrique</span>
            </div>
          </div>
        )}

        {showLocation && (
          <div className="hero-location">
            <i className="fas fa-map-marker-alt" />
            <span>21 Route de Chez Monnet, Saint-Gingolph (74)</span>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down" />
      </div>
    </section>
  );
}
