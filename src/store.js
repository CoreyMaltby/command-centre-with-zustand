import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create
    (persist(
        (set) => ({
            // Initial state
            theme = 'light',
            reportRange: 'Today',
            // Tracks which department pannels are open
            departments: {
                produce: true,
                diary: true,
                bakery: true,
                frozen: true,
            },

            // Actions
            toggleManagerTheme: () => set((state) => ({
                managerTheme: state.managerTheme === 'light' ? 'dark' : 'light',
            })),

            setReportRange: (range) => set({ reportRange: range }),

            // Toggle the visibility of a department pannel
            toggleDepartment: (department) => set((state) => ({
                departments: {
                    ...state.departments,
                    [departmentName]: !state.departments[departmentName],
                },
            })),
            resetLayout: () => set({
                theme: 'light',
                reportRange: 'Today',
                departments: {
                    produce: true,
                    diary: true,
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