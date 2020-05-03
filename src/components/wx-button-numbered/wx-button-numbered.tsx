import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wx-button-numbered',
  styleUrl: 'wx-button-numbered.css',
  shadow: true,
})
export class WxButtonNumbered {

  @Prop({ attribute: 'number' }) number: number

  render() {
    return (
      <Host>
        <wx-button look="secondary">
          <slot></slot>
        </wx-button>
        <span class="number">{this.number}</span>
      </Host>
    );
  }

}
