import { create } from "zustand";

const initialUsers = [
  {
    id: 1,
    username: "admin",
    email: "admin@techfix.com",
    roles: ["admin"],
    isAvailable: true,
    currentLoad: 0,
    skills: ["laptops", "diagnostics"],
  },
  {
    id: 2,
    username: "mike",
    email: "mike@techfix.com",
    roles: ["staff"],
    isAvailable: true,
    currentLoad: 2,
    skills: ["phones", "batteries"],
  },
  {
    id: 3,
    username: "sara",
    email: "sara@techfix.com",
    roles: ["staff"],
    isAvailable: false,
    currentLoad: 1,
    skills: ["desktops", "os"],
  },
  {
    id: 4,
    username: "john",
    email: "johndoe@example.com",
    roles: ["user"],
    isAvailable: true,
    currentLoad: 0,
    skills: [],
  },
  {
    id: 5,
    username: "jane",
    email: "janedoe@example.com",
    roles: ["user"],
    isAvailable: true,
    currentLoad: 0,
    skills: [],
  },
];

export const useUserStore = create((set, get) => ({
  users: initialUsers,
  getAllUsers: () => get().users,
  getStaff: () => get().users.filter((u) => u.roles.includes("staff")),
  promoteToStaff: (userId) => {
    set((state) => ({
      users: state.users.map((u) =>
        u.id === userId && !u.roles.includes("staff")
          ? { ...u, roles: [...u.roles, "staff"], isAvailable: true }
          : u
      ),
    }));
  },
  demoteFromStaff: (userId) => {
    set((state) => ({
      users: state.users.map((u) =>
        u.id === userId
          ? {
              ...u,
              roles: u.roles.filter((r) => r !== "staff"),
              isAvailable: false,
              currentLoad: 0,
            }
          : u
      ),
    }));
  },
  toggleAvailability: (userId) => {
    set((state) => ({
      users: state.users.map((u) =>
        u.id === userId ? { ...u, isAvailable: !u.isAvailable } : u
      ),
    }));
  },
  setLoad: (userId, load) => {
    set((state) => ({
      users: state.users.map((u) =>
        u.id === userId
          ? { ...u, currentLoad: Math.max(0, Number(load) || 0) }
          : u
      ),
    }));
  },
  incrementLoadByUsername: (username) => {
    set((state) => ({
      users: state.users.map((u) =>
        u.username === username ? { ...u, currentLoad: u.currentLoad + 1 } : u
      ),
    }));
  },
  suggestStaffForRequest: (request) => {
    const candidates = get().users.filter(
      (u) => u.roles.includes("staff") && u.isAvailable
    );
    if (candidates.length === 0) return null;
    const byLoad = [...candidates].sort(
      (a, b) => a.currentLoad - b.currentLoad
    );
    return byLoad[0];
  },
}));
