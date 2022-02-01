import {
  MouseParallaxContainer,
  MouseParallaxChild
} from 'react-parallax-mouse'

function ParallaxGrid () {
  //  document.addEventListener("mousemove",parallax);
  //  function parallax(e){
  //    this.querySelectorAll('.layer').forEach(layer => {
  //      const speed = layer.getAttribute('data-speed')
  //      const x = (window.innerWidth - e.pageX*speed/100)
  //      const y = (window.innerWidth - e.pageY*speed/100)

  //      layer.style.transform = `translateX(${x}px) translateY(${y}px)`

  //    });
  //  }

  return (
    <>

    
   

      <div className='relative flex flex-col space-y-2 my-10 px-8  max-w-[1400px] mx-auto  '>
        <h2 className='font-semibold'>Parallax</h2>
        <MouseParallaxContainer>
        <MouseParallaxChild factorX={0.30} factorY={0.35}>
        <div className='grid grid-cols-4 gap-4 mt-10'>
            <div className='h-20 bg-red-700 layer'></div>
            <div className='h-20 bg-red-700 layer'></div>
            <div className='h-20 bg-red-700 layer'></div>
            <div className='h-20 bg-red-700 layer'></div>
            <div className='h-20 bg-red-700 layer'></div>
            <div className='h-20 bg-red-700 layer'></div>
            <div className='h-20 bg-red-700 layer'></div>
            <div className='h-20 bg-red-700 layer'></div>
          </div>
        </MouseParallaxChild>
       
      </MouseParallaxContainer>
       
      </div>
    </>
  )
}

export default ParallaxGrid
