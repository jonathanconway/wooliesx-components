import { Component, h, Prop, Event, EventEmitter, Host } from '@stencil/core';

@Component({
  tag: 'wx-search-box',
  styleUrl: 'wx-search-box.css',
  shadow: true,
})
export class WxSearchBox {

  @Prop({ attribute: 'placeholder' }) placeholder: string = '';
  @Prop() value: string = '';

  @Event({
    eventName: 'search',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) search: EventEmitter;

  handleInput(e: Event) {
    this.search.emit((e.target as HTMLInputElement).value);
  }

  render() {
    return (
      <Host>
        <input
          class="search-input"
          type="search"
          value={this.value}
          placeholder={this.placeholder}
  
          onInput={this.handleInput}
        />
        <ion-icon class="search-icon" name="md-search"></ion-icon>
      </Host>
    );
  }

}
