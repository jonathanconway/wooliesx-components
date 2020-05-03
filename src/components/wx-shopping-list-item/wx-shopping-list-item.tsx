import { Component, Prop, Host, h, Event, EventEmitter } from '@stencil/core';

const PLACEHOLDER_IMAGE_URL = 'https://ekameco.com/wp-content/uploads/2019/03/product-placeholder-300x300.jpg';

@Component({
  tag: 'wx-shopping-list-item',
  styleUrl: 'wx-shopping-list-item.css',
  shadow: true,
})
export class WxShoppingListItem {
  @Prop({ attribute: 'name' }) name?: string;
  @Prop({ attribute: 'imageUrl' }) imageUrl?: string;
  @Prop({ attribute: 'price' }) price?: number;
  @Prop({ attribute: 'productId' }) productId?: string;
  @Prop({ attribute: 'deleted' }) deleted?: boolean;

  @Event({
    eventName: 'clickAddToCart',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) clickAddToCart: EventEmitter;

  @Event({
    eventName: 'clickDelete',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) clickDelete: EventEmitter;

  @Event({
    eventName: 'clickUndoDelete',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) clickUndoDelete: EventEmitter;

  renderStandardActions() {
    return (
      <div class="actions">
        {this.productId &&
          <wx-button
            class="add-to-cart-button"
            title="Add to cart"
            onClick={() => this.clickAddToCart.emit()}>
              Add to Cart
          </wx-button>}

        <wx-button
          class="delete-button"
          look="secondary"
          title="Delete"
          onClick={() => this.clickDelete.emit()}>╳</wx-button>

        <span class="re-order-handle" title="Drag-and-drop to re-order">
          <ion-icon class="re-order-handle-icon" name="md-reorder"></ion-icon>
        </span>
      </div>
    )
  }

  renderDeletedActions() {
    return (
      <div class="actions">
        <wx-button class="bring-back-button" look="secondary" onClick={() => this.clickUndoDelete.emit()}>
          <ion-icon name="md-undo"></ion-icon> 
          Bring back
        </wx-button>
      </div>
    )
  }

  render() {
    return (
      <Host>
        <div class={`pic-col ${this.deleted && 'deleted'}`}>
          <div class="pic-container">
            <img class="pic" src={this.imageUrl || PLACEHOLDER_IMAGE_URL} />
          </div>
        </div>

        <div class={`name-col ${this.deleted && 'deleted'}`}>
          <div class="name">
            {this.name}
          </div>
        </div>

        {this.price &&
          <div class={`price-col ${this.deleted && 'deleted'}`}>
            <wx-price amount={this.price}></wx-price>
          </div>}

        {!this.deleted ? this.renderStandardActions() : this.renderDeletedActions()}
      </Host>
    );
  }

}
