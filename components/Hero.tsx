'use client';

import { useEffect, useRef } from 'react';
import { HeroProps } from '@/types';
import styles from './Hero.module.css';

export default function Hero({
  title = 'DARSHAN',
  tagline = 'Centre de bien-être et d\'hydrothérapie',
  videoSrc = '/videos/hero-background.webm',
  showServices = true,
  showLocation = true,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Use IntersectionObserver to lazy load video
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const source = videoElement.querySelector('source');
            if (source) {
              const src = source.getAttribute('data-src');
              if (src) {
                // Set the actual src to trigger loading
                source.setAttribute('src', src);
                videoElement.load();

                // Add loaded class for fade-in when video can play
                videoElement.addEventListener(
                  'canplay',
                  () => {
                    videoElement.classList.add(styles.loaded);
                    videoElement.play().catch((err) => {
                      console.log('Autoplay prevented:', err);
                    });
                  },
                  { once: true }
                );
              }
            }

            // Stop observing after loading
            videoObserver.unobserve(videoElement);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading slightly before entering viewport
      }
    );

    videoObserver.observe(videoElement);

    // Cleanup
    return () => {
      if (videoElement) {
        videoObserver.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <section className={styles.hero}>
      {/* Video Background - Lazy Loaded */}
      <video
        ref={videoRef}
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        <source data-src={videoSrc} type="video/webm" />
      </video>

      {/* Overlay */}
      <div className={styles.heroOverlay} />

      {/* Content */}
      <div className={styles.heroWelcome}>
        <img
          src="/images/logo.svg"
          alt="Darshan"
          className={styles.heroLogo}
        />
        <h1 className={styles.heroTitle}>
          {title}
        </h1>
        <p className={styles.heroTagline}>
          {tagline}
        </p>

        {showServices && (
          <div className={styles.heroServices}>
            <div className={styles.heroServiceItem}>
              <i className="fas fa-water" />
              <span>Hydrothérapie du côlon</span>
            </div>
            <div className={styles.heroServiceItem}>
              <i className="fas fa-hands" />
              <span>Massages ayurvédiques</span>
            </div>
            <div className={styles.heroServiceItem}>
              <i className="fas fa-om" />
              <span>Méditation tantrique</span>
            </div>
          </div>
        )}

        {showLocation && (
          <div className={styles.heroLocation}>
            <i className="fas fa-map-marker-alt" />
            <span>21 Route de Chez Monnet, Saint-Gingolph (74)</span>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <i className="fas fa-chevron-down" />
      </div>
    </section>
  );
}
