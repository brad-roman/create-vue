import { defineStore } from 'pinia'

export let usePlayerStore = defineStore('players', {
    state: () => ({"data": []                
                }),

    actions: {
        async fill(){
            let rslt = await import('@/Players.json');
            this.$state = rslt.default;
            //console.log(rslt.default);
        },
    }
})