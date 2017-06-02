# Helper CSS

Common CSS helper classes. Focus on missing padding and margin styles in Bootstrap 3.

## Install

Install with Npm or Bower

### npm

To install with npm run

```
$ npm install helper-css --save
```

### Bower

To install with Bower run

```
$ bower install helper-css --save
```

## Usage

Include `helper-css.min.css` style in your page and start using css helper classes.

### CSS Helper Classes

CSS helper classes cover four areas - margin, padding, text and general.

#### CSS Helpers for margin and Padding

All _margin_ and _padding_ have properties for distances 0, 5, 10, 15, 20, 30, 40, 50, 60, 80, 100, 150 and 200 px.

Margin classes starts with `m`, padding classes starts `p`. 

Following is the number that represents space in pixels and (optional) direction. Direction can be `top`, `lft`, `rgt` and `btm`.

Example:

* `m0`: assigns `margin: 0` property
* `m50lft`: assigns `margin-left: 50px` property
* `p10`: assigns `padding: 10px` property
* `p20btm`: assigns `padding-bottom: 20px` property
* `p10top p10btm m20rgt`: assigns `padding-top: 10px; padding-bottom: 10px; margin-right: 20px` property

#### CSS Helpers for Text

Text CSS Helpers contain set of text styling classes for text display and size.

*Text Display*

* `text-strong`: assigns `font-weight: bold` property
* `text-strike`: assigns `text-decoration: line-through` property

*Text Size*

Text size can be adjusted by using `text-<size>` where `<size>` can take _t-shirt_ value: xs, s, m, l, xl, xxl.

* `text-xs`: assigns `font-size: 70%` property
* `text-s`: assigns `font-size: 85%` property
* `text-m`: assigns `font-size: 100%` property
* `text-l`: assigns `font-size: 115%` property
* `text-xl`: assigns `font-size: 130%` property
* `text-xxl`: assigns `font-size: 145%` property

---

As any other classes, helper classes can be combined together.

### Usage example:

For given `div` element:

```
<div class="m0 p20top p10rgt p50btm p10lft text-s">
    ...
</div>
```

output would be the same as:

```
<div style="margin:0; padding: 20px 10px 50px 10px; font-size: 80%;">
    ...
</div>
```
