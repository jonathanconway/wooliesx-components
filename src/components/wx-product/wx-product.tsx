import { Component, Host, h, State, Prop, Event, EventEmitter } from '@stencil/core';

const SAVE_TO_LIST_TEXT = 'Save to list';
const SAVED_TO_LIST_TEXT = 'Saved to list';

@Component({
  tag: 'wx-product',
  styleUrl: 'wx-product.scss',
  shadow: true,
})
export class WxProduct {
  @Prop({ attribute: 'name' }) name: string;
  @Prop({ attribute: 'imageUrl' }) imageUrl: string;
  @Prop({ attribute: 'price' }) price: number;
  @Prop({ attribute: 'priceNotes' }) priceNotes: string;
  @Prop({ attribute: 'productId' }) productId: string;

  @Event({
    eventName: 'clickAddToCart',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) clickAddToCart: EventEmitter<{ productId: string }>;

  @Event({
    eventName: 'clickSaveToList',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) clickSaveToList: EventEmitter<{ productId: string }>;
  
  @State() savedToList: boolean = false;
  
  handleClickSaveToList() {
    this.savedToList = true;

    const { productId } = this;
    this.clickAddToCart.emit({ productId });
  }

  render() {
    const { name, imageUrl, price, priceNotes, productId } = this;
    return (
      <Host>
        <div class="main-container">
          <span class="title">{name}</span>

          <div class="pic-container">
            <img class="pic" src={imageUrl} />
          </div>
        
          <div class="price-container">
            <wx-price amount={price}></wx-price>
            <span class="price-notes">{priceNotes}</span>
          </div>
        </div>

        <div class="actions-row">
          <wx-button
            class="add-to-cart action-button"
            onClick={() => this.clickAddToCart.emit({ productId })}>

            <ion-icon name="md-cart"></ion-icon> 
            Add to Cart
          </wx-button>

          <wx-button
            class="save-to-list action-button"
            look="secondary"
            disabled={this.savedToList}
            onClick={() => this.handleClickSaveToList()}>

            <ion-icon name={this.savedToList ? 'md-checkmark' : 'md-list'}></ion-icon> 

            {this.savedToList ? SAVED_TO_LIST_TEXT : SAVE_TO_LIST_TEXT}
          </wx-button>
        </div>
      </Host>
    );
  }
}
