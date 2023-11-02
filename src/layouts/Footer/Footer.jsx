export default function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            Created by <a href="/">Luis Sánchez</a> | {currentYear} Copyright © All Rights Reserved
        </footer>
    )
}