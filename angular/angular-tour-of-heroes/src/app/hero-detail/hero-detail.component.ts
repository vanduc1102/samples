import { Component, OnInit, Input , OnDestroy } from '@angular/core';
import { Hero } from '../models/Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
    console.log('hero detail initialized');
  }

  ngOnDestroy() {
    console.log('hero detail destroyed');
  }

}
