import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    title: {
      az: String,
      en: String,
      ru: String,
    },
    slug: String,
    slugTitle: {
      az: String,
      en: String,
      ru: String,
    },
    content: {
      az: String,
      en: String,
      ru: String,
    },
    images: [{ src: String, title: String, public_id: String }],
    mainImage: { src: String, title: String, public_id: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.News || mongoose.model('News', newsSchema);
