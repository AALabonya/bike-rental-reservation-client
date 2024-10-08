export interface TUserInfo {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  avatar?: string;
  address: string;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
}
