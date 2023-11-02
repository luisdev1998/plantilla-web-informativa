import './Carousel.css'

export default function Carousel(props){
    const {children} = props;
    
    return(
        <div className="carousel">
            {children}
        </div>
    )
}