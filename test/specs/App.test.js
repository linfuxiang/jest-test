// import { shallow } from 'vue-test-utils'
import { mount, shallow } from '@vue/test-utils'
import Vue from 'vue'
import App from '@/App'

// describe('App.vue', () => {
// 	let cons, vm
	
// 	beforeAll(()=>{
// 		cons = Vue.extend(App)
// 		vm = new cons().$mount()
// 	})
	
// 	it('test Data', () => {
// 		expect(vm.msg).toBe('Welcome to Your Vue.js App')
// 		expect(vm.showingCmp).toBe('cmp1')
// 	})
// 	it('test checkoutCmp func', () => {
// 		vm.checkoutCmp()
// 		expect(vm.showingCmp).toBe('cmp2')
// 		vm.checkoutCmp()
// 		expect(vm.showingCmp).toBe('cmp1')
// 	})
// 	it('has the expected html structure', () => {
//   		expect(vm.$el).toMatchSnapshot()
// 	})
// })

describe('just test App.vue', ()=>{
	let wrapper
	
	beforeEach(()=>{
		wrapper = shallow(App, {})
	})

	it('test rendering', ()=>{
		expect(wrapper.find('h1').text()).toBe('Welcome to Your Vue.js App')
		expect(wrapper.find('input').element._value).toBe('')
		expect(wrapper.find('.come').isVisible()).toBe(false)
		expect(wrapper.element).toMatchSnapshot()
	})
	it('test input', () => {
		wrapper.setData({ 
			inputCpm1: 'Ronald Cheng'
		})
		expect(wrapper.find('input').element._value).toBe('Ronald Cheng')
	})
	it('test btn', () => {
		// show
		wrapper.find('button').trigger('click')
		expect(wrapper.find('.come').isVisible()).toBe(true)
		// hide
		wrapper.find('button').trigger('click')
		expect(wrapper.find('.come').isVisible()).toBe(false)
	})
	// it('snapshot', () => {
 //  		expect(wrapper.element).toMatchSnapshot()
	// })
})