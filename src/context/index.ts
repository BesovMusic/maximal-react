import { createContext, Dispatch, SetStateAction } from "react";

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

type ProviderTypes = {
    postList: IPost[],
    selectedPostId: number | null,
    selectPost: Dispatch<SetStateAction<number | null>>;
}

export const PostContext = createContext<ProviderTypes>({postList: [], selectedPostId: null, selectPost: () => undefined})