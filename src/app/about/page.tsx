"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import tricia from "../components/image/Tricia.png";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>About | Nourish and Flourish</title>
        <meta
          name="description"
          content="Discover our story and mission to celebrate wholesome, joyful meals at Nourish and Flourish."
        />
      </Head>

      <Navbar />

      <div className="bg-[#000] text-white-800 min-h-screen overflow-x-hidden">
        {/* HERO VIDEO */}
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover brightness-75"
          >
            <source src="/videos/about-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-white text-center px-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
              About Nourish and Flourish
            </h1>
            <p className="text-lg md:text-xl">
              Celebrating joy, flavor, and healthy living.
            </p>
          </motion.div>
        </section>

        {/* MEET THE FOUNDER */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={tricia}
              alt="Tricia the Founder"
              className="rounded-2xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Meet Tricia</h2>
            <p className="text-lg mb-4">
              Tricia is the heart behind Nourish and Flourish — a culinary
              storyteller passionate about health, flavor, and connecting people
              around the table. Her vibrant recipes and nourishing ideas have
              touched thousands.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-3 bg-[#FF2B6D] text-white font-semibold rounded-full shadow-lg hover:bg-[#CF5A70] transition duration-300"
            >
              Connect with Tricia
            </a>
          </motion.div>
        </section>

        {/* PHILOSOPHY */}
        <section className=" py-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-6">Our Philosophy</h3>
            <p className="text-lg leading-relaxed">
              At <strong>Nourish and Flourish</strong>, we believe that food is
              more than nourishment — it's joy, art, and connection. Whether
              you're cooking for family, friends, or just yourself, we want to
              make it a celebration.
            </p>
          </motion.div>
        </section>

        {/* IMAGE GALLERY */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10">
              Behind the Scenes
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["1", "2", "3", "4", "5", "6"].map((img, i) => (
                <motion.img
                  key={i}
                  src={`/images/gallery-${img}.jpg`}
                  alt={`gallery-${img}`}
                  className="rounded-xl shadow-md object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 bg-[#333] px-6">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold">What We Value</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🍏",
                title: "Wellness First",
                desc: "We promote mindful eating habits that energize your life.",
              },
              {
                icon: "🎨",
                title: "Creative Expression",
                desc: "Each recipe is a canvas for your personality and love.",
              },
              {
                icon: "🌿",
                title: "Sustainable Living",
                desc: "Supporting local, seasonal, and plant-forward meals.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-black rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-[#FF2B6D] text-white text-center px-6 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Cook Up Something Beautiful
            </h2>
            <p className="text-lg mb-6">
              Browse our delicious recipes and join a community of food lovers.
            </p>
            <a
              href="/recipes"
              className="inline-block px-8 py-4 bg-white text-black font-bold text-lg rounded-full shadow-lg hover:bg-[#f5f5f5] transition duration-300"
            >
              Explore Recipes
            </a>
          </motion.div>

          <div className="absolute -top-16 left-0 right-0 opacity-10">
            <img src="/images/bg-ingredients.png" alt="ingredients bg" className="mx-auto w-full max-w-5xl" />
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default AboutPage;
