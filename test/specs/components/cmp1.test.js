import { shallow } from 'vue-test-utils'
import Vue from 'vue'
import cmp1 from '@/components/cmp1'

// describe('cmp1.vue', () => {
// 	let cons, vm

// 	beforeAll(()=>{
// 		cons = Vue.extend(cmp1)
// 		vm = new cons().$mount()
// 	})
	
// 	it('test Data', () => {
// 		expect(vm.msg).toBe('Here is cmp1')
// 	})
// })

describe('just test cmp1.vue', ()=>{
	let cmp
	
	beforeAll(()=>{
		cmp = shallow(cmp1, {})
	})

	it('test Data', ()=>{
		expect(cmp.vm.msg).toBe('Here is cmp1')
	})
	it('snapshot', () => {
  		expect(cmp.element).toMatchSnapshot()
	})
})