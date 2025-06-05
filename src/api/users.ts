import axiosClient from './axiosClient';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axiosClient.get<User[]>('/users');
  return data;
};

export const getUser = async (id: string): Promise<User> => {
  const { data } = await axiosClient.get<User>(`/users/${id}`);
  return data;
};

export const updateUser = async (id: string, values: Partial<User>): Promise<User> => {
  const { data } = await axiosClient.put<User>(`/users/${id}`, values);
  return data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axiosClient.delete(`/users/${id}`);
};

export default { getUsers, getUser, updateUser, deleteUser };
