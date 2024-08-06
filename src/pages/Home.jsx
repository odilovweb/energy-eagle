import React from "react";

function Home() {
  return (
    <div>
      <div className="">
        <div className="diff aspect-[16/3]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content grid place-content-center text-5xl font-black">
              Hoziroq buyurtma bering
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 grid place-content-center text-5xl font-black">
              Sport uchun Kiyimlar
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold ">Ishonch - Sifat</h1>
            <p className="mb-5 text-3xl font-bold">
              Ushbu sayt <span>Energy Eagle</span> mahsulotlarini sotib olish
              uchun ishlab chiqilgan.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="flex px-5 justify-around flex-wrap gap-6 py-8">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Sport uchun Mayka</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary"> Buyurtma berish</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Sport uchun Shortik</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buyurtma berish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
