import SuccessNotification from "./components/SuccessNotification";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedSuccessNotification = ({ showSuccess, setShowSuccess }) => {
  return (
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <SuccessNotification closeModal={setShowSuccess} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedSuccessNotification;
