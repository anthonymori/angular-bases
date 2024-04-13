import { Component } from '@angular/core';

@Component({
  // app-heroes-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): string {
    return this.name = 'Spiderman';


  }

  changeAge(): number {
    return this.age = 23

  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach( element=> {
    //   element.innerHTML = '<h1> desde angular</h1>'
    // });

  }

}
