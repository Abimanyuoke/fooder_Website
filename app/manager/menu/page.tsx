import Image from 'next/image'

import Img from '../../../public/image/biryani1.png'
import Img2 from '../../../public/image/biryani3.png'
import Img3 from '../../../public/image/biryani2.png'

interface dataMenu {
    id: number;
    img: any;
    name: string;
    deskripsi: string
}
    


const menu:dataMenu[] = [
  {
    id: 1,
    img: Img,
    name: "Biryani",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga explicabo nemo. Labore, quibusdam eius."
  },
  {
    id: 2,
    img: Img2,
    name: "Chiken Biryani",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga explicabo nemo. Labore, quibusdam eius."
  },
  {
    id: 3,
    img: Img3,
    name: "Rice Arabian",
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga explicabo nemo. Labore, quibusdam eius."
  },
]


const DashboardPage = () => {
    return (
        <div className='py-10 dark:bg-slate-900 dark:text-white min-h-dvh'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Menu</p>
          <h1 className='text-3xl font-bold'>Menu</h1>
          <p className='text-xs text-gray-400'>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ullam a nisi vero qui sed consequuntur iste cum minima error.
          </p>
        </div>
        {/* Card section */}
        <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 place-items-center py-16'>
          {
            menu.map(({id, img, name, deskripsi}) => {
              return (
                <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:text-white  hover:bg-primary hover:text-white duration-300 p-4 shadow-xl'>
                <div className='h-[120px]'>
                  <Image src={img} alt="" className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'/>
                </div>
                <div className='p-4 text-center'>
                  <h1 className='text-xl font-bold'>{name}</h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{deskripsi}</p>
                </div>
              </div>
              )
            })
          }
        </div>
        </div>
      </div>
    </div>
    )
}
export default DashboardPage
