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

# mapValues

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Map values from one object to a new object having the same keys.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-map-values
```

</section>

<section class="usage">

## Usage

```javascript
var mapValues = require( '@stdlib/utils-map-values' );
```

#### mapValues( obj, transform )

Map values from one `object` to a new `object` having the same keys.

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

-   `value`: object value corresponding to `key`
-   `key`: object key
-   `obj`: the input object

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

```javascript
var mapValues = require( '@stdlib/utils-map-values' );

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
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-map-values.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-map-values

[test-image]: https://github.com/stdlib-js/utils-map-values/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-map-values/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-map-values/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-map-values?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-map-values
[dependencies-url]: https://david-dm.org/stdlib-js/utils-map-values/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-map-values/main/LICENSE

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->
