import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?:ElementRef<HTMLElement>;
  private _color:string='red';
  private _errors?: ValidationErrors| null;

  @Input()
  set color(value:string) {
    this._color = value;
    this.setStyle();
  }
  @Input()
  set errors(value:ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();
  }
  constructor(private el:ElementRef<HTMLElement>) {
    // console.log(el);
    this.htmlElement=el;
   }

  ngOnInit(): void {
    this.setStyle();
  }

   setStyle():void{
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
   }

   setErrorMessage():void{
    if(!this.htmlElement) return;
    if(!this._errors){
      this.htmlElement.nativeElement.innerText = '';
      return;
    }
    const errors = Object.keys(this._errors);

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText = 'Campo requerido';
      return;
    }

    if(errors.includes('minlength')){
      const {requiredLength: minLength, actualLength: actual} = this._errors['minlength'];
      // console.log({minLength: minLength, actual:actual});
      this.htmlElement.nativeElement.innerText = `Tamaño minimo ${minLength}, llevas ${actual}`;
      return;
    }

    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerText = 'Ha de ser un email valido';
      return;
    }

   }
}