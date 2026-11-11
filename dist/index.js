/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the last element in a one-dimensional double-precision floating-point ndarray equal to a corresponding element in another one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-dlast-index-equal
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var dlastIndexEqual = require( '@stdlib/blas-ext-base-ndarray-dlast-index-equal' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float64Vector( [ 0.0, 0.0, 3.0, 0.0 ] );
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var idx = dlastIndexEqual( [ x, y, fromIndex ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
