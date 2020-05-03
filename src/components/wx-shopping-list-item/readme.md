# wx-shopping-list-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default     |
| ----------- | ----------- | ----------- | --------- | ----------- |
| `deleted`   | `deleted`   |             | `boolean` | `undefined` |
| `imageUrl`  | `imageurl`  |             | `string`  | `undefined` |
| `name`      | `name`      |             | `string`  | `undefined` |
| `price`     | `price`     |             | `number`  | `undefined` |
| `productId` | `productid` |             | `string`  | `undefined` |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `clickAddToCart`  |             | `CustomEvent<any>` |
| `clickDelete`     |             | `CustomEvent<any>` |
| `clickUndoDelete` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [wx-button](../wx-button)
- [wx-price](../wx-price)

### Graph
```mermaid
graph TD;
  wx-shopping-list-item --> wx-button
  wx-shopping-list-item --> wx-price
  style wx-shopping-list-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
