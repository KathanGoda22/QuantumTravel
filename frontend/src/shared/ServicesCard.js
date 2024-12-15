import React, { useState } from "react";
import './servicescard.css';
import { motion } from "framer-motion";

const Card = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-flex">
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="card"
    >
      <motion.h2 layout="position">{title}</motion.h2>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="expand"
        >
          <p>{description}</p>
        </motion.div>
      )}
    </motion.div>
    </div>
  );
};

const App = () => {
  const cards = [
    { id: 1, title: "New Year, New Adventures", description: "Save 15% Or More When You Book And Stay Before April 1, 2024" },
    { id: 2, title: "Get Instant Discounts", description: "Sign In To Save 10% Or More With A Free Booking.com Membership" },
    { id: 3, title: "Special Discounts On Singapore Hotels", description: "Grab Up To 25% OFF* On Hotels In Singapore" },
    { id: 4, title: "Your Next Dream Holiday Starts Here", description: "Get Discounts on DBS Bank Credit Cards" },
  ];

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default App;
