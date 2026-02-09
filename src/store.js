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

            // Mock Data
            salesData: [
                { time: '08:00', produce: 400, dairy: 240, bakery: 100, frozen: 50 },
                { time: '10:00', produce: 300, dairy: 139, bakery: 210, frozen: 80 },
                { time: '12:00', produce: 200, dairy: 980, bakery: 290, frozen: 150 },
                { time: '14:00', produce: 278, dairy: 390, bakery: 200, frozen: 120 },
                { time: '16:00', produce: 189, dairy: 480, bakery: 181, frozen: 200 },
            ],

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