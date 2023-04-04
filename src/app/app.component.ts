import { Component } from '@angular/core';
import { CartdataService } from './cartdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electrons';
  cartData = []
  countProd = 0;

  cartLeng = 0
  constructor(private data: CartdataService) { }

  ngOnInit(): void {
    this.data.shareData.subscribe(data => this.cartData = data)
    this.data.prodCount.subscribe((data) => {
      console.log("appcompoData",data);
      this.countProd = data
    })

    console.log(this.cartData);
    this.cartLeng = this.cartData.length
  }
  onToggleClick(){
    
  }
}
