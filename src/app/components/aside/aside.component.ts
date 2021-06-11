import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  navItems = [
    { id: 0, des: 'Overview' },
    { id: 1, des: 'Features' },
    { id: 2, des: 'What\'s in the box?' }
  ]
  valueTabs: number = 0;
  navContent = [
    'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.',
    '-Voice Assitant support <br> -Customizable controls',
    'Earburds'
  ]


  modelList = [
    {
      id : 0,
      title :'Ivory White',
      description:'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.' 
    },
    {
      id : 1,
      title :'Matte Black',
      description:'For the past 75 years, Sennheiser has put sound first.' 
    }
  ]

  warrantyList = [
    {
      id : 0,
      years : '2 years coverage',
      description : 'For the past 75 years, Sennheiser has put sound first.',
      price : 0
    },
    {
      id : 1,
      years : '3 years coverage',
      description : 'For the past 75 years, Sennheiser has put sound first.',
      price : 75
    }
  ];

  featuresList = [
    {
      id : 0,
      feature : 'Voice Assistant support',
      price : 0

    },
    {
      id : 1,
      feature : 'Customizable controls',
      price : 25
    }
  ];

  selectedModel;
  selectedWarranty;
  selectedFeature;


  valor: any = 0;


  constructor(private Srv : PriceService) {
    this.selectedModel = this.modelList[1];
    this.selectedWarranty = this.warrantyList[0];
    this.selectedFeature = this.featuresList[0];
   }

  ngOnInit(): void {
  }

  selectttab(data: any, index) {
    this.valueTabs = index;
    this.valor = data.id
  }

  setPriceFeature(item){
    this.selectedFeature = item;
    this.Srv.changePriceFeature(this.selectedFeature.price)

  }

  setPriceWarranty(item){
    this.selectedWarranty = item;
    this.Srv.changePriceWarranty(this.selectedWarranty.price)
  }
}
