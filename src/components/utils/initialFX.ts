import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0c0a14",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText3b = new SplitText(".landing-h2-info-2", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);
  var landingText6 = new SplitText(".landing-h2-3", TextProps);

  LoopTextMulti([landingText2, landingText3, landingText3b]);
  LoopTextMulti([landingText4, landingText5, landingText6]);
}

function LoopTextMulti(texts: SplitText[]) {
  const delay = 4;
  const duration = 1.2;
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  texts.slice(1).forEach((text) => {
    gsap.set(text.chars, { opacity: 0, y: 80 });
  });

  texts.forEach((current, i) => {
    const next = texts[(i + 1) % texts.length];
    const startTime = i === 0 ? delay : `+=${delay}`;

    tl.to(
      current.chars,
      {
        y: -80,
        duration,
        ease: "power3.inOut",
        stagger: 0.1,
      },
      startTime
    ).fromTo(
      next.chars,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration,
        ease: "power3.inOut",
        stagger: 0.1,
      },
      "<"
    );
  });
}
