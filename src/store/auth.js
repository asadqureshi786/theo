import { defineStore } from 'pinia'
import axios from 'axios'
import { baseURL } from '../config/baseURL'


export const useAuthStore = defineStore('counter', {
 state: () => ({
  user: null,
    token: localStorage.getItem('token')
}),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async fetchUser(){

        try{
            const response = await axios.get(baseURL+'theo/api/me',{
                headers: {
                  'Accept' : 'application/json',
                  Authorization: `Bearer ${this.token}`, 
                },
            })
            this.user = response.data
            console.log(response.data)
        }catch(error){
            console.error('User fetch failed', error)
        }
    }
  },
})