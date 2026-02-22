import TiltedCard from "~/routes/TiltedCard";

// import TiltedCard from "./routes/TiltedCard";
type ProjectCardProps = {
    src:string;
    alt:string;
    caption:string;
};

export default function ProjectCard({ src, alt, caption }: ProjectCardProps) {
    return (
        <TiltedCard
            imageSrc={src}
            altText={alt}
            captionText={caption}
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={
                <p className="tilted-card-demo-text bg-gray-600 text-white rounded-lg justify-center items-center">
                    {caption}
                </p>
            }
        />



    )
}