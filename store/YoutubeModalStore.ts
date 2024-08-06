import { create } from 'zustand';

interface YoutubeModalStore {
  isModalOpen: boolean;
  videoId: string | null;
  openModal: (videoId: string | undefined) => void;
  closeModal: () => void;
}

export const useYoutubeModalStore = create<YoutubeModalStore>((set) => ({
  isModalOpen: false,
  videoId: null,
  openModal: (videoId) => set({ isModalOpen: true, videoId }),
  closeModal: () => set({ isModalOpen: false, videoId: null }),
}));
