import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer>
      <motion.h3 drag whileDrag={{ scale: 2 }}>
        Created by <span className="algida">StaryAlgida</span>
      </motion.h3>
    </footer>
  );
}
