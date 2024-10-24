import miLogo from "../../../../src/img/viego.png";
import miLogo2 from "../../../../src/img/teemo.png";
import miLogo3 from "../../../../src/img/lee sin.png";
export const Inicio = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card-group">
            <div className="card">
              <img src={miLogo} className="card-img-top" alt="Viego" />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Viego, El Rey Arruinado</b>
                </h5>
                <p className="card-text">
                  <b>
                    {" "}
                    Transformado en un espectro poderoso y desprovisto de vida,
                    y torturado por el anhelo obsesivo de su reina muerta hace
                    siglos, Viego ahora es el Rey Arruinado. Controla a los
                    letales Harrowings a la vez que explora Runaterra en
                    búsqueda de cualquier cosa que pueda, algún día, traer de
                    regreso a su esposa.{" "}
                  </b>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Ultima actualizacion el 10 de octubre de 2024
                  </small>
                </p>
              </div>
            </div>
            <div className="card">
              <img src={miLogo2} className="card-img-top" alt="Teemo" />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Teemo, El explorador Veloz</b>
                </h5>
                <p className="card-text">
                  <b>
                    Teemo es una leyenda entre sus hermanos yordle de la Ciudad
                    de Bandle. Por lo que respecta a los yordles, parece que
                    Teemo tiene un pequeño problema. Aunque disfruta de la
                    compañía de otros yordles, también insiste con frecuencia en
                    realizar misiones en solitario para la defensa de la Ciudad
                    de Bandle.
                  </b>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Ultima actualizacion el 10 de octubre de 2024
                  </small>
                </p>
              </div>
            </div>
            <div className="card">
              <img src={miLogo3} className="card-img-top" alt="Lee Sin" />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Lee sin, El Monje Ciego</b>
                </h5>
                <p className="card-text">
                  <b>
                    Lee Sin, maestro de las artes marciales ancestrales de
                    Jonia, es un luchador con principios que canaliza la esencia
                    del espíritu del dragón para enfrentarse a cualquier
                    desafío.
                  </b>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Ultima actualizacion el 10 de octubre de 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
