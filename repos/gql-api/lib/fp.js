export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
// export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
