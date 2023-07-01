
export interface IReactions {
    "+1": number;
    "-1": number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
}

export interface IReleaseData {
    tag_name: string;
    name: string;
    html_url: string;
    reactions: IReactions;
}
