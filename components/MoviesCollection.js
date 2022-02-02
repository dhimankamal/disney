import Image from 'next/image'
import { useRouter } from 'next/router'
import Carousel from 'react-grid-carousel'

function MoviesCollection () {
  const router = useRouter()

  return (
    <>
    <div className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto '>
      <h2 className='font-semibold'>adarsh</h2>

  
        <Carousel cols={4} rows={1} gap={1} >
          <Carousel.Item>
            <div className='gradient-border brand group '  id="gbox">
              <Image src='/images/disnep.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/disney.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image src='/images/pixar.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/pixar.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image src='/images/marvel.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/marvel.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
        </Carousel>
      
    </div>
    <div className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto '>
      <h2 className='font-semibold'>adarsh</h2>

  
        <Carousel cols={4} rows={1} gap={1} >
          <Carousel.Item>
            <div className='gradient-border brand group '  id="gbox">
              <Image src='/images/disnep.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/disney.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image src='/images/pixar.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/pixar.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image src='/images/marvel.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/marvel.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
        </Carousel>
      
    </div>
    <div className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto '>
      <h2 className='font-semibold'>adarsh</h2>

  
        <Carousel cols={4} rows={1} gap={1} >
          <Carousel.Item>
            <div className='gradient-border brand group '  id="gbox">
              <Image src='/images/disnep.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/disney.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image src='/images/pixar.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/pixar.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image src='/images/marvel.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/marvel.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
        </Carousel>
      
    </div>
    <div className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto '>
      <h2 className='font-semibold'>adarsh</h2>

  
        <Carousel cols={4} rows={1} gap={1} >
          <Carousel.Item>
            <div className='gradient-border brand group '  id="gbox">
              <Image src='/images/disnep.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/disney.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image src='/images/pixar.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/pixar.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image src='/images/marvel.png' layout='fill' objectFit='cover' />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/marvel.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='gradient-border brand group '>
              <Image
                src='/images/starwars.png'
                layout='fill'
                objectFit='cover'
              />
              <video
                autoPlay
                loop
                playsInline
                className='hidden group-hover:inline rounded-lg object-cover'
              >
                <source src='/videos/star-wars.mp4' type='video/mp4' />
              </video>
            </div>
          </Carousel.Item>
        </Carousel>
      
    </div>
    </>
    
  )
}

export default MoviesCollection
