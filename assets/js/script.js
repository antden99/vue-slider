const { createApp } = Vue;

createApp({
    data() {
        return {
            activeImg: 0,
            slides: [
                {
                    image: './assets/img/img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: './assets/img/img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: './assets/img/img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: './assets/img/img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: './assets/img/img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],

        }
    },
    methods: {
        prev() {
            console.log(this.slides.length)
            console.log("immagine precedente")
            this.activeImg--
            if (this.activeImg < 0) {

                this.activeImg = this.slides.length - 1
            }
        },
        next() {
            console.log(this.slides.length)

            console.log("immagine successiva")
            this.activeImg++
            if (this.activeImg === this.slides.length) {
                this.activeImg = 0;
            }
        },

    },
    mounted() {
        setInterval(this.next, 3000);
    },

}).mount("#app")


