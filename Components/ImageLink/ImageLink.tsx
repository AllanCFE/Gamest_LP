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
    key?: string;
}

interface Local extends Props {
    href?: never;
    local: `/${string}`;
}

interface Out extends Props {
    local?: never;
    href: string;
}
export default ({src, href, local, width, height=width, className, key}:Local | Out) => {

    const nClassname = (className != undefined) ? className : "";
    const nKey = (key != undefined) ? key : "";

    if(href != undefined){
        return(
            <div key={nKey} className={[styles.outLink, nClassname].join(" ")}>
                <a href={href} target="_blank">
                    <Image key={nKey} className={nClassname} src={src} width={width} height={height}/>
                </a>
            </div>
        )
    } else {
        return(
        <div key={nKey} className={[styles.localLink].join(" ")}>
            <Link href={local}>
                <a><Image key={nKey} className={nClassname} src={src} width={width} height={height}/></a>
            </Link>
        </div>
    )

    }
}