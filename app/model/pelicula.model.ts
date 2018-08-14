//exportamos la clase Película, nuestro modelo que usaremos en el componente.
export class Pelicula{
	
	private id:number
	private titulo:string
	private director:string
	private year:number

	constructor(id, titulo, director, year){
		this.id = id
		this.titulo = titulo
		this.director = director
		this.year = year
	}
}