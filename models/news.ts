import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    slugTitle: String,
    content: String,
    images: [{ src: String, title: String, public_id: String }],
    mainImage: { src: String, title: String, public_id: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.News || mongoose.model('News', newsSchema);
