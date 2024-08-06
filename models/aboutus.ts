import mongoose from 'mongoose';

const aboutUsSchema = new mongoose.Schema(
  {
    text: String,
    image: { src: String, title: String, public_id: String },
  },
  { timestamps: true }
);

export default mongoose.models.AboutUs || mongoose.model('AboutUs', aboutUsSchema);
