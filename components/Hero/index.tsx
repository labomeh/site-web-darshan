'use client';

import { useEffect, useRef, useState } from 'react';
import Logo from '@/components/ui/Logo';
import { SERVICES } from '@/config/site';
import type { HeroProps } from '@/types';
import ServiceItem from './ServiceItem';

export default function Hero({
  title = 'DARSHAN',
  tagline = "Centre de bien-être et d'hydrothérapie",
  videoSrc = '/videos/hero-background.webm',
  showServices = true,
  showLocation = true,
}: HeroProps) {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    if (!video1 || !video2) return;

    const fadeStartTime = 1.5; // Start fade 1.5 seconds before end

    const loadVideo = (videoElement: HTMLVideoElement) => {
      const source = videoElement.querySelector('source');

      if (source && !source.getAttribute('src')) {
        const src = source.getAttribute('data-src');

        if (src) {
          source.setAttribute('src', src);
          videoElement.load();
        }
      }
    };

    const handleVideo1TimeUpdate = () => {
      const timeRemaining = video1.duration - video1.currentTime;

      if (timeRemaining <= fadeStartTime && timeRemaining > 0 && activeVideo === 1) {
        // Start video2 and begin fade transition
        video2.currentTime = 0;
        video2.play().catch(() => {});
        setActiveVideo(2);
      }
    };

    const handleVideo2TimeUpdate = () => {
      const timeRemaining = video2.duration - video2.currentTime;

      if (timeRemaining <= fadeStartTime && timeRemaining > 0 && activeVideo === 2) {
        // Start video1 and begin fade transition
        video1.currentTime = 0;
        video1.play().catch(() => {});
        setActiveVideo(1);
      }
    };

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadVideo(video1);
            loadVideo(video2);

            video1.addEventListener(
              'canplay',
              () => {
                video1.play().catch(() => {});
              },
              { once: true }
            );

            videoObserver.unobserve(video1);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    videoObserver.observe(video1);

    video1.addEventListener('timeupdate', handleVideo1TimeUpdate);
    video2.addEventListener('timeupdate', handleVideo2TimeUpdate);

    return () => {
      if (video1) {
        videoObserver.unobserve(video1);
        video1.removeEventListener('timeupdate', handleVideo1TimeUpdate);
      }
      if (video2) {
        video2.removeEventListener('timeupdate', handleVideo2TimeUpdate);
      }
    };
  }, [activeVideo]);

  useEffect(() => {
    const showIndicatorTimer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 2500);

    // Only enable snap behavior if page was loaded at the top
    const wasAtTop = window.scrollY === 0;
    let hasSnapped = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }

      // Only execute snap logic if:
      // 1. Page was initially at top (wasAtTop)
      // 2. We haven't snapped yet
      if (!wasAtTop || hasSnapped) return;

      const heroHeight = window.innerHeight;
      const scrollPos = window.scrollY;

      // Trigger snap immediately on any scroll down within the hero section
      if (scrollPos > 0 && scrollPos < heroHeight * 0.8) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          const contentElement = document.getElementById('content');

          if (contentElement && !hasSnapped) {
            hasSnapped = true;
            // Get header height and account for it
            const headerHeight = 86; // Desktop header height from Hero pt-[86px]
            const targetPos = contentElement.offsetTop + contentElement.offsetHeight - headerHeight;

            window.scrollTo({
              top: targetPos,
              behavior: 'smooth',
            });
          }
        }, 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(showIndicatorTimer);
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative flex min-h-dvh w-full max-w-full items-center justify-center overflow-hidden bg-secondary pt-[86px] pb-16 text-center md:pt-[94px] md:pb-20">
      <video
        ref={video1Ref}
        className={`absolute top-0 left-0 h-full w-full object-cover ${
          activeVideo === 1
            ? 'z-0 opacity-85 transition-none'
            : 'z-[1] opacity-0 transition-opacity duration-[1500ms]'
        }`}
        muted
        playsInline
        preload="none"
      >
        <source data-src={videoSrc} type="video/webm" />
      </video>

      <video
        ref={video2Ref}
        className={`absolute top-0 left-0 h-full w-full object-cover ${
          activeVideo === 2
            ? 'z-0 opacity-85 transition-none'
            : 'z-[1] opacity-0 transition-opacity duration-[1500ms]'
        }`}
        muted
        playsInline
        preload="none"
      >
        <source data-src={videoSrc} type="video/webm" />
      </video>

      <div className="hero-overlay-gradient pointer-events-none absolute top-0 left-0 z-[1] h-full w-full" />

      <div className="hero-vignette-gradient pointer-events-none absolute top-0 left-0 z-[1] h-full w-full" />

      <div className="hero-text-shadow relative z-[2] mx-4 flex max-w-[700px] flex-col items-center text-white md:mx-8">
        <div className="mb-3 inline-flex flex-col items-center md:mb-6">
          <Logo
            variant="primary"
            size={200}
            alt="Darshan"
            className="animate-fade-in-down mb-2 h-auto w-auto md:mb-4 md:h-[200px]"
          />
          <h1 className="animate-fade-in-down-delay font-logo text-4xl leading-none font-normal tracking-[2px] whitespace-nowrap text-primary md:text-[64px] md:tracking-[8px]">
            {title}
          </h1>
        </div>
        <p className="animate-fade-in-up-delay-1 mb-3 font-headings text-base text-off-white md:mb-6 md:text-2xl">
          {tagline}
        </p>

        {showServices && (
          <div className="animate-fade-in-up-delay-2 mb-3 grid grid-cols-2 place-items-center gap-x-4 gap-y-2 md:mb-6 md:gap-x-8 md:gap-y-4 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceItem
                key={service.id}
                icon={service.icon}
                label={service.name}
                slug={service.slug}
              />
            ))}
          </div>
        )}

        {showLocation && (
          <div className="animate-fade-in-up-delay-3 flex flex-col items-center justify-center gap-1 text-sm text-off-white md:flex-row md:gap-2 md:text-lg">
            <i className="fas fa-map-marker-alt text-xl text-primary" aria-hidden="true" />
            <span className="text-center">
              21 Route de Chez Monnet,
              <br className="md:hidden" /> Saint-Gingolph (74)
            </span>
          </div>
        )}
      </div>

      <a
        href="#content"
        className={`absolute bottom-6 left-1/2 z-[2] -translate-x-1/2 animate-bounce cursor-pointer transition-opacity duration-500 hover:opacity-80 md:bottom-8 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Défiler vers le bas"
        aria-hidden={!showScrollIndicator}
      >
        <i className="fas fa-chevron-down text-3xl text-primary [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.3))] md:text-4xl" />
      </a>
    </section>
  );
}
