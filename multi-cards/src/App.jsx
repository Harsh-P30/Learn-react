import React from 'react'
import Cards from './components/cards'

function App() {
  let productNames = [" Bleeding heart", "Rose", "Dahlia", "Orchid", "Lotus", "Chetty blooming", "Cereus", "Tulip", "Passion flower", "Lilly"];

  let aboutFlower = [
    "Bleeding heart blooms with delicate grace.",
    "Rose symbolizes love and deep passion.",
    "Dahlia dazzles with layers of beauty.",
    "Orchid captivates with exotic floral charm.",
    "Lotus rises pure from water.",
    "Chetty blooming surprises with rare color.",
    "Cereus opens only at night.",
    "Tulip brightens spring with vivid hues.",
    "Passion flower weaves intricate natural patterns.",
    "Lilly exudes elegance, fragrance, and purity."
  ];


  let styles = {
    bg: [
      "bg-[url(https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4a4af7e6facea579/6668df6ceca9a600983250ac/beautiful-flowers-hero.jpg?q=70&width=828&auto=webp)]",

      "bg-[url(https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt134818d279038650/6668df6434f6fb5cd48aac34/beautiful-flowers-rose.jpeg?q=70&width=1920&auto=webp)]",

      "bg-[url(https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltb0fc8c3edd349106/6668df63a62e8d63e6e051b2/beautiful-flowers-dahlia.jpg?q=70&width=1920&auto=webp)]",

      "bg-[url(https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt9a9dd20f65fa608c/6668df65c00ba048b58680d2/beautiful-flowers-orchid.jpg?q=70&width=1920&auto=webp)]",

      "bg-[url(https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt5f18c2119ce26485/6668df65db90945e0caf9be6/beautiful-flowers-lotus.jpg?q=70&width=1920&auto=webp)]",

      "bg-[url(https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt75ca74b29e44a4a7/6668df6408a78ca63408a238/beautiful-flowers-cherry-blossoms.jpg?q=70&width=1920&auto=webp)]",

      "bg-[url(https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltdc33099d46f5a957/6668df662162fe7402910fd1/beautiful-flowers-night-blooming-cereus.jpg?q=70&width=1920&auto=webp)]",

      "bg-[url(https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt7211f8e1a56f013e/6668df67a4c2f6572a16d576/beautiful-flowers-tulip.jpg?q=70&width=1920&auto=webp)]",

      "bg-[url(https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6cae99a21cd09910/6668df6711fac20abdf51dd7/beautiful-flowers-passion-flower.jpg?q=70&width=1920&auto=webp)]",

      "bg-[url(https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt628c4ca0754c7ceb/6668df69eca9a676ee3250a8/beautiful-flowers-lily.jpg?q=70&width=1920&auto=webp)]",

    ]
  }
  return (
    <>
      <h1 className='text-center p-10 font-bold capitalize text-4xl'>hello master !</h1>
      <div className='flex h-full w-full gap-10 flex-wrap justify-center'>


        {
          productNames.map((_, i) => (
            <div key={i}  className={`flex flex-wrap h-full justify-center items-center`}>
              <Cards aboutFlower={aboutFlower[i]} productName={productNames[i]} styles={styles.bg[i]} />
            </div>
          )
        )
      };



        {/* <div className={`flex flex-wrap h-full justify-center items-center`}>
              <Cards aboutFlower={aboutFlower[0]} productName={productNames[0]} styles={styles.bg[0]} />
            </div>

            <div className={`flex flex-wrap h-full justify-center items-center`}>
              <Cards aboutFlower={aboutFlower[1]} productName={productNames[1]} styles={styles.bg[1]} />
            </div>

            <div className={`flex flex-wrap h-full justify-center items-center`}>
              <Cards aboutFlower={aboutFlower[2]} productName={productNames[2]} styles={styles.bg[2]} />
            </div> */}



      </div>



    </>
  )
}

export default App
