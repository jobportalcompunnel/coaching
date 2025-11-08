// Attribute directives
//     [ngClass], [ngStyle]
// Structural directives
//     (e.g., *ngIf, *ngFor).
// Components directives
// •	@Directive({
// •	  selector: '[appHighlight]'
// •	})
// •	export class HighlightDirective implements AfterViewInit{
// •	
// •	  @Input() appHighlight: string = 'yellow';
// •	  @HostListener('mouseenter') onMouseEnter() {
// •	    this.blue();
// •	  }
// constructor(private elRef: ElementRef) {}
// •	
// •	  ngAfterViewInit() {
// •	    this.elRef.nativeElement.addEventListener('keypress',e=>{
// •	    this.elRef.nativeElement.style.backgroundColor = this.appHighlight;
// •	    })
// •	  }
