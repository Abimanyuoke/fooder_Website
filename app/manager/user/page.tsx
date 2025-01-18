interface dataUser {
    id: number;
    name: string;
    text: string;
    img: string
}

const testimoialsData:dataUser[] = [
    {
      id: 1,
      name: "Jhone Dhots",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam cum accusantium at a? Mollitia ullam delectus?",
      img: "https://picsum.photos/101/101"
    },
    {
      id: 2,
      name: "Alexander Arlot",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam cum accusantium at a? Mollitia ullam delectus?",
      img: "https://picsum.photos/102/101"
    },
    {
      id: 3,
      name: "David Degea",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam cum accusantium at a? Mollitia ullam delectus?",
      img: "https://picsum.photos/103/101"
    },
    {
      id: 4,
      name: "Jonny Rich",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam cum accusantium at a? Mollitia ullam delectus?",
      img: "https://picsum.photos/104/101"
    },
    {
      id: 5,
      name: "Analisa",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam cum accusantium at a? Mollitia ullam delectus?",
      img: "https://picsum.photos/106/101"
    },
  
  ]


const DashboardPage = () => {
    return (
        <div className='py-10 bg-gray-900 text-white min-h-screen'>
        <div className="container">
            {/* Header section */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>User</p>
            <h1 className='text-3xl font-bold'>Testimonial</h1>
            <p className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ullam a nisi vero qui sed consequuntur iste cum minima error.
            </p>
            </div>
            {/* Testimonial section */}
            <div className='gap-6'>
                <div className="flex">
                  {
                    testimoialsData.map(({id, name, text, img}) => {
                      return (
                      <div key = {id} className='my-6'>
                        <div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                          <img src={img} alt="" className='rounded-full block mx-auto'/>
                          <p className='text-gray-500 text-sm'>{text}</p>
                          <h1 className='text-xl font-bold'>{name}</h1>
                          <p className='text-black/20 text-9xl font-serif absolute top-0 right-0 '>,,</p>
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
