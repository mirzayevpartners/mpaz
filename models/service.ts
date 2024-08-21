import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: {
      az: String,
      en: String,
      ru: String,
    },
    description: {
      az: String,
      en: String,
      ru: String,
    },
    icon: { src: String, title: String, public_id: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Service || mongoose.model('Service', serviceSchema);
