import { defineStore } from "pinia";
export const useProductStore = defineStore("product", {
  state: () => ({
        products: [
            {
                id: 1,
                title: 'Acer UD200 DDR5 Desktop Memory',
                image: 'http://localhost:3000/_nuxt/assets/images/Acer_MA200.jpg',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 2,
                title: 'Acer SD200 Laptop DRAM',
                image:'http://localhost:3000/_nuxt/assets/images/Acer_UD200.jpg',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 3,
                title: 'Acer FA200 PCle M.2 SSD',
                image:'http://localhost:3000/_nuxt/assets/images/Acer_SD200.jpg',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 4,
                title: 'Acer UM310 USB Flash Drive',
                image:'http://localhost:3000/_nuxt/assets/images/product-3.png',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 5,
                title: 'Acer MSC300 MicroSD Card',
                image:'http://localhost:3000/_nuxt/assets/images/1n.jpg',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 6,
                title: 'Acer UP300 USB Flash Drive',
                image:'http://localhost:3000/_nuxt/assets/images/UM310.png',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 7,
                title: 'Acer UP300 USB Flash Drive',
                image:'http://localhost:3000/_nuxt/assets/images/product-4.jpg',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 8,
                title: 'Acer UP200 USB Flash Drive',
                image:'http://localhost:3000/_nuxt/assets/images/01.jpg',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 9,
                title: 'Acer UF300 USB Flash Drive',
                image:'http://localhost:3000/_nuxt/assets/images/6.png',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 10,
                title: 'Acer UF200 USB Flash Drive',
                image:'http://localhost:3000/_nuxt/assets/images/6.png',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 11,
                title: 'Acer SC300 SD Card',
                image:'http://localhost:3000/_nuxt/assets/images/1.png',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 12,
                title: 'Acer SC900 SD Card',
                image:'http://localhost:3000/_nuxt/assets/images/010.png',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
             },
            {
                id: 13,
                title: 'Acer HT100 Desktop DRAM',
                image:'http://localhost:3000/_nuxt/assets/images/7.jpg',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 14,
                title: 'Acer CFexpress card CFE100',
                image:'http://localhost:3000/_nuxt/assets/images/CFE.jpg',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
          },
            {
                id: 15,
                title: 'Acer CFE100 Memory Card',
                image:'http://localhost:3000/_nuxt/assets/images/1T.jpg',
                description:'Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)'
            },
      ]
  }),
   actions: {
    },
});
