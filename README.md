<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# mapValues

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Map values from one object to a new object having the same keys.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
mapValues = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-values@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var mapValues = require( 'path/to/vendor/umd/utils-map-values/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-values@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.mapValues;
})();
</script>
```

#### mapValues( obj, transform )

Maps values from one `object` to a new `object` having the same keys.

```javascript
function transform( value, key ) {
    return key + value;
}

var obj1 = {
    'a': 1,
    'b': 2
};

var obj2 = mapValues( obj1, transform );
// returns { 'a': 'a1', 'b': 'b2' }
```

The `transform` function is provided three arguments:

-   **value**: object value corresponding to `key`.
-   **key**: object key.
-   **obj**: the input object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Key iteration order is **not** guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic return values.
-   The function only maps values assigned to **own** properties. Hence, the function does **not** map values for inherited properties.
-   The function **shallow** copies key values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-values@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function transform( value, key ) {
    return key + ':' + value;
}

var obj1 = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var obj2 = mapValues( obj1, transform );

console.dir( obj2 );
// => { 'a': 'a:beep', 'b': 'b:boop', 'c': 'c:foo', 'd': 'd:bar' }

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-map-keys`][@stdlib/utils/map-keys]</span><span class="delimiter">: </span><span class="description">map keys from one object to a new object having the same values.</span>
-   <span class="package-name">[`@stdlib/utils-omit-by`][@stdlib/utils/omit-by]</span><span class="delimiter">: </span><span class="description">return a partial object copy excluding properties for which a predicate (function) returns a truthy value.</span>
-   <span class="package-name">[`@stdlib/utils-pick-by`][@stdlib/utils/pick-by]</span><span class="delimiter">: </span><span class="description">return a partial object copy containing properties for which a predicate (function) returns a truthy value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-map-values.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-map-values

[test-image]: https://github.com/stdlib-js/utils-map-values/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-map-values/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-map-values/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-map-values?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-map-values.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-map-values/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-map-values/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-map-values/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-map-values/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-map-values/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-map-values/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-map-values/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-map-values/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-map-values/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/map-keys]: https://github.com/stdlib-js/utils-map-keys/tree/umd

[@stdlib/utils/omit-by]: https://github.com/stdlib-js/utils-omit-by/tree/umd

[@stdlib/utils/pick-by]: https://github.com/stdlib-js/utils-pick-by/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
