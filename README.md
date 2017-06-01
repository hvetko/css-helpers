# Helper CSS

Common CSS helper classes. Needed often with plain Bootstrap.

## Usage

Include css-helpers.min.css in your page.

### npm

To install with `npm` run

```
npm install hvetko/helper-css --save
```

or edit `package.json` file by adding `"helper-css": "github:hvetko/helper-css"` into `dependencies`.

### Bower

To install with Bower run

```
bower install git://github.com/hvetko/helper-css.git --save
```

or edit `bower.json` file by adding `"helper-css": "git://github.com/hvetko/css-helpers.git"` into `dependencies`.

## CSS Classes

Current helpers cover _margin_ and _padding_ properties for distances 0, 5, 10, 15, 20, 30, 40, 50, 60, 80, 100, 150 and 200 px.

Margin classes starts with `m`, padding classes starts `p`. 

Following is the number that represents space in pixels and (optional) direction. Direction can be `top`, `lft`, `rgt` and `btm`.

Example:

* `m0`: assigns `margin: 0` property
* `m50lft`: assigns `margin-left: 50px` property
* `p10`: assigns `padding: 10px` property
* `p20btm`: assigns `padding-bottom: 20px` property

As any other classes, helper classes can be combined together.

Usage example:  

For given `div` element:

```
<div class="m0 p20top p10rgt p50btm p10lft">
    ...
</div>
```

output would be the same as

```
<div style="margin:0; padding: 20px 10px 50px 10px;">
    ...
</div>
```
