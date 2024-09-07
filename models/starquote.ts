import mongoose from 'mongoose';

const starQuote = new mongoose.Schema(
  {
    text: {
      az: String,
      en: String,
      ru: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Starquote || mongoose.model('Starquote', starQuote);
