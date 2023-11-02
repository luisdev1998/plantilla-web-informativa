import './LogoCarousel.css';

export default function LogoCarousel(props){
    const {children} = props;

    return(
        <div className="logo-carousel">
            <ul className="logo-wapper">
                {children}
            </ul>
        </div>
    )
}