import Vue from 'vue'
import cmp1 from '@/components/cmp1'

describe('cmp1.vue', () => {
	let cons, vm
	beforeAll(()=>{
		cons = Vue.extend(cmp1)
		vm = new cons().$mount()
	})
	it('test Data', () => {
		expect(vm.msg).toBe('Here is cmp1')
	})
})