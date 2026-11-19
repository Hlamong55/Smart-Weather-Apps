
import { Lottie } from "lottie-react";

export default function WeatherLottie({ kind, name, className = "" }) {
    return (
        <Lottie
            src={`/animations/${kind}/${name}.json`}
            className={className}
            autoplay
            loop
        />
    );
}
