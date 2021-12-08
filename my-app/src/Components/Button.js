import '../assets/style/components/Button.scss';

function Button(props) {
    return (
        <button className={'btn btn-'+props.variant} disabled={props.disabled} onClick={props.clickEvent}>{props.text}</button>
    )
}

export default Button;