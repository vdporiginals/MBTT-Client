import { CommonModule } from '@angular/common';
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
  @Input() statusContent: number;
  @Input() iconPath;
  constructor() {}

  ngOnInit(): void {
    console.log(this.statusContent);
  }
}

@NgModule({
  declarations: [CardStatusComponent],
  imports: [CommonModule],
  exports: [CardStatusComponent],
})
export class CardStatusModule {}
