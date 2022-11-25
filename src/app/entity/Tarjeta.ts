import { TarjetaDetalle } from "./TarjetaDetalle";

export interface Tarjeta{
    //No pude implementarlo con clases
    id: string;
    titulo: string;
    detalle: TarjetaDetalle[];
    tipo: string;
}