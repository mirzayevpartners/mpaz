import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    key: String,
    value: String,
    icon: { src: String, title: String, public_id: String },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
