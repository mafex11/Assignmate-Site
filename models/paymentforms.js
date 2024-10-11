import mongoose from 'mongoose';

const paymentFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  paymentId: { type: String, required: true },
  message: { type: String, required: true },
  imageUrl: { type: [String], required: false }, // For storing uploaded file URLs
  createdAt: { type: Date, default: Date.now }
});

const PaymentForm = mongoose.models.PaymentForm || mongoose.model('PaymentForm', paymentFormSchema);

export default PaymentForm;
