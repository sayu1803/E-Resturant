import React from 'react';

const categoryItems = [
  { id: 1, title: "Main Dish", des: "(86 Dishes)", image: "/images/home/category/img1.png" },
  { id: 2, title: "Break Fast", des: "(12 Dishes)", image: "/images/home/category/img2.png" },
  { id: 3, title: "Desserts", des: "(48 Dishes)", image: "/images/home/category/img3.png" },
  { id: 4, title: "Browse All", des: "(255 Dishes)", image: "/images/home/category/img4.png" }
];

const Categories = () => {
  return (
    <div className='section-container py-16'>
      <div className='text-center'>
        <p className='subtitle'>Customer Favourites</p>
        <h2 className='title'>Popular Categories</h2>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
        {categoryItems.map((item) => (
          <div key={item.id} className='category-card bg-white shadow-md rounded-lg p-6 text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
            <div className='bg-[#C1F1C6] rounded-full p-4 mx-auto mb-4 w-32 h-32 flex items-center justify-center'>
              <img src={item.image} alt={item.title} className='rounded-full w-24 h-24' />
            </div>
            <h3 className='text-lg font-semibold'>{item.title}</h3>
            <p className='text-gray-600'>{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
