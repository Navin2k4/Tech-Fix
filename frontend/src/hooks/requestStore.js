import { create } from "zustand";

const initialRequests = [
  {
    id: 1,
    title: "Screen replacement for laptop",
    description: "My laptop screen is cracked and needs replacement.",
    status: "PENDING",
    customerUsername: "johndoe",
    assignedStaff: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Phone battery draining fast",
    description: "Battery drains from 100% to 20% within 2 hours.",
    status: "IN_PROGRESS",
    customerUsername: "janedoe",
    assignedStaff: "tech.mike",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Desktop not booting",
    description: "PC powers on but does not boot into OS.",
    status: "COMPLETED",
    customerUsername: "alex",
    assignedStaff: "tech.sara",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
];

export const useRequestStore = create((set, get) => ({
  requests: initialRequests,
  getRequestById: (id) =>
    get().requests.find((r) => String(r.id) === String(id)) || null,
  createRequest: ({ title, description, customerUsername }) => {
    const newId = (get().requests.at(-1)?.id || 0) + 1;
    const now = new Date().toISOString();
    const newRequest = {
      id: newId,
      title,
      description,
      status: "PENDING",
      customerUsername,
      assignedStaff: null,
      createdAt: now,
      updatedAt: now,
    };
    set((state) => ({ requests: [...state.requests, newRequest] }));
    return newRequest;
  },
  updateRequest: (id, updates) => {
    set((state) => ({
      requests: state.requests.map((r) =>
        String(r.id) === String(id)
          ? { ...r, ...updates, updatedAt: new Date().toISOString() }
          : r
      ),
    }));
  },
}));
