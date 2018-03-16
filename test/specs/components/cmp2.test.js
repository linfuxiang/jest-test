import Vue from 'vue'
import cmp2 from '@/components/cmp2'

describe('cmp2.vue', () => {
	let cons, vm
	beforeAll(()=>{
		cons = Vue.extend(cmp2)
		vm = new cons().$mount()
	})
	it('test Data', () => {
		expect(vm.msg).toBe('Here is cmp2')
	})
})