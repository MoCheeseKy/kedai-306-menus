import { ImSpoonKnife } from 'react-icons/im';
import { FaGlassMartini, FaShoppingCart } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import { DataMakanan } from './dataMakanan';
import { DataMinuman } from './dataMinuman';

function App() {
  return (
    <>
      <div className='flex justify-center bg-[#111] text-[#fafafa]'>
        <div className='px-4 py-12 w-full max-w-[720px] min-h-[100vh]'>
          <div className='w-full text-center barlow font-bold text-4xl'>
            Kedai
            <span className='text-[#f65052]'> 3</span>
            <span>0</span>
            <span className='text-[#607adb]'>6 </span>
            Menus
          </div>
          <main className='mt-6'>
            <div className='my-6 flex gap-4 items-center'>
              <div className='min-w-9 min-h-9 rounded-full border-[#f65052] border-2 flex justify-center items-center'>
                <ImSpoonKnife />
              </div>
              <p className='barlow text-lg font-bold'>Makanan</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 inter'>
              {DataMakanan?.map((food, foodIndex) => (
                <div key={foodIndex}>
                  <div className='text-lg font-medium mb-4 bg-[#f65052] text-[#fafafa] px-6 py-1 rounded-[8px] w-fit'>
                    {food?.manuName}
                  </div>
                  <div className='flex flex-col gap-2'>
                    {food?.variant?.map((variant, indexVariant) => (
                      <div key={indexVariant} className='flex justify-between'>
                        <div className='text-sm'>{variant?.variantname}</div>
                        <div className='text-[#50D890]'>{variant?.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className='my-6 flex gap-4 items-center'>
              <div className='min-w-9 min-h-9 rounded-full border-[#607adb] border-2 flex justify-center items-center'>
                <FaGlassMartini />
              </div>
              <p className='barlow text-lg font-bold'>Minuman</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 inter'>
              {DataMinuman?.map((drink, drinkIndex) => (
                <div key={drinkIndex}>
                  <div className='text-lg font-medium mb-4 bg-[#607adb] text-[#fafafa] px-6 py-1 rounded-[8px] w-fit'>
                    {drink?.manuName}
                  </div>
                  <div className='flex flex-col gap-2'>
                    {drink?.variant?.map((variant, indexVariant) => (
                      <div key={indexVariant} className='flex justify-between'>
                        <div className='text-sm'>{variant?.variantname}</div>
                        <div className='text-[#50D890]'>{variant?.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className='my-6 flex gap-4 items-center'>
              {/* <p className='barlow text-lg font-bold'>Informasi</p> */}
            </div>
            <div className='flex flex-col gap-4'>
              <p className='inter text-sm w-[80%]'>
                Pemesanan bisa di antar selama masih di kawasan Asrama telkom
                University. Sedia juga jasa titip kulkas.
              </p>
              <div className='flex gap-4 text-xl'>
                <div className='min-w-[18px]'>
                  <FaLocationDot size={18} />
                </div>
                <p className='inter text-sm'>
                  Asrama putra Telkom University Gedung 6, 306, Jalan
                  Telekomunikasi no 1, Kecamatan Dayeuhkolot, Kabupaten Bandung,
                  Jawa Barat. (Asrama Putra Telkom University Bandung)
                  Dayeuhkolot, Kab. Bandung
                </p>
              </div>
            </div>
            <a
              href='https://wa.me/+6281210714320?text=Halo Bangggg !!! %0A%0Amau pesen dong :D%0ANama : %0ALokasi Antar : %0APesanan : %0ACatatan : (contoh : banyakin porsinya yakkk!!!)'
              className='flex gap-4 text-xl justify-center items-center py-4 bg-[#50D890] rounded-[16px] mt-12'
            >
              <FaShoppingCart />
              <p className='inter'>Order Now</p>
            </a>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
