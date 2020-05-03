import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wx-price',
  styleUrl: 'wx-price.css',
  shadow: true,
})
export class WxPrice {
  @Prop() amount: number;

  formattedAmount() {
    return this.amount.toFixed(2);
  }

  render() {
    return (
      <Host>
        <span class="price-currency">$</span>
        <span class="price-amount">{this.formattedAmount()}</span>
      </Host>
    );
  }

}
