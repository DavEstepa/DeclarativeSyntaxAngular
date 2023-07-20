import { Component, OnDestroy } from '@angular/core';
import { PushArrowKeysService } from '../services/push-arrow-keys.service';
import { PauseOptions } from 'src/app/core/helpers/enums/pause-options';

@Component({
  selector: 'app-push-arrow-keys',
  templateUrl: './push-arrow-keys.component.html',
  styleUrls: ['./push-arrow-keys.component.css']
})
export class PushArrowKeysComponent implements OnDestroy {
  constructor(private service: PushArrowKeysService){}
  
  moving = false
  options = PauseOptions

  toggleControl(event: PauseOptions){
    switch (event) {
      case PauseOptions.Continue:
        this.service.showScrollBar(false)
        this.moving = true
        break;
      case PauseOptions.Settings:
        console.log("Settings Opened!!!")
        break;
      case PauseOptions.Restart:
        console.log("Restart Opened!!!")
        break;
      case PauseOptions.Pause:
        this.service.showScrollBar(true)
        this.moving = false
        break;
      default:
        break;
    }
  }

  ngOnDestroy(): void {
    this.service.showScrollBar(true)
  }
}
