import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PushArrowKeysService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {this.renderer = this.rendererFactory.createRenderer(null, null); }

  renderer: Renderer2
  
  showScrollBar(show: boolean){
    if(show) this.renderer.setStyle(this.document.body, 'overflow', 'auto')
    else this.renderer.setStyle(this.document.body, 'overflow', 'hidden')
  }
}
