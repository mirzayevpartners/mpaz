import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    question: {
      az: String,
      en: String,
      ru: String,
    },
    answer: {
      az: String,
      en: String,
      ru: String,
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Question || mongoose.model('Question', teamSchema);
