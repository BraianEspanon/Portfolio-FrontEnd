import { TarjetaDetalle } from "./TarjetaDetalle";

export interface Tarjeta{
    idTarjeta: number;
    titulo: string;
    detalle: TarjetaDetalle[];
    tipo: string;
}