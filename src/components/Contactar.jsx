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

            <Button variant="success" onClick={handleClick}>
                Contactar
            </Button>

        </>
    )
}

export default Contactar
