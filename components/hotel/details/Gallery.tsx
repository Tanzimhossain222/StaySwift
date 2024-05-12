import Image from "next/image";



const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image src="./assets/images/1.png" className="h-[400px]" alt="" height={ 400}
          width= {400}/>

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          <Image src="./assets/images/2.png" alt="" 
          height={200}
          width={200}
          />
          <Image src="./assets/images/3.png" alt=""height={200}
          width={200} />
          <Image src="./assets/images/4.png" alt="" height={200}
          width={200}/>
          <Image src="./assets/images/5.png" alt="" height={200}
          width={200}/>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
