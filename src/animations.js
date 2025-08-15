import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../src/libs/SplitText"; // عدّل المسار حسب مكان الملف

gsap.registerPlugin(SplitText);

export default function MyComponent() {
  useEffect(() => {
    gsap.set(".ltr-trans", { opacity: 1 });
    let split = SplitText.create(".ltr-trans", { type: "chars" });

    gsap.from(split.chars, {
      y: 20,
      autoAlpha: 0,
      stagger: 0.07,
    });
  }, []);

  return <div className="ltr-trans"></div>;
}
///////////////////////////////////////////////////////////