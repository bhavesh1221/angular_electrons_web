import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData:any = []
  slide_index = 0
  noDataAva = false;
  slide_play = true
  mySet: any = new Set()
  arr: any = [0,1,2]
  slides = document.querySelectorAll('.slide')
  showingthiscard:any = [];
  cardsData = [
    {
      id: 0,
      img1: 'assets/images/JBL_Quantum_400_Product Image_Hero 02.png',
      img2: 'assets/images/JBL_Quantum_400_Product Image_Hero Mic Up.webp',
      prodname: 'JBL Quantum 400',
      price1: '$300',
      price2: '$200'
    },
    {
      id: 1,
      img1: 'assets/images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
      img2: 'assets/images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
      prodname: 'JBL E55BT KEY BLACK',
      price1: '$300',
      price2: '$200'
    },
    {
      id: 2,
      img1: 'assets/images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
      img2: 'assets/images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
      prodname: 'JBL JR 310BT',
      price1: '$300',
      price2: '$200'
    },
    {
      id: 3,
      img1: 'assets/images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
      img2: 'assets/images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
      prodname: 'JBL Endurance SPRINT',
      price1: '$300',
      price2: '$200'
    }
  ]
  constructor(private data: CartdataService, private http: HttpClient) { }

  ngOnInit(): void {
   
    // debugger
    this.data.shareData.subscribe(data => this.cartData = data)
    if(this.cartData.length == 0){
      this.noDataAva = false;
    }
    else{
      this.noDataAva = true;
    }
    console.log(this.cartData);
    this.showData();
    localStorage.setItem("arrray", this.arr)
  }

  showData(){
    // this.cartData = this.cartData
    for(var i = 0; i < this.cartData.length; i++){
      this.cardsData.filter((item) => {
        if(item.id == this.cartData[i]){
          this.showingthiscard.push(item)
          console.log(this.showingthiscard);
        }
      })
    }    
  }
  onBuyBtn(){
    // const data = {
    //   id: 3,
    //   img1: 'assets/images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
    //   img2: 'assets/images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
    //   prodname: 'Data posted',
    //   price1: '$700',
    //   price2: '$200'
    // }
    this.http.post('https://perfect-gown-bear.cyclic.app/show', this.showingthiscard ).subscribe((res)=>{
      console.log(res);
    })
  }


  hideAllSlide = () => {
    this.slides.forEach(e => {
        e.classList.remove('active')
    })
  }
  showSlide = () => {
    this.hideAllSlide()
  }
  nextSlide = () => this.slide_index = this.slide_index + 1 === this.slides.length ? 0 : this.slide_index + 1
  prevSlide = () => this.slide_index = this.slide_index - 1 < 0 ? this.slides.length - 1 : this.slide_index - 1
  onBtnClick(){
    this.nextSlide()
    this.showSlide()
  }

  onBtnClickPrevious(){
    this.prevSlide()
    this.showSlide()
  }

 
}
