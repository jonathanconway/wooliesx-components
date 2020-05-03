import { Component, h, Prop } from '@stencil/core';
import { Look } from './wx-button.types';

@Component({
  tag: 'wx-button',
  styleUrl: 'wx-button.css',
  shadow: false,
})
export class WxButton {

  @Prop({ attribute: 'disabled' }) disabled?: boolean;
  @Prop({ attribute: 'look' }) look: Look = 'primary';

  render() {
    return (
      <button disabled={this.disabled} class={`look-${this.look}`}>
        <slot></slot>
      </button>
    );
  }

}
