import { MotionConfig, motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-6xl font-bold text-white">Taylor Swift Concert Tickets</h1>
        <p className="mt-4 text-xl text-white">Book your tickets now and enjoy an unforgettable experience!</p>
      </motion.div>
    </section>
  );
}
