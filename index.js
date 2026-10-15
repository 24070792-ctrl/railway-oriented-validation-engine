const validateTrain = (train) => {
  if (!train.trainNumber) {
    return { ok: false, error: "Train number is required" };
  }

  if (train.seats < 0) {
    return { ok: false, error: "Seats cannot be negative" };
  }

  return { ok: true, value: { ...train } };
};

const addSeats = (train, extraSeats) => ({
  ...train,
  seats: train.seats + extraSeats
});

const originalTrain = {
  trainNumber: "12101",
  seats: 50
};

const updatedTrain = addSeats(originalTrain, 10);
const result = validateTrain(updatedTrain);

console.log("Original train:", originalTrain);
console.log("Updated train:", updatedTrain);
console.log("Validation result:", result);
console.log(
  "Original data unchanged:",
  originalTrain.seats === 50
);
