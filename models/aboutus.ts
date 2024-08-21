import mongoose from 'mongoose';

const aboutUsSchema = new mongoose.Schema(
  {
    text: {
      az: String,
      en: String,
      ru: String,
    },
    image: { src: String, title: String, public_id: String },
  },
  { timestamps: true }
);

export default mongoose.models.AboutUs || mongoose.model('AboutUs', aboutUsSchema);
