import { defineStore } from "pinia";
export const useProductStore = defineStore("product", {
  state: () => ({
    products: [
      {
        id: 1,
        type: "PCIe M.2 SSD",
        title: "Acer MA200 NVMe SSD ",
        image: "/Acer_MA200.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 2,
        type: "Memory",
        title: "Acer UD200 DDR5 Desktop Memory",
        image: "/Acer_UD200.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 3,
        type: "Memory",
        title: "Acer SD200 Laptop DRAM",
        image: "/Acer_SD200.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 4,
        type: "PCIe M.2 SSD",
        title: "Acer FA200 PCle M.2 SSD",
        image: "/product-3.png",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 5,
        type: "Memory Card",
        title: "Acer MSC300 MicroSD Card",
        image: "/1n.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 6,
        type: "USB Flash Drive",
        title: "Acer UM310 USB Flash Drive",
        image: "/UM310.png",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 7,
        type: "USB Flash Drive",
        title: "Acer UP300 USB Flash Drive",
        image: "/product-4.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 8,
        type: "USB Flash Drive",
        title: "Acer UP200 USB Flash Drive",
        image: "/01.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 9,
        type: "USB Flash Drive",
        title: "Acer UF300 USB Flash Drive",
        image: "/6.png",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 10,
        type: "USB Flash Drive",
        title: "Acer UF200 USB Flash Drive",
        image: "/6.png",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 11,
        type: "Memory Card",
        title: "Acer SC300 SD Card",
        image: "/1.png",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 12,
        type: "Memory Card",
        title: "Acer SC900 SD Card",
        image: "/010.png",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 13,
        type: "Memory",
        title: "Acer HT100 Desktop DRAM",
        image: "/7.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 14,
        type: "Memory Card",
        title: "Acer CF express card CFE100",
        image: "/CFE.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 15,
        type: "Memory Card",
        title: "Acer CFE100 Memory Card",
        image: "/1T.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 16,
        type: "SATA M.2 SSD",
        title: "Acer RE100 M.2 SSD",
        image: "/FA200PCI.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 17,
        type: "Memory",
        title: "Acer UD100 Desktop DRAM",
        image: "/UD100.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 18,
        type: "Memory",
        title: "Acer SD100 Laptop DRAM",
        image: "/Acer_SD200.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 19,
        type: "SATA 2.5 SSD",
        title: "Acer SA100 2.5 SATA III SSD",
        image: "/SATA2.5.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
      {
        id: 20,
        type: "SATA 2.5 SSD",
        title: "Acer RE100 2.5 SATA III SSD",
        image: "/SATA2.52.jpg",
        description:
          "Unleash speeds up to 5600 MHz Elevate stability with On-Die ECC Power management IC (PMIC)",
      },
    ],
    selectedType: "ALL",
    selectedProduct: '',
    searchInput: '',
    filteredlist: [],
  }),
  actions: {
    showDetails(id) {
          const router = useRouter();
          this.selectedProduct = id
          router.push('/productdetails')
                    },
    searchItem(word) {
          const router=useRouter()
            if(!word)
                   {
              router.push('/search')
              this.filteredlist = [];
              console.log('No word')
              return;
                   }
        this.filteredlist = this.products.filter((item) => item.title.toLowerCase().includes(word.toLowerCase()))
        router.push('/search')
                      },
    showItems(t) {
      this.filteredlist = this.products.filter((item) => item.type === t);
   }
  },
});
