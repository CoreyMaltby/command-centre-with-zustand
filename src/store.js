import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create
    (persist(
        (set) => ({
            // Initial state
            managerTheme: 'light',
            reportRange: 'Today',
            // Tracks which department pannels are open
            departments: {
                produce: true,
                dairy: true,
                bakery: false,
                frozen: false,
            },

            // Actions
            toggleManagerTheme: () => set((state) => ({
                managerTheme: state.managerTheme === 'light' ? 'dark' : 'light',
            })),

            setReportRange: (range) => set({ reportRange: range }),

            // Toggle the visibility of a department pannel
            toggleDepartment: (departmentName) => set((state) => ({
                departments: {
                    ...state.departments,
                    [departmentName]: !state.departments[departmentName],
                },
            })),
            resetLayout: () => set({
                managerTheme: 'light',
                reportRange: 'Today',
                departments: {
                    produce: true,
                    dairy: true,
                    bakery: false,
                    frozen: false,
                }
            })
        }),
        {
            name: 'manager-dashboard-store', // LocalStorage key
        }
    )
    );