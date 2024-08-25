import { create } from 'zustand';

interface PhotoSlideModalStore {
  isModalOpen: boolean;
  photos: string[];
  currentPhotoIndex: number;
  openModal: (photos: string[], currIdx: number) => void;
  closeModal: () => void;
}

export const usePhotoSlideModalStore = create<PhotoSlideModalStore>((set) => ({
  isModalOpen: false,
  photos: [],
  currentPhotoIndex: 0,
  openModal: (photos, currIdx) => set({ isModalOpen: true, photos: photos, currentPhotoIndex: currIdx }),
  closeModal: () => set({ isModalOpen: false, photos: [] }),
}));
