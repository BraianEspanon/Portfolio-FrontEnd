import { TarjetaDetalle } from "./TarjetaDetalle";

export interface Tarjeta{
    //No pude implementarlo con clases
    titulo: string;
    detalle: TarjetaDetalle[];
    tipo: string;
}