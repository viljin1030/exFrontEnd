import {Component, ViewContainerRef} from '@angular/core';
import {ComponentsHelper} from "ng2-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public constructor(private componentsHelper:ComponentsHelper, private viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    componentsHelper.setRootViewContainerRef(viewContainerRef);
  }
}
