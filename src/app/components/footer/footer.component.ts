import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public SrvPrice : PriceService) { }

  ngOnInit(): void {
    
  }

}
