import { Injectable } from '@angular/core';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayerService {
  private layerSubject = new Subject<any>();
  layerObservable$ = this.layerSubject.asObservable();
  private graphicLayer: GraphicsLayer;

  constructor(){
    this.graphicLayer = new GraphicsLayer({listMode: "hide"});
  }
  addLayer(layer: any) {    
    this.layerSubject.next(layer);
  }
  getGraphicLayer(): GraphicsLayer{
    return this.graphicLayer;
  }
}
