import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    title: {
      az: String,
      en: String,
      ru: String,
    },
    customDate: String,
    images: [
      { src: { src: String, title: String, public_id: String }, imageTitle: { az: String, en: String, ru: String } },
    ],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema);
