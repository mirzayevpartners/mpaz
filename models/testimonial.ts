import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    fullName: String,
    title: String,
    text: String,
    rating: Number,
    photo: { src: String, title: String, public_id: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
