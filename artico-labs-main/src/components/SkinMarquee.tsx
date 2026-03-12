import { motion } from "framer-motion";

const skins = [
  "/skins/skin1.png",
  "/skins/skin2.png",
  "/skins/skin3.png",
  "/skins/skin4.png",
  "/skins/skin5.png",
];

export const SkinMarquee = () => {
  return (
    <div className="overflow-hidden w-full py-10">

      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...skins, ...skins].map((skin, i) => (
          <div
            key={i}
            className="min-w-[260px] h-[160px] bg-black/20 rounded-xl flex items-center justify-center"
          >
            <img
              src={skin}
              alt="laptop skin"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </motion.div>

    </div>
  );
};