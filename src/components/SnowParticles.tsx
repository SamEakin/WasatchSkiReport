import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useEffect, useState } from "react";


export default function SnowParticles(){
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };


    const options: ISourceOptions = {
        key: "snow",
        name: "Snow",
        particles: {
            number: {
                value: 400,
                density: {
                    enable: true,
                },
            },
            color: {
                value: "#fff",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 1,
            },
            size: {
                value: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "bottom",
                straight: false,
            },
            wobble: {
                enable: true,
                distance: 10,
                speed: 10,
            },
            // zIndex: {
            //     value: {
            //         min: 0,
            //         max: 100,
            //     },
            //     opacityRate: 10,
            //     sizeRate: 10,
            //     velocityRate: 10,
            // },
        },
    };

    if (!init) return <></>;

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    );
};