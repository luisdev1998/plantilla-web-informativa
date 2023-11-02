import './Card.css'

export default function Card(props){
    const {children, className} = props;
    
    return(
        <div className={className}>
            {children}
        </div>
    )
}