import { Button } from "react-bootstrap"
const Contactar = () => {
    const handleClick = () => {
        const recipient = 'brandon.dev.n@gmail.com';
        const subject = '';
        const body = '';

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    };
    return (
        <>

            <Button variant="success" onClick={handleClick} className="boton-responsivo">
                Contactar
            </Button>

        </>
    )
}

export default Contactar
