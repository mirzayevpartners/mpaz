import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema(
  {
    title: {
      az: String,
      en: String,
      ru: String,
    },
    customDate: String,
    videos: [
      {
        src: String,
        title: {
          az: String,
          en: String,
          ru: String,
        },
      },
    ],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Video || mongoose.model('Video', videoSchema);
