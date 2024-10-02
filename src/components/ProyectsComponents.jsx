import { Link } from "react-router-dom"



function ProyectsComponents({_id, name, description, status, date}) {
console.log(this)
    return (
        <article>
        <div className="ProyectsComponents">
            <h3>{name}</h3>
            <div>
            <p>{description}</p>
            <p>{status}</p>
            <p>{date}</p>
            </div>
            
            <Link to={`/proyects/${_id}`}>
             Ver más
            </Link>

        </div>

        </article>

    )

}

export default ProyectsComponents

