import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import AnimatedTitle from "./AnimatedTitle";

const About = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id="about" className="min-h-screen w-screen flex flex-col items-center justify-center">
            <div className="relative z-10 flex flex-col items-center gap-5 px-5 text-center">
                <h2 className="font-general text-base md:text-lg text-gray-600">
                    Welcome To Zentry
                </h2>
                <AnimatedTitle  title="Disc<b>o</b>ver the world's <br />l<b>a</b>rgest shard"  containerClass="mt-5 !text-black text-center"/>
                <div className="about-subtext z-0">
                    <p>The Game of Games begins - your life, now an epic MMORPG.</p>
                    <p>Zentry unites every player from countless games and platforms.</p>
                </div>
            </div>
            <div
                className="h-dvh w-screen flex items-center justify-center relative"
                id="clip"
            >
                <div className="mask-clip-path   about-image relative h-full w-full flex items-center justify-center z-20">
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="absolute left-0 top-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
