
import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

export default function WeatherLottie({ kind, name, className = "" }) {
    const [loadedAnimation, setLoadedAnimation] = useState(null);

    const filePath = `/animations/${kind}/${name}.json`;

    useEffect(() => {
        let isActive = true;

        const loadAnimation = async () => {
            try {
                const response = await fetch(filePath);

                if (!response.ok) {
                    throw new Error(`Failed to load: ${filePath}`);
                }

                const data = await response.json();

                if (isActive) {
                    setLoadedAnimation({
                        path: filePath,
                        data: data
                    });
                }

            } catch (error) {
                console.error("Weather Lottie Error:", error);
            }
        };

        loadAnimation();

        return () => {
            isActive = false;
        };

    }, [filePath]);

    const animationData =
        loadedAnimation?.path === filePath
            ? loadedAnimation.data
            : null;

    if (!animationData) return null;

    return (
        <Lottie
            key={filePath}
            src={animationData}
            className={className}
            autoplay
            loop
        />
    );
}
