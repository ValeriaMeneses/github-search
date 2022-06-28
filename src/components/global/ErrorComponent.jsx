export const ErrorComponent = ({ error }) => {

    return (
        <div className="ErrorComponent--container mt-5 pt-5">
            <div className="ErrorComponent--img text-center">
                <img src="src/assets/octocat.png" alt="octocat" />
            </div>
            <div className="ErrorComponent--body">
                <h3 className="text-center">Ooooooops!!!</h3>
                {
                    error == 403 ?
                    <>
                        <p className="mb-1 text-center">
                            Has excedido el numero maximo de consultas en GitHub
                        </p>
                        <p className="text-center">Por favor espera unos minutos y vuelve a intentarlo</p>
                    </>
                    :
                    <p className="mb-1 text-center">
                        Ha ocurrido un problema
                    </p>
                }
            </div>
        </div>
    )
}
