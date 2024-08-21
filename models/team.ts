import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    fullName: {
      az: String,
      en: String,
      ru: String,
    },
    email: String,
    profession: {
      az: String,
      en: String,
      ru: String,
    },
    photo: { src: String, title: String, public_id: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Team || mongoose.model('Team', teamSchema);
