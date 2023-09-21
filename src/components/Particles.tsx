import { useCallback } from 'react'
import Particles from 'react-particles'
import type { Container, Engine } from "tsparticles-engine"
import { loadFirePreset } from "tsparticles-preset-fire"

export function ParticleBackground(){
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFirePreset(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    
    return(
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  preset: "fire",
                  fpsLimit: 120,
                  particles: {
                    color: {
                        value: "#eb0e0e",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
                }}
            />
        </>
    );
}

export default ParticleBackground;