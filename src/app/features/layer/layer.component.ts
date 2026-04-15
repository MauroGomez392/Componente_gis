import { Component, OnInit } from '@angular/core';
import { LayerService } from '../../services/layer.service';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { environment } from '../../../environments/environment';
import WMSLayer from "@arcgis/core/layers/WMSLayer.js";


export interface Layer {
              url: string,
              description: string,
              type: 'WMS' | 'Feature',
              show: boolean,
              visible: boolean
              }
@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css'],
  standalone: true
})
export class LayerComponent implements OnInit {

  private urls_services: Layer[]

  constructor(private layerService: LayerService) {
   if(environment){
    this.urls_services = [];
    environment.urls_layers.forEach((l) => {
      this.urls_services.push(l as Layer);
    })
   }
  }

  ngOnInit() {
    this.loadLayers();
  }
  private loadLayers(){
    if(this.urls_services.length > 0){
      this.urls_services.forEach((l) => {
        if(l.type === 'WMS' && l.show) this.loadWMSLayers(l.url, l.description, l.visible);
        else if (l.type === 'Feature' && l.show) this.loadFeatureLayers(l.url, l.description, l.visible);
      })
    }
  }

  private loadWMSLayers(url: string, title: string, visible: boolean){    
    const wms_layer = new WMSLayer({
                                    url: url,
                                    title: title,
                                    visible: visible
                                  });
    this.layerService.addLayer(wms_layer);
  }
  private loadFeatureLayers(url: string, title: string, visible: boolean) {
    const newLayer = new FeatureLayer({
                                        url: url,
                                        title: title,
                                        visible: visible                           
                                      });
    this.layerService.addLayer(newLayer);    
  }
}
