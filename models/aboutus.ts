import mongoose from 'mongoose';

const aboutUsSchema = new mongoose.Schema(
  {
    text: {
      az: String,
      en: String,
      ru: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.AboutUs || mongoose.model('AboutUs', aboutUsSchema);
