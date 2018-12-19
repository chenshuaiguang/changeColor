let s1 = Symbol('foo')
let s2 = Symbol('foo')
export let object = {
	[s1]:1,
	[s2]:2
}
