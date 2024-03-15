import { useEffect, useState } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";

function Error404() {
    const [counter, setCounter] = useState(5);

    const navigate = useNavigate();

    useEffect(() => {
        const idTime = setTimeout(() => navigate('/'), 5000);

        const idInt = setInterval(() => setCounter((oldCounter) => oldCounter - 1), 1000);

        return () => {
            clearTimeout(idTime);
            clearInterval(idInt);
        };
    }, []);

    return (
        <>
            <section className='error'>
                <ErrorMessage />
                <h2 className='error__title'>Error 404</h2>
                <p className='error__descr'>Go home in {counter}s</p>
                <small className='error__link'>Click <Link className='colored-error' style={{ textDecoration: 'underline', color: 'crimson' }} to='/'>here</Link> to go home</small>
            </section>
        </>
    );
}

export default Error404;