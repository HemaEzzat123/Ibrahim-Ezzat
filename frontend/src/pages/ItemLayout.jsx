import { motion } from "framer-motion";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 ${className}`}
      style={{
        backgroundColor: "rgba(34, 21, 207, 0.05)",
        border: "1px solid rgba(34, 21, 207, 0.1)",
        backdropFilter: "blur(6px)",
        boxShadow: "inset 0 17px 5px -9px rgba(34, 21, 207, 0.1)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
