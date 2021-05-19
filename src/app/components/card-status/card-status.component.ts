import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardStatusComponent implements OnInit {
  @Input() statusContent;
  @Input() iconPath;
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [CardStatusComponent],
  imports: [],
  exports: [CardStatusComponent],
})
export class CardStatusModule {}
