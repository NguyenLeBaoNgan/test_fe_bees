
export interface User {
  id: string;
  name: string;
  balance: number;
  email: string;
  registerAt: Date;
  active: boolean;
}


export const generateMockUsers = (count: number): User[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    name: `User ${i + 1}`,
    balance: Math.floor(Math.random() * 1000000) / 20,
    email: `user${i + 1}@gmail.com`,
    registerAt: new Date(Date.now() - Math.random() * 10000000000),
    active: Math.random() > 0.5,
  }));
};

// create 100 users
export const mockUsers = generateMockUsers(100);
