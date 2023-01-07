import { TarjetaDetalle } from "./TarjetaDetalle";

export interface Tarjeta{
    //No pude implementarlo con clases
    idTarjeta: number;
    titulo: string;
    detalle: TarjetaDetalle[];
    tipo: string;
}