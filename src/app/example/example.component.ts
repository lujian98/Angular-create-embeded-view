import { Component, ContentChildren, QueryList, TemplateRef, Directive, ViewContainerRef, AfterContentInit, ViewChild } from '@angular/core'
import { SomeOtherComponent } from '../some-other-component/some-other-component.component'


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterContentInit {
  @ViewChild("templateToAppend", {static: true}) templateToAppend: TemplateRef<any>;
  @ContentChildren(SomeOtherComponent, { descendants: true, read: ViewContainerRef }) someOtherComponents: QueryList<ViewContainerRef>;

  ngAfterContentInit() {
    this.someOtherComponents.forEach(ap => ap.createEmbeddedView(this.templateToAppend));
  }
}
