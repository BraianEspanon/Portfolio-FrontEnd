import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImagenesService } from 'src/app/service/imagenes.service';
@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent implements OnInit {
  previsualizacion : string = "";
  archivos : any = [];

  constructor(private sanitizer: DomSanitizer, private rest : ImagenesService ) { }

  ngOnInit(): void {
  }
  /*
  Continuar con esto cuando haya backend.
  Tutoriales:
  https://www.youtube.com/watch?v=U-Nbjphc29U&ab_channel=LeiferMendez
  https://www.youtube.com/watch?v=8GJgfk1rFUQ&ab_channel=LeiferMendez
  */
  capturarFile(event:any):any{
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen : any) => {
      this.previsualizacion = imagen.base;
    })
    this.archivos.push(archivoCapturado)
  }

  subirArchivo():any{
    try{
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo : any) =>{
        formularioDeDatos.append('files', archivo);
      })

      this.rest.subirImagen(formularioDeDatos).subscribe((res : any) => {
        console.log("Respuesta del servidor", res)
      })

    } catch(e){
      console.log("ERROR: ", e)
    }
  }

  extraerBase64 = async ($event: any) => new Promise((resolve) => {
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        base: reader.result
      })
    };
    reader.onerror = () =>{
      resolve({
        base:null
      });
    }
  })
  
}
