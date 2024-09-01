import { IBike } from "./IBike";
import { TUserInfo } from "./TUserInfo";

export interface IRental {
  _id: string;
  userId: TUserInfo;
  bikeId: IBike;
  startTime: Date;
  returnTime: Date;
  totalCost: number;
  isReturned: boolean;
  bookingPayment: "paid" | "unpaid";
}
