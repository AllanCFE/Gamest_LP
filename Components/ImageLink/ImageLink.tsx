// Create a Nextjs component that renders an image with a link
// Path: Components/ImageLink/ImageLink.tsx
// Compare this snippet from Components/Footer/Footer.tsx:
import styles from '../../styles/Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    src: string;
    width: number;
    height?: number;
    className?: string;
}

interface Local extends Props {
    href?: never;
    local: `/${string}`;
}

interface Out extends Props {
    local?: never;
    href: string;
}
export default ({src, href, local, width, height=width, className}:Local | Out) => {

    const nClassname = (className != undefined) ? className : "";
    
    if(href != undefined){
        return(
            <div className={[styles.outLink, nClassname].join(" ")}>
                <a href={href} target="_blank">
                    <Image src={src} width={width} height={height}/>
                </a>
            </div>
        )
    } else {
        return(
        <div className={[styles.localLink].join(" ")}>
            <Link href={local}>
                <a><Image className={nClassname} src={src} width={width} height={height}/></a>
            </Link>
        </div>
    )

    }
}