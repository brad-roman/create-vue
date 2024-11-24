import { defineStore } from 'pinia'

export const useDrawDateStore = defineStore('draws', {
    state() {
        return {drawDates:["Oct 16, 2024" 
                  ,"Oct 23, 2024"
                  ,"Oct 30, 2024"
                  ,"Nov 06, 2024"
                  ,"Nov 13, 2024"
                  ,"Nov 20, 2024"
                  ,"Nov 27, 2024"
                  ,"Dec 04, 2024"],
                count: 0
                }
    },

    actions: {
        increment() {
            this.count =  this.count++;
        },

        decrement() {
            this.count =  this.count--;
        }
    }
})