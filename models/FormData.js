import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  imageUrl: [{ type: String }],  
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const FormData = mongoose.models.FormData || mongoose.model('FormData', FormDataSchema);

export default FormData;