


function ProyectsComponents({name, description, status, date}) {
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
        </div>

        </article>

    )

}

export default ProyectsComponents

