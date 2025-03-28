import Image from 'next/image'; // Import Next.js Image component
import image from './image/image1.jpg';
import image4 from './image/image4.jpg';
import image5 from './image/image5.jpg';
import brand from "./image/WhatsApp Image 2025-03-27 at 03.18.22_767bfbf7.jpg";
import brand2 from "./image/WhatsApp Image 2025-03-27 at 03.43.33_48e2198f.jpg";
import brand3 from "./image/WhatsApp Image 2025-03-27 at 03.43.34_783c4845.jpg";
import safety from "./image/0730c127-c646-46ec-8b65-80deea4235dc.jpg";

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-100 text-center">
            <h1 className="text-4xl mb-10 text-black">What Our Clients Say</h1>
            <div className="flex justify-around mb-10">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <Image 
                            src={testimonial.photo} 
                            alt={testimonial.name} 
                            width={80} 
                            height={80} 
                            className="rounded-full mx-auto mb-4" 
                        />
                        <h3 className="text-xl mb-2 text-black">{testimonial.name}</h3>
                        <p className="text-gray-600 italic">{testimonial.quote}</p>
                    </div>
                ))}
            </div>

            {/* Black Container */}
            <div className="bg-black text-white py-10">
                <h2 className="text-3xl mb-6 text-white">Our Trusted Brands</h2>
                <div className="flex justify-around">
                    {brandsData.map((brand, index) => (
                        <div key={index} className="text-center transform transition-transform duration-300 hover:scale-105">
                            <Image 
                                src={brand.logo} 
                                alt={brand.name} 
                                width={80} 
                                height={80} 
                                className="mb-2" 
                            />
                            <p className="text-white">{brand.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blog Section */}
            <div className="mt-16">
                <h2 className="text-3xl mb-6 text-black">Our Latest News & Blog</h2>
                <div className="flex flex-col lg:flex-row justify-around flex-wrap">
                    {blogData.map((post, index) => (
                        <div key={index} className="bg-white m-2 p-4 rounded-lg shadow-lg w-full lg:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                            <Image 
                                src={post.image} 
                                alt={post.title} 
                                width={500} 
                                height={300} 
                                className="w-full rounded-lg mb-4" 
                            />
                            <h3 className="text-xl mb-2 text-black">{post.title}</h3>
                            <p className="text-black">{post.excerpt}</p>
                            <a 
                                href={post.link} 
                                className="inline-block mt-3 py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-none border-2 border-yellow-500 transition duration-300 "
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const testimonialsData = [
    { photo: image5, name: 'Jane Doe', quote: 'An outstanding company that delivered on time and on budget!' },
    { photo: image4, name: 'Jennet Smith', quote: 'Professional and reliable service. Highly recommend!' },
];

const brandsData = [
    { logo: brand, name: 'Brand 1' },
    { logo: brand2, name: 'Brand 2' },
    { logo: brand3, name: 'Brand 3' },
];

const blogData = [
    { image: image, title: 'Building the Future', excerpt: 'Discover our latest projects and innovations.', link: '#' },
    { image: safety, title: 'Safety First', excerpt: 'Learn about our safety protocols and practices.', link: '#' },
];

export default Testimonials;