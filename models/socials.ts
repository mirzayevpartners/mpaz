import mongoose from 'mongoose';

const socialsSchema = new mongoose.Schema(
  {
    title: String,
    link: String,
  },
  { timestamps: true }
);

export default mongoose.models.Socials || mongoose.model('Socials', socialsSchema);
