import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wx-actionable-suggestion',
  styleUrl: 'wx-actionable-suggestion.css',
  shadow: true,
})
export class WxActionableSuggestion {

  @Prop({ attribute: 'suggestion' }) suggestion: string;
  @Prop({ attribute: 'action' }) action: string;

  @Event({
    eventName: 'clickAction',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) clickAction: EventEmitter;

  render() {
    return (
      <Host>
        <span class="suggestion">{this.suggestion}</span>
        <wx-button class="action" look="secondary" onClick={() => this.clickAction.emit()}>{this.action}</wx-button>
      </Host>
    );
  }

}
