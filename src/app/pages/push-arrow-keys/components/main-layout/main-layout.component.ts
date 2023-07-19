import { Component, EventEmitter, Output } from '@angular/core';
import { PauseOptions } from 'src/app/core/helpers/enums/pause-options';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  option = PauseOptions

  @Output() controlScene: EventEmitter<any> = new EventEmitter();
  generateSignal(control: PauseOptions){
    this.controlScene.emit(control)
  }
}
