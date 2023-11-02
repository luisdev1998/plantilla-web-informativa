import './Form.css';

export default function Form(props){
    const {children} = props;

    return(
        <form className='form flex column-direction gap-1em'>
            {children}
        </form>
    )
}