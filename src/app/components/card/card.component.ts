import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() cardRouteLink: string;
  @Input() cardIcon;
  @Input() cardTitle: string;
  @ContentChild('detailCard', { static: false }) detail!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent],
})
export class CardModule {}
