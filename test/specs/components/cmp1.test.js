import { shallow } from '@vue/test-utils'
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
	let wrapper
	
	beforeEach(()=>{
		wrapper = shallow(cmp1, {
			propsData: {
				msg: ''
			}
		})
	})

	it('test rendering', ()=>{
		expect(wrapper.find('h1').text()).toBe('')
	})
	it('test props changing', ()=>{
		wrapper.setProps({
			msg: 'Ronald Cheng'
		})
		expect(wrapper.find('h1').text()).toBe('Ronald Cheng')
	})
	// it('snapshot', () => {
 //  		expect(wrapper.element).toMatchSnapshot()
	// })
})