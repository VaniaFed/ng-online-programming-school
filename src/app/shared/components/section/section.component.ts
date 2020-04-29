import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {
  @Input() title: string;
}
