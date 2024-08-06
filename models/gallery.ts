import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    title: String,
    customDate: String,
    images: [{ src: String, title: String, public_id: String }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema);
