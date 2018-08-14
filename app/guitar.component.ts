import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Guitar }    from './model/guitar.model';

//Decorador
@Component({
	selector: 'guitar',
	templateUrl: './views/guitar.template.html',
	styleUrls: ['./assets/css/guitar.style.css']
	})

export class GuitarComponent{

	public guitars:Array<Guitar>;
	

	constructor(){
		this.guitars = new Array();
		this.guitars.push(new Guitar(1, 'Gibson', 'Les Paul Custom'));
		this.guitars.push(new Guitar(1, 'Fender', 'Mexican Style'));

	}
	logModelo(){ console.log(this.guitars[0]);};
}