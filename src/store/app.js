// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    snackText: '',
    snackbar: false,
    snackColor: 'indigo',
    nav: [
      { to: 'home', title: 'Home' },
      { to: 'about', title: 'About' },
      { to: 'blog', title: 'Blog' },
      { to: 'contact', title: 'Contact' },
      { to: 'gallery', title: 'Gallery' },
    ],

    drawer: false,

    team: [
      {
        image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885243/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.10dwdq_suf56l.jpg',
        name: 'Nnenna Orjinta (president)'
      },
      {
        image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885244/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.11dq_uqu1fl.jpg',
        name: 'Emmanuel Osuwah'
      },
      {
        image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885243/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.11_qyma91.jpg',
        name: 'Dr. Felicia Ikebude'
      },
      {
        image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885244/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.11dqd_nwee3g.jpg',
        name: 'Anthony Orjinta'
      },
      {
        image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885244/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.11add_i1vh0p.jpg',
        name: 'Laurie V'
      },
      {
        image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885244/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.12_e9espe.jpg',
        name: 'Nkemdirin Orjinta'
      },
      {
        image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885244/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.12cwecwec_ndijgn.jpg',
        name: 'Attorney Chinyere Okwulehie'
      },
      {
        image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885252/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.122222_e7mdy8.jpg',
        name: 'Stephanie A'
      },
    ]
  }),
})
