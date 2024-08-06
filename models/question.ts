import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Question || mongoose.model('Question', teamSchema);
