import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
	let cons, vm
	beforeAll(()=>{
		cons = Vue.extend(App)
		vm = new cons().$mount()
	})
	it('test Data', () => {
		expect(vm.msg).toBe('Welcome to Your Vue.js App')
		expect(vm.showingCmp).toBe('cmp1')
	})
	it('test checkoutCmp func', () => {
		vm.checkoutCmp()
		expect(vm.showingCmp).toBe('cmp2')
		vm.checkoutCmp()
		expect(vm.showingCmp).toBe('cmp1')
	})
	it('has the expected html structure', () => {
  		expect(vm.$el).toMatchSnapshot()
	})
})