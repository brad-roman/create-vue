import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('players', {
    state() {
        return {"name": '',
                "email": '',
                "phone": '',
                "positions": [],
                "Available":[]
                }
    },

    actions: {
        async fill(){
            let rslt = await import('@/Players.json');
                this.$state = rslt.default;
        },
    }
})