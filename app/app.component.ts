//importar los componentes;
import { Component } from '@angular/core';
//importar los modelos que se van a usar en los componentes;
import { Pelicula }  from './model/pelicula.model';


/************************************** DECORADORES **************************************/
//Decorador: carga la plantilla dentro de la etiqueta.
//selector: etiqueta en la que se carga el componente
//templateUrl: plantilla que se va a utilizar
//styleUrls: estilos aplicables
@Component({
	selector: 'mi-app',
	templateUrl: './views/peliculas.view.html',
	styleUrls: ['./assets/css/pelicula.style.css']
	})

/*********************************** CLASES ASOCIADAS ***********************************/
//El componente tiene que tener una clase asociada y esta clase hay que exportarla
//En esta sección tenemos los eventos, las variables
export class AppComponent {
  	//JS es un lenguaje de tipado mu débil y TYPESCRIPT añade entre otras, ésta propiedad; No es una buena práctica asignar valores a las propiedades directamente, mejor hacerlo mediante un contructor;
  	public title:string = 'Listado de películas';

 	//función para debuguear => la arranco el CONSTRUCTOR para ver los datos que obtengo antes de renderizarlos por pantalla.
 	public function  debug(param){ console.log(param); }

 	//Array de películas que relleno en el constructor.
 	public peliculas:Array<Pelicula> = new Array(<Pelicula>);

 	/********************** DIRECTIVAS **********************/
 	//Las directivas son funcionalidades que permiten hacer algo. Hacemos un ejemplo con ngIf
 	public mostrarDatos:boolean;
 	public function cambiarValorPropiedadMostrarDatos(){ this.mostrarDatos = !this.mostrarDatos;}
 	/********************* fin directivas *******************/

  	//Contiene métodos y propiedades. Es buena práctica utilizar el constructor. Inicializa las variables y lanza métodos concretos.
  	constructor(){

  		//podemos jugar con esta condición para que se muestre o no alguno de los datos dentro de la plantilla peliculas.view.html;
  		this.mostrarDatos = true;
  		this.opacidad = 1;

  		//no es una buena práctica definir los datos directamente desde el constructor, lo suyo es tener un modelo de datos >> creamos model/pelicula.model.ts
  		this.peliculas.push(new Pelicula(1, 'Taxi driver', 'Martin Scorsese', 1977));
  		this.peliculas.push(new Pelicula(2, 'El apartamento', 'Billy Wilder', 1962));
  		this.peliculas.push(new Pelicula(3, 'E.T. El extraterrestre', 'Steven Spielberg', 1982));

  		//Podemos tener métodos que se inicialicen cuando se crea la instanciación de la clase.
  		this.debug(this.peliculas);
  	}
  }
