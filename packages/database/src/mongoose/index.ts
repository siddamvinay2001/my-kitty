import { group, timeStamp } from "console";
import { randomUUID } from "crypto";
import mongoose, { Schema, model, connect, Document } from "mongoose";

interface IMessage extends Document {
    senderId: string;
    groupId: number;
    content: string;
    createdAt: Date;
}

interface IGroupMessage extends Document {
    groupId: string;
    messages: IMessage[];
    lastUpdate: Date;
}

const MessageSchema: Schema = new Schema({
    senderId: { type: String, required: true },
    groupId: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

const GroupMessageSchema: Schema = new Schema({
    groupId: { type: String, required: true },
    messages: { type: [MessageSchema], default: [] },
    lastUpdated: { type: Date, default: Date.now }
})

const Message = mongoose.model<IMessage>("Message", MessageSchema);
const GroupMessage = mongoose.model<IGroupMessage>('GroupMessage', GroupMessageSchema);

export { Message, GroupMessage };
export type { IMessage, IGroupMessage };