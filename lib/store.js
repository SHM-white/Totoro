'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      hasHydrated: false,
      isLoggedIn: false,
      userInfo: null,
      token: '',
      stuNumber: '',
      schoolId: '',
      campusId: '',
      campusName: '',

      setHasHydrated: (hasHydrated) => set({ hasHydrated }),

      login: (data) => {
        set({
          isLoggedIn: true,
          userInfo: data,
          token: data.token,
          stuNumber: data.stuNumber,
          schoolId: data.schoolId,
          campusId: data.campusId,
          campusName: data.campusName,
        });
      },

      logout: () => {
        set({
          isLoggedIn: false,
          userInfo: null,
          token: '',
          stuNumber: '',
          schoolId: '',
          campusId: '',
          campusName: '',
          records: [],
          recordsLoading: false,
        });
      },

      getAuthData: () => {
        const state = get();
        return {
          token: state.token,
          stuNumber: state.userInfo?.snCode || state.stuNumber,
          schoolId: state.schoolId,
          schoolCode: state.userInfo?.schoolCode || state.schoolId,
          campusId: state.userInfo?.schoolCampusCode || state.campusId,
          campusName: state.campusName,
        };
      },

      records: [],
      recordsLoading: false,

      setRecords: (records) => set({ records }),
      setRecordsLoading: (recordsLoading) => set({ recordsLoading }),
    }),
    {
      name: 'totoro-store',
      version: 1,
      // Discard legacy App QR sessions.
      migrate: () => ({ isLoggedIn: false, userInfo: null, token: '', stuNumber: '', schoolId: '', campusId: '', campusName: '' }),
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        userInfo: state.userInfo,
        token: state.token,
        stuNumber: state.stuNumber,
        schoolId: state.schoolId,
        campusId: state.campusId,
        campusName: state.campusName,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

export default useStore;
