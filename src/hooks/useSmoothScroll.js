import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * High-performance, framerate-independent momentum smooth scroll hook.
 *
 * - Delta-time compensated exponential easing: uniform, silky glide across 60Hz, 120Hz (ProMotion), and variable refresh displays.
 * - Natural inertia deceleration: smoothly glides into an imperceptible sub-pixel stop with no abrupt cutoffs.
 * - Intelligent input detection: native hardware acceleration & OS momentum for trackpads, luxurious smooth glide for mouse wheels.
 * - Instant frame dispatch: zero input latency on initial scroll gesture.
 * - Handles anchor navigation (#problems, #main) smoothly with sticky header offset.
 * - Automatically respects prefers-reduced-motion, horizontal containers, and modal locks.
 */
export function useSmoothScroll() {
  const { pathname } = useLocation();
  const rafId = useRef(null);
  const targetY = useRef(0);
  const currentY = useRef(0);
  const lastTime = useRef(0);
  const isRunning = useRef(false);

  // Sync scroll position immediately on route transition
  useEffect(() => {
    targetY.current = 0;
    currentY.current = 0;
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    isRunning.current = false;
    lastTime.current = 0;
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return undefined;

    targetY.current = window.scrollY;
    currentY.current = window.scrollY;

    const getMaxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const tick = (now) => {
      if (!lastTime.current) lastTime.current = now;
      // Clamp dt to 50ms to prevent huge jumps if the browser tab is switched or throttled
      const dt = Math.min((now - lastTime.current) / 1000, 0.05);
      lastTime.current = now;

      const maxScroll = getMaxScroll();
      targetY.current = Math.max(0, Math.min(targetY.current, maxScroll));
      const diff = targetY.current - currentY.current;

      // Natural deceleration glide:
      // Sub-pixel threshold (< 0.15px) ensures an imperceptible, organic stop
      // with no sudden freeze or abrupt cutoff.
      if (Math.abs(diff) < 0.15) {
        currentY.current = targetY.current;
        window.scrollTo({ top: targetY.current, left: 0, behavior: "instant" });
        isRunning.current = false;
        rafId.current = null;
        lastTime.current = 0;
        return;
      }

      // Framerate-independent exponential smoothing
      // decay = 8.0 provides immediate responsiveness with a buttery, natural momentum glide
      const decay = 8.0;
      const factor = 1 - Math.exp(-decay * dt);

      currentY.current += diff * factor;
      window.scrollTo({ top: currentY.current, left: 0, behavior: "instant" });
      rafId.current = requestAnimationFrame(tick);
    };

    const isInsideScrollable = (element) => {
      let current = element;
      while (current && current !== document.body && current !== document.documentElement) {
        const style = window.getComputedStyle(current);
        const overflowY = style.overflowY;
        const overflowX = style.overflowX;
        if (
          ((overflowY === "auto" || overflowY === "scroll") &&
            current.scrollHeight > current.clientHeight) ||
          ((overflowX === "auto" || overflowX === "scroll") &&
            current.scrollWidth > current.clientWidth)
        ) {
          return true;
        }
        current = current.parentElement;
      }
      return false;
    };

    const onWheel = (event) => {
      // Allow browser zoom (Ctrl/Cmd + Wheel)
      if (event.ctrlKey || event.metaKey) return;

      // Allow native scrolling inside nested scrollable elements (e.g. horizontal carousel)
      if (isInsideScrollable(event.target)) return;

      // If document body scroll is locked (e.g. mobile modal dialog)
      if (document.body.style.overflow === "hidden") return;

      // Detect trackpad gestures (small fractional deltas or horizontal gestures).
      // Hardware trackpads already provide native 120Hz/60Hz OS inertia.
      // Letting trackpads scroll natively avoids input latency.
      const isTrackpad =
        event.deltaMode === 0 &&
        (Math.abs(event.deltaY) < 36 || event.deltaY % 1 !== 0 || Math.abs(event.deltaX) > 0);

      if (isTrackpad) {
        // Keep smooth scroll coordinates in sync with native trackpad scroll
        if (isRunning.current && rafId.current) {
          cancelAnimationFrame(rafId.current);
          rafId.current = null;
          isRunning.current = false;
          lastTime.current = 0;
        }
        targetY.current = window.scrollY;
        currentY.current = window.scrollY;
        return;
      }

      // For mouse wheel: intercept and provide silky, momentum-driven gliding
      event.preventDefault();

      const maxScroll = getMaxScroll();
      let delta = event.deltaY;

      // Normalize delta across browsers
      if (event.deltaMode === 1) {
        // Firefox lines
        delta *= 32;
      } else if (event.deltaMode === 2) {
        // Page mode
        delta *= window.innerHeight;
      } else {
        // Standard mouse wheel tick: comfortable travel multiplier
        delta *= 1.15;
      }

      // Add to target with natural accumulation (no restrictive clamping that causes lag)
      targetY.current = Math.max(0, Math.min(targetY.current + delta, maxScroll));

      if (!isRunning.current) {
        isRunning.current = true;
        currentY.current = window.scrollY;
        lastTime.current = performance.now();
        rafId.current = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      // Sync target when scroll is driven by scrollbar drag, trackpad, anchor click, or keyboard
      if (!isRunning.current) {
        targetY.current = window.scrollY;
        currentY.current = window.scrollY;
      }
    };

    // Smooth scroll for in-page hash links (#problems, #main, etc.)
    const onAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const targetElement = document.querySelector(hash);
      if (!targetElement) return;

      event.preventDefault();
      const rect = targetElement.getBoundingClientRect();
      const maxScroll = getMaxScroll();
      const offsetTop = window.scrollY + rect.top - 84; // Account for sticky header
      targetY.current = Math.max(0, Math.min(offsetTop, maxScroll));

      if (!isRunning.current) {
        isRunning.current = true;
        currentY.current = window.scrollY;
        lastTime.current = performance.now();
        rafId.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onAnchorClick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onAnchorClick);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, []);
}
