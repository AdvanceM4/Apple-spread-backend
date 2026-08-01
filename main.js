const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const deliveries = [
  {
    trackingNumber: "ASD-2026-001",
    status: "In Transit",
    location: "Lagos Distribution Center",
    estimatedDelivery: "August 5, 2026"
  },
  {
    trackingNumber: "ASD-2026-002",
    status: "Delivered",
    location: "Abuja",
    estimatedDelivery: "August 1, 2026"
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "Apple Spread Backend Running"
  });
});

app.get("/api/track/:trackingNumber", (req, res) => {

  const delivery = deliveries.find(
    d => d.trackingNumber === req.params.trackingNumber
  );

  if (!delivery) {
    return res.status(404).json({
      message: "Tracking number not found"
    });
  }

  res.json(delivery);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});