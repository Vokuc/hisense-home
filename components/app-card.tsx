import Image from "next/image";

interface AppCardProps { 
    url: string;
    alt: string;
}

 export default function AppCard({url, alt}: AppCardProps) {
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