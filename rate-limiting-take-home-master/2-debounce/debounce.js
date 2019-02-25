/*

Takes in two parameters ```fn (a function)``` and ```time (number of milliseconds)```.

Returns a function ```retFn``` that delays invoking ```fn``` until
after ```time``` has elapsed from the *last* time ```retFn``` was invoked.

*/

export default function debounce(fn, time, immediate) {
  var timeout;

	return () => {
		const context = this;
    const args = arguments;

		let retFn = () => {
			timeout = null;
			if (!immediate) fn.apply(context, args);
		}

		clearTimeout(timeout);
		timeout = setTimeout(retFn, time);

		if (immediate && !timeout) fn.apply(context, args);
	};
}
