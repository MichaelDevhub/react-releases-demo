export interface IReactions {
    '+1'?: number;
    '-1'?: number;
    laugh?: number;
    hooray?: number;
    confused?: number;
    heart?: number;
    rocket?: number;
    eyes?: number;
}

export const reactionEmojis: { [key: string]: string } = {
    '+1': '👍',
    '-1': '👎',
    laugh: '😄',
    hooray: '🎉',
    confused: '😕',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
};
