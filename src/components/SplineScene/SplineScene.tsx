import { memo, useCallback, useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { gsap } from "gsap";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setAllTimeline, setSplineTimeline } from "../utils/GsapScroll";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/nRVe2yzaJK6xS5xC/scene.splinecode";

const SplineScene = memo(() => {
  const { setLoading } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);
  const progressRef = useRef<ReturnType<typeof setProgress> | null>(null);
  const [canMountSpline, setCanMountSpline] = useState(false);
  const [isSceneReady, setIsSceneReady] = useState(false);

  useEffect(() => {
    progressRef.current = setProgress(setLoading);

    const isMobile = window.innerWidth <= 1024;
    const delay = isMobile ? 300 : 0;

    const mountSpline = () => setCanMountSpline(true);

    let idleId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(mountSpline, { timeout: 2000 });
      } else {
        mountSpline();
      }
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [setLoading]);

  const handleLoad = useCallback((_application: Application) => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    setSplineTimeline();
    setAllTimeline();

    const container = containerRef.current;
    if (container) {
      container.classList.add("character-loaded");
      gsap.to(container.querySelector(".character-rim"), {
        y: "55%",
        opacity: 1,
        delay: 0.2,
        duration: 2,
      });
    }

    progressRef.current?.loaded().then(() => {
      setIsSceneReady(true);
    });
  }, []);

  return (
    <div className="character-container">
      <div
        className="character-model spline-scene"
        ref={containerRef}
        aria-label="3D portfolio scene"
      >
        <div className="character-rim" />
        <div
          className={`spline-placeholder${isSceneReady ? " spline-placeholder--hidden" : ""}`}
          aria-hidden="true"
        />
        {canMountSpline && (
          <Spline
            scene={SPLINE_SCENE_URL}
            onLoad={handleLoad}
            className="spline-canvas"
          />
        )}
      </div>
    </div>
  );
});

SplineScene.displayName = "SplineScene";

export default SplineScene;
