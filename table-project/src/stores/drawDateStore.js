import { defineStore } from 'pinia'

export const useDrawDateStore = defineStore('draws', {
    state() {
        return {"club": '',
                "league": '',
                "day": '',
                "time": '',
                "ind": '',
                "drawdate":[]
                }
    },

    actions: {
        async fill(){
            let rslt = await import('@/Draws.json');
                this.$state = rslt.default;
        },
    }
})