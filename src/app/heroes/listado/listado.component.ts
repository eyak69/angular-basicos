import { Component } from "@angular/core";


@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html',
})

export class ListadoComponent  {
   heroes : string[] = ['Spiderman','IronMan','Hulk'];
   heroesBorrados: string[] = [];

   borrarHeroe():void{
     let heroeBorrado = this.heroes.shift();
     if(heroeBorrado){
        this.heroesBorrados.push(heroeBorrado);
        console.log(heroeBorrado);
     }
     

   }
}
