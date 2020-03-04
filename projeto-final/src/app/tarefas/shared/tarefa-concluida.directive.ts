import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input()
  tarefaConcluida: boolean;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    if (this.tarefaConcluida)
      this.el.nativeElement.style.textDecoration = "line-through";
    else
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#42B3C5');
  }

}
