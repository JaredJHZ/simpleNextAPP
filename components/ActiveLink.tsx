import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties } from "react";


const style : CSSProperties = {
    color:"#0070f3",
    textDecoration:"underline"
}

interface Props {
    text:string;
    href:string;
}


export default function ActiveLink({href, text}: Props){

    const {pathname} = useRouter();

    return (
        <Link href={href}>
            <a style={pathname === href ? style : {}}>{text}</a>
        </Link>

    );
}