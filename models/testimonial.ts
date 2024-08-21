import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    fullName: {
      az: String,
      en: String,
      ru: String,
    },
    title: {
      az: String,
      en: String,
      ru: String,
    },
    text: {
      az: String,
      en: String,
      ru: String,
    },
    rating: Number,
    photo: { src: String, title: String, public_id: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
