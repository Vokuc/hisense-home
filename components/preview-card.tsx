import Image from 'next/image';

interface PreviewCardProps {
    url: string;
    alt: string;
}

export default function PreviewCard({ url, alt }: PreviewCardProps) {
    return (
        <div>
            <Image
                src={url}
                alt={alt}
                width={200}
                height={200}
            />
        </div>
    )
}