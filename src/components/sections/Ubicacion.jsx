import Parrafo from "../helpers/Parrafo";
import Titulo from "../helpers/Titulo";

import mapa from '../../img/ubicacion/mapa.png'
import mapaMovil from '../../img/ubicacion/mapamovil.png'

export default function Ubicacion () {
    return (
        <section className="pt-[90px]">
            <Titulo className="mb-0">Nos ubicamos en:</Titulo>
            <Parrafo className="text-center">A 10 minutos del centro histórico, sobre la Calle 27 218, entre 26 y 28, García Ginerés, Mérida, Yucatán.</Parrafo>

            <img className="w-full max-w-max hidden md:block" src={mapa} alt="Mapa" />
            <img className="w-full max-w-max md:hidden" src={mapaMovil} alt="Mapa movil" />
        </section>
    )
}