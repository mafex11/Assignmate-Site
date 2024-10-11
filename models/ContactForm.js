// models/ContactForm.js
import mongoose from 'mongoose';

const ContactFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const ContactFormModel = mongoose.models.ContactForm || mongoose.model('ContactForm', ContactFormSchema);

export default ContactFormModel;
