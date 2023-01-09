import { Component } from '@angular/core';
import { Usuarios } from './Models/usuarios-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuaris: Usuarios[];
  constructor() {
    const usuarisJSON: string = `{
      "usuaris": [
        {"nom":"Pere","cognoms":"Porras","edat":"25","foto":"https://picsum.photos/300/300","descripcio":"Soltero super guapo y morenote","correu":"pporras@gmail.com","contrasenya":"123456","confirmarcontrasea":"123456"},
        {"nom":"Pilar","cognoms":"Ponas","edat":"18","foto":"https://picsum.photos/300/300","descripcio":"Soltera amable y simpática","correu":"pponas@gmail.com","contrasenya":"123456","confirmarcontrasea":"123456"},
        {"nom":"Pere","cognoms":"Porras","edat":"25","foto":"https://picsum.photos/300/300","descripcio":"Soltero super guapo y morenote","correu":"pporras@gmail.com","contrasenya":"123456","confirmarcontrasea":"123456"},
        {"nom":"Pilar","cognoms":"Ponas","edat":"18","foto":"https://picsum.photos/300/300","descripcio":"Soltera amable y simpática","correu":"pponas@gmail.com","contrasenya":"123456","confirmarcontrasea":"123456"},
        {"nom":"Pere","cognoms":"Porras","edat":"25","foto":"https://picsum.photos/300/300","descripcio":"Soltero super guapo y morenote","correu":"pporras@gmail.com","contrasenya":"123456","confirmarcontrasea":"123456"},
        {"nom":"Pilar","cognoms":"Ponas","edat":"18","foto":"https://picsum.photos/300/300","descripcio":"Soltera amable y simpática","correu":"pponas@gmail.com","contrasenya":"123456","confirmarcontrasea":"123456"},
        {"nom":"Pere","cognoms":"Porras","edat":"25","foto":"https://picsum.photos/300/300","descripcio":"Soltero super guapo y morenote","correu":"pporras@gmail.com","contrasenya":"123456","confirmarcontrasea":"123456"},
        {"nom":"Pilar","cognoms":"Ponas","edat":"18","foto":"https://picsum.photos/300/300","descripcio":"Soltera amable y simpática","correu":"pponas@gmail.com","contrasenya":"123456","confirmarcontrasea":"123456"}
        ]
    }`;

    const usuariosDict: any = JSON.parse(usuarisJSON);
    this.usuaris = usuariosDict['usuaris'];
  }

  /*selecteUsuarios:Usuarios = new Usuarios();*/

}

