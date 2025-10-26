'use client';

import { useEffect, useRef } from 'react';
import type { HeroProps } from '@/types';
import ServiceItem from './ServiceItem';

export default function Hero({
  title = 'DARSHAN',
  tagline = "Centre de bien-être et d'hydrothérapie",
  videoSrc = '/videos/hero-background.webm',
  showServices = true,
  showLocation = true,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const source = videoElement.querySelector('source');

            if (source) {
              const src = source.getAttribute('data-src');

              if (src) {
                source.setAttribute('src', src);
                videoElement.load();

                videoElement.addEventListener(
                  'canplay',
                  () => {
                    videoElement.classList.add('opacity-85');
                    videoElement.play().catch((err) => {
                      console.log('Autoplay prevented:', err);
                    });
                  },
                  { once: true }
                );
              }
            }

            videoObserver.unobserve(videoElement);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    videoObserver.observe(videoElement);

    return () => {
      if (videoElement) {
        videoObserver.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-70px)] w-full max-w-full items-center justify-center overflow-hidden bg-secondary text-center md:min-h-[calc(100vh-77px)]">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 z-0 h-full w-full object-cover opacity-0 transition-opacity duration-[1500ms]"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        <source data-src={videoSrc} type="video/webm" />
      </video>

      <div className="hero-overlay-gradient pointer-events-none absolute top-0 left-0 z-[1] h-full w-full" />

      <div className="hero-vignette-gradient pointer-events-none absolute top-0 left-0 z-[1] h-full w-full" />

      <div className="hero-text-shadow relative z-[2] mx-4 max-w-[700px] text-white md:mx-8">
        <img
          src="/images/logo.svg"
          alt="Darshan"
          className="animate-fade-in-down mx-auto mb-1 h-auto w-20 [filter:brightness(0)_saturate(100%)_invert(65%)_sepia(24%)_saturate(671%)_hue-rotate(7deg)_brightness(94%)_contrast(87%)] md:w-[200px]"
        />
        <h1 className="animate-fade-in-down-delay mb-2 font-logo text-[32px] leading-none font-normal tracking-[3px] text-primary md:mb-4 md:text-[64px] md:tracking-[8px]">
          {title}
        </h1>
        <p className="animate-fade-in-up-delay-1 mb-2 font-headings text-sm text-off-white md:mb-4 md:text-xl">
          {tagline}
        </p>

        {showServices && (
          <div className="animate-fade-in-up-delay-2 mb-2 flex flex-col items-center justify-center gap-2 md:mb-4 md:flex-row md:flex-wrap md:gap-8">
            <ServiceItem icon="fas fa-water" label="Hydrothérapie du côlon" />
            <ServiceItem icon="fas fa-hands" label="Massages ayurvédiques" />
            <ServiceItem icon="fas fa-om" label="Méditation tantrique" />
          </div>
        )}

        {showLocation && (
          <div className="animate-fade-in-up-delay-3 flex items-center justify-center gap-1 text-[13px] text-off-white md:gap-2 md:text-base">
            <i className="fas fa-map-marker-alt text-[1.2rem] text-primary" />
            <span>21 Route de Chez Monnet, Saint-Gingolph (74)</span>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 left-1/2 z-[2] -translate-x-1/2 cursor-pointer opacity-0 transition-opacity">
        <i className="fas fa-chevron-down text-[2rem] text-primary [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.3))] transition-all hover:translate-y-1 hover:text-primary-light" />
      </div>
    </section>
  );
}
