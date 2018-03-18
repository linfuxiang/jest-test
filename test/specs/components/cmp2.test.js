import { shallow } from 'vue-test-utils'
import Vue from 'vue'
import cmp2 from '@/components/cmp2'

// describe('cmp2.vue', () => {
// 	let cons, vm

// 	beforeAll(()=>{
// 		cons = Vue.extend(cmp2)
// 		vm = new cons().$mount()
// 	})
	
// 	it('test Data', () => {
// 		expect(vm.msg).toBe('Here is cmp2')
// 	})
// })

describe('just test cmp2.vue', ()=>{
	let cmp
	
	beforeAll(()=>{
		cmp = shallow(cmp2, {})
	})

	it('test Data', ()=>{
		expect(cmp.vm.msg).toBe('Here is cmp2')
	})
	it('snapshot', () => {
  		expect(cmp.element).toMatchSnapshot()
	})
})